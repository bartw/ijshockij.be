import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { subscribeToNewsletter } from "./subscribe";

const headers = { "Content-Type": "application/json" };

const url = `${process.env.MERCH_BOT_WEBHOOK}`;

type Item = {
  id: string;
  name: string;
  description: string;
  amount: number;
  unitPrice: number;
};

const itemToBlock = ({ name, description, amount, unitPrice }: Item) => ({
  type: "section",
  text: {
    type: "mrkdwn",
    text: `:white_check_mark: *${name}* :page_facing_up: ${description} :package: ${amount} :moneybag: ${unitPrice}`,
  },
});

const createBlocks = (cart: Item[], name: string, email: string) => ({
  text: ":tada: Nieuwe bestelling",
  blocks: [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: ":tada: Nieuwe bestelling",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Naam: *${name}*`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Email: *${email}*`,
      },
    },
    {
      type: "divider",
    },
    {
      type: "header",
      text: {
        type: "plain_text",
        text: ":shopping_trolley: Winkelwagen",
        emoji: true,
      },
    },
    ...cart.map((item) => itemToBlock(item)),
  ],
});

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      order: { cart, name, email, newsletter },
    } = JSON.parse(req.body);

    if (!name?.length) {
      return res.status(400).json({ error: "Please enter a valid name" });
    }

    if (!email?.length) {
      return res
        .status(400)
        .json({ error: "Please enter a valid email address" });
    }

    if (newsletter) {
      subscribeToNewsletter(email).catch(() => {});
    }

    const body = JSON.stringify(createBlocks(cart, name, email), undefined, 2);

    await fetch(url, { method: "POST", body, headers });

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong` });
  }
};

export default checkout;

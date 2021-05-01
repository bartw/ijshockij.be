import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const base64ApiKey = Buffer.from(
  `anystring:${process.env.MAILCHIMP_API_KEY}`
).toString("base64");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${base64ApiKey}`,
};

const url = `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`;

export const subscribeToNewsletter = (email: string) => {
  const body = JSON.stringify({ email_address: email, status: "subscribed" });
  return fetch(url, { method: "POST", body, headers });
};

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = JSON.parse(req.body);

    if (!email?.length) {
      return res
        .status(400)
        .json({ error: "Please enter a valid email address" });
    }

    await subscribeToNewsletter(email);

    return res.status(201).json({ error: null });
  } catch (error) {
    return res
      .status(400)
      .json({ error: `Please enter a valid email address` });
  }
};

export default subscribe;

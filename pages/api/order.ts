import type { NextApiRequest, NextApiResponse } from "next";

const order = async (req: NextApiRequest, res: NextApiResponse) => {
    return res.status(501).json({ error: `Not implemented yet` });
};

export default order;

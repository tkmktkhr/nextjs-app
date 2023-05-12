import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '../../../utils/sample-data';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    console.log(req.body);
    console.log(req.method);

    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data');
    }

    console.log(JSON.stringify(req.body));
    res.status(200).json(sampleUserData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err });
  }
};

export default handler;

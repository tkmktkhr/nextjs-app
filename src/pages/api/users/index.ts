import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '../../../utils/sample-data';
import { logger } from '@/middlewares/logger';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    logger.debug(req.body);
    logger.debug(req.method);

    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data');
    }

    logger.debug(JSON.stringify(req.body));
    res.status(200).json(sampleUserData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err });
  }
};

export default handler;

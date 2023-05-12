import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { GetServerSidePropsContext } from 'next';
import { logger } from '@/middlewares/logger';
// import { APIClient } from '@/infrastructures/api';

const IndexPage = ({ code }: any): React.JSX.Element => {
  logger.debug('DEBUG: Index page rendering....');
  logger.info('INFO: Index page rendering....');
  // logger.debug(code);
  const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL;
  logger.debug(JSON.stringify({ logLevel }));
  logger.debug(undefined);
  logger.info(logger.level);
  logger.debug('------------te');

  return (
    <Layout title="Home">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href={{ pathname: '/about', query: { code } }}>About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<any> => {
  logger.debug(context.query.code);
  // const nodeEnv = process.env.NODE_ENV;
  // const sampleEnv = process.env.SAMPLE_ENV;
  // logger.debug({ sample: sampleEnv });
  // logger.debug({ env: nodeEnv });

  // const api = new APIClient();
  // await api.get('/ping', { test: 'get server side props in index page.' });
  const code = context.query.code ? context.query.code : null;

  return {
    props: { code },
  };
};

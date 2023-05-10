import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { GetServerSidePropsContext } from 'next';
// import { APIClient } from '@/infrastructures/api';

const IndexPage = ({ code }: any): JSX.Element => {
  console.log('Index page rendering....');
  console.log(code);

  return (
    <Layout title="Home">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href={{ pathname: '/about', query: { code } }}>
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<any> => {
  console.log(context.query.code);

  // const api = new APIClient();
  // await api.get('/ping', { test: 'get server side props in index page.' });
  const code = context.query.code ? context.query.code : null;

  return {
    props: { code },
  };
};

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { GetServerSidePropsContext } from 'next';
import { get } from '@/infrastructures/api';

const IndexPage = ({ code }: any): JSX.Element => {
  const c = { code };
  console.log('Indexpage rendering....');
  console.log(c.code);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href={{ pathname: '/about', query: { code: c.code } }}>
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<any> => {
  console.log(context.query);
  console.log(context.query.code);

  const data = await get('/ping', { test: 'test' });
  console.log(data);
  const code = context.query.code ? context.query.code : null;

  return {
    props: { code }, // will be passed to the page component as props
  };
};

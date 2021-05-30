import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { get } from '@/infrastructures/api';
import { GetStaticPropsContext } from 'next';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;

export const getServerSideProps = async (_context: GetStaticPropsContext): Promise<any> => {
  const res = await get('/ping', {});
  console.log(res);

  return {
    props: { res }, // will be passed to the page component as props
  };
};

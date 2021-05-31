import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { get } from '@/infrastructures/api';
import { GetStaticPropsContext } from 'next';

const AboutPage = ({ data }: any): JSX.Element => {
  console.log('rendering...');
  console.log(data);

  return (
    // <>
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          {/* <a>Go home</a> */}
          <a>{data.a}</a>
        </Link>
      </p>
    </Layout>
    // </>
  );
};

export const getServerSideProps = async (_context: GetStaticPropsContext): Promise<any> => {
  const data = await get('/ping', { test: 'test' });
  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
};

export default AboutPage;

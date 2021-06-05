import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { get, post } from '@/infrastructures/api';
import { GetServerSidePropsContext } from 'next';

const AboutPage = ({ data }: any): JSX.Element => {
  console.log('rendering...ABOUT PAGE');
  console.log(data);

  return (
    // <>
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
        <button onClick={getAccessTokenFromApi}>Getting a Redirect_Url for OAuth2.0</button>
        <button onClick={() => getUserInfo(data)}>Getting User Information</button>
      </p>
    </Layout>
    // </>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<any> => {
  const params = { post: '---------------------------------------------------------' };
  const data = await post('/post', params);
  console.log(data);
  console.log('ABOUT PAGE query');
  const code = context.query ?? null;

  return {
    props: { data: code }, // will be passed to the page component as props
  };
};

export default AboutPage;

const getAccessTokenFromApi = async () => {
  const data = await get('/getAuthorizeUrl', { test: 'test' });
  console.log(data);
  location.href = data.url;
  return data;
};

const getUserInfo = async (code: string) => {
  const data = await get('/userInfo', { code });
  console.log('userInfor');
  console.log(data);
};

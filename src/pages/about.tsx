import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { APIClient } from '@/infrastructures/api';
import { GetServerSidePropsContext } from 'next';

const AboutPage = ({ data }: any): JSX.Element => {
  console.log({ data });
  const [familyName, setFamilyName] = useState('familyName');
  const [first_name, setFirstName] = useState('first_name');

  const callSetAccessToken = async () => {
    try {
      const res = await setAccessToken(data.code);
      console.log(res);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const displayName = async () => {
    try {
      const user = await getUserInfo();
      setFamilyName(() => user.familyName);
      setFirstName(() => user.first_name);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
        <br />
        <button onClick={authorizeOAuthGoogle}>1. Authorizing on Google OAuth2.0 </button>
        <br />
        <button onClick={() => callSetAccessToken()}>2. Set Access Token</button>
        <br />
        <button onClick={() => displayName()}>3. Getting User Information</button>
        <br />
        <a>
          Name: {familyName} {first_name}
        </a>
      </p>
    </Layout>
  );
};

export default AboutPage;

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<any> => {
  const params = { getServerSidePropsInAbout: '-------------------------------------' };
  const api = new APIClient();
  await api.post('/post', params);
  // Context has query param when Authorization is completed.
  const code = context.query ?? null;
  return {
    props: { data: code },
  };
};

const authorizeOAuthGoogle = async () => {
  const api = new APIClient();
  const data = await api.get('/getAuthorizeUrl', { test: 'test' }); // no need query params?
  console.log({ data });
  // location.href = data.url;
  return data;
};

const setAccessToken = async (code: string) => {
  const api = new APIClient();
  const data = await api.post('/setAccessToken', { code });
  console.log(data);
  return;
};

type TPersonInfo = {
  familyName: string;
  first_name: string;
};

const getUserInfo = async (): Promise<TPersonInfo> => {
  console.log('getUserInfo Function');
  const api = new APIClient();
  const data = await api.get('/users'); // /users/:id
  console.log('userInfo FROM API');
  console.log(data.data);
  console.log(data.data.names);
  return {
    familyName: data.data.names[0].familyName,
    first_name: data.data.names[0].first_name,
  };
};

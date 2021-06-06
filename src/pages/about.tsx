import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { get, post } from '@/infrastructures/api';
import { GetServerSidePropsContext } from 'next';

const AboutPage = ({ data }: any): JSX.Element => {
  console.log('rendering...ABOUT PAGE');
  console.log(data);
  const [familyName, setFamilyName] = useState('Init');
  const [givenName, setGivenName] = useState('Init');
  // const [familyName, setFamilyName] = useState(null);

  const f = async () => {
    try {
      const a = await getUserInfo(data.code);
      setFamilyName(() => a.familyName);
      setGivenName(() => a.givenName);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   const f = async () => {
  //       const a = await getUserInfo(data.code);
  //       setFamilyName(() => a.familyName);
  //       setGivenName(() => a.givenName);
  //     },
  //     [boolean];
  // });

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
        <button onClick={authorizeOAuthGoogle}>Authorizing on Google OAuth2.0 </button>
        <button onClick={() => f()}>Getting User Information</button>
        <a>
          {familyName} {givenName}
        </a>
      </p>
    </Layout>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<any> => {
  const params = { getServerSidePropsInAbout: '-------------------------------------' };
  await post('/post', params);
  // Context has query param when Authorization is completed.
  const code = context.query ?? null;
  return {
    props: { data: code },
  };
};

export default AboutPage;

const authorizeOAuthGoogle = async () => {
  const data = await get('/getAuthorizeUrl', { test: 'test' });
  console.log(data);
  location.href = data.url;
  return data;
};

type TPeopleInfo = {
  familyName: string;
  givenName: string;
};

const getUserInfo = async (code: string): Promise<TPeopleInfo> => {
  console.log('getUserUnfo Function');
  const data = await get('/userInfo', { code });
  console.log('userInfor FROM API');
  console.log(data.data);
  console.log(data.data.names);
  console.log(data.data.names[0]);
  return {
    familyName: data.data.names[0].familyName,
    givenName: data.data.names[0].givenName,
  };
};

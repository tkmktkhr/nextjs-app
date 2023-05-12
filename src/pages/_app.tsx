import React from 'react';
import { AppProps /*, AppContext */ } from 'next/app';
import Router from 'next/router';
import { UnauthorizedError } from '@/middlewares/error';
import { TErrorResponse } from '@/infrastructures/api';
import { logger } from '@/middlewares/logger';

const App = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  return (
    <>
      {' '}
      <Component {...pageProps} />{' '}
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
// return { ...appProps }
// }

// Error Handing
export const goToErrorPage = (e: TErrorResponse | Error | UnauthorizedError): void => {
  logger.debug(e);
  if (e instanceof UnauthorizedError) {
    Router.push('401');
  } else if (e instanceof Error) {
    Router.push('500');
  } else {
    Router.push(`${e.status}`);
    // e's type Should be TErrorResponse.
  }
};

export default App;

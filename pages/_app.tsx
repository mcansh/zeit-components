import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from '~/components/style/global-style';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <>
          <GlobalStyle />
          <Head>
            <title>ZEIT Components</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width, viewport-fit=cover"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </Container>
    );
  }
}

export default MyApp;

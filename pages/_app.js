import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, injectGlobal } from 'styled-components';
import style from '../style';

injectGlobal`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: inherit;
  }

  body {
    background: #F2F2F2;
    position: relative;
    min-height: 100%;
    margin: 0;
    padding-bottom: 6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={style}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;

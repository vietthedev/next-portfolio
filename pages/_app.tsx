import { NextContext, NextStatelessComponent } from "next";
import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";

import { SITE_TITLE } from "../common/constants";
import Layout from "../components/Layout";

export default class CustomApp extends App {
  public static async getInitialProps({
    Component,
    ctx
  }: {
    Component: React.ComponentType<any> & NextStatelessComponent;
    ctx: NextContext;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

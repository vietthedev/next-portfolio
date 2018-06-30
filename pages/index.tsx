import { NextContext } from "next";
import Head from "next/head";
import { Component } from "react";

import { getCanonicalUrl } from "../common/helpers";
import Layout from "../components/Layout";

interface IIndexProps {
  theme: string;
  canonicalUrl: string;
}

export default class Index extends Component {
  public static async getInitialProps(ctx: NextContext) {
    return { canonicalUrl: getCanonicalUrl(ctx.pathname) };
  }

  public props: IIndexProps;

  constructor(props: IIndexProps) {
    super(props);
  }

  public render() {
    return (
      <Layout theme={this.props.theme}>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <p>About</p>
      </Layout>
    );
  }
}

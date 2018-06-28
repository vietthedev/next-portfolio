import { NextContext } from "next";
import Head from "next/head";
import { PureComponent } from "react";

import { getHost } from "../common/utility";
import Layout from "../components/Layout";

interface IIndexProps {
  canonicalUrl: string;
}

export default class Index extends PureComponent {
  public static async getInitialProps(ctx: NextContext) {
    return { canonicalUrl: getHost(ctx) };
  }

  public props: IIndexProps;

  constructor(props: IIndexProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <Layout>About</Layout>
      </>
    );
  }
}

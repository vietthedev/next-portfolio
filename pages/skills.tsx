import { NextContext } from "next";
import Head from "next/head";
import { Component } from "react";

import { getCanonicalUrl } from "../common/helpers";
import Layout from "../components/Layout";

interface ISkillsProps {
  theme: string;
  canonicalUrl: string;
}

export default class Skills extends Component {
  public static async getInitialProps(ctx: NextContext) {
    return { canonicalUrl: getCanonicalUrl(ctx.pathname) };
  }

  public props: ISkillsProps;

  constructor(props: ISkillsProps) {
    super(props);
  }

  public render() {
    return (
      <Layout theme={this.props.theme}>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <p>Skills</p>
      </Layout>
    );
  }
}

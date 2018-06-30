import { NextContext } from "next";
import Head from "next/head";
import { Component } from "react";

import { getCanonicalUrl } from "../common/helpers";
import Layout from "../components/Layout";

interface IProjectsProps {
  theme: string;
  canonicalUrl: string;
}

export default class Projects extends Component {
  public static async getInitialProps(ctx: NextContext) {
    return { canonicalUrl: getCanonicalUrl(ctx.pathname) };
  }

  public props: IProjectsProps;

  constructor(props: IProjectsProps) {
    super(props);
  }

  public render() {
    return (
      <Layout theme={this.props.theme}>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <p>Projects</p>
      </Layout>
    );
  }
}

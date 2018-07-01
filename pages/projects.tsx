import "isomorphic-unfetch";
import { NextContext } from "next";
import Head from "next/head";
import { PureComponent } from "react";

import { getCanonicalUrl } from "../common/helpers";
import Layout from "../components/Layout";

import { apiPath } from "../common/constants";

interface IProjectsProps {
  theme: string;
  canonicalUrl: string;
  projects: Array<{
    imagePath: string;
    name: string;
    repository: string;
    skills: string[];
    website: string;
  }>;
}

export default class Projects extends PureComponent {
  public static async getInitialProps(ctx: NextContext) {
    const apiUrl =
      typeof window === "undefined"
        ? process.env.HOST + process.env.API_PATH + ctx.pathname
        : apiPath + ctx.pathname;
    let projects = {};

    try {
      const res = await fetch(apiUrl);
      projects = await res.json();
    } catch (err) {
      console.error(err);
    }

    return { canonicalUrl: getCanonicalUrl(ctx.pathname), projects };
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

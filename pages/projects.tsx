import "isomorphic-unfetch";
import { NextContext } from "next";
import Head from "next/head";
import { PureComponent } from "react";

import Layout from "../components/Layout";
import ProjectSection from "../components/ProjectSection";

import { apiPath } from "../common/constants";
import { getCanonicalUrl } from "../common/helpers";
import ProjectViewModel from "../models/ProjectViewModel";

interface IProjectsProps {
  theme: string;
  canonicalUrl: string;
  projects: ProjectViewModel[];
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
        <ProjectSection
          theme={this.props.theme}
          projects={this.props.projects}
        />
      </Layout>
    );
  }
}

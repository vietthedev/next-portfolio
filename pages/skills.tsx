import "isomorphic-unfetch";
import { NextContext } from "next";
import Head from "next/head";
import { PureComponent } from "react";

import Layout from "../components/Layout";
import SkillSection from "../components/SkillSection";

import { getCanonicalUrl } from "../common/helpers";
import SkillViewModel from "../models/SkillViewModel";

import { apiPath } from "../common/constants";

interface ISkillsProps {
  theme: string;
  canonicalUrl: string;
  skills: SkillViewModel[];
}

export default class Skills extends PureComponent {
  public static async getInitialProps(ctx: NextContext) {
    const apiUrl =
      typeof window === "undefined"
        ? process.env.HOST + process.env.API_PATH + ctx.pathname
        : apiPath + ctx.pathname;
    let skills = {};

    try {
      const res = await fetch(apiUrl);
      skills = await res.json();
    } catch (err) {
      console.error(err);
    }

    return { canonicalUrl: getCanonicalUrl(ctx.pathname), skills };
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
        <SkillSection skills={this.props.skills} />
      </Layout>
    );
  }
}

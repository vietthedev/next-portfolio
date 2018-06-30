import "isomorphic-unfetch";
import { NextContext } from "next";
import Head from "next/head";
import { PureComponent } from "react";

import { getCanonicalUrl } from "../common/helpers";
import Layout from "../components/Layout";

import { apiPath } from "../common/constants";

interface IIndexProps {
  theme: string;
  canonicalUrl: string;
  aboutEntries: Array<{
    _id: string;
    content: string;
  }>;
}

export default class Index extends PureComponent {
  public static async getInitialProps(ctx: NextContext) {
    const fullApiPath =
      typeof window === "undefined"
        ? `${process.env.HOST}${process.env.API_PATH}/about`
        : `${apiPath}/about`;
    let aboutEntries = {};

    try {
      const res = await fetch(fullApiPath);

      aboutEntries = await res.json();
    } catch (err) {
      console.error(err);
    }

    return { canonicalUrl: getCanonicalUrl(ctx.pathname), aboutEntries };
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
        {Object.keys(this.props.aboutEntries).length ? (
          this.props.aboutEntries.map(aboutEntry => (
            <p key={aboutEntry._id}>{aboutEntry.content}</p>
          ))
        ) : (
          <p>Sorry. Nothing to show.</p>
        )}
      </Layout>
    );
  }
}

import { NextContext } from "next";
import Head from "next/head";
import { Component } from "react";

import { getCanonicalUrl } from "../common/helpers";

interface IContactProps {
  canonicalUrl: string;
}

export default class Contact extends Component {
  public static async getInitialProps(ctx: NextContext) {
    return { canonicalUrl: getCanonicalUrl(ctx.pathname) };
  }

  public props: IContactProps;

  constructor(props: IContactProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <p>Contact</p>
      </>
    );
  }
}

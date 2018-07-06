import Head from "next/head";
import { PureComponent } from "react";

import Layout from "../components/Layout";

import { getCanonicalUrl, getDataFromApi } from "../common/helpers";
import AboutViewModel from "../models/AboutViewModel";

interface IIndexProps {
  theme: string;
  canonicalUrl: string;
  aboutEntries: AboutViewModel[];
}

export default class Index extends PureComponent {
  public static async getInitialProps({ pathname }: { pathname: string }) {
    return {
      aboutEntries: await getDataFromApi<AboutViewModel>("/about"),
      canonicalUrl: getCanonicalUrl(pathname)
    };
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
        {this.renderAbout()}
      </Layout>
    );
  }

  private renderAbout() {
    if (!Object.keys(this.props.aboutEntries).length) {
      return <p>Sorry. Nothing to show.</p>;
    }

    return this.props.aboutEntries.map(aboutEntry => (
      <p key={aboutEntry._id}>{aboutEntry.content}</p>
    ));
  }
}

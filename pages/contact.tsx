import Head from "next/head";
import { PureComponent } from "react";

import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";

import { getCanonicalUrl } from "../common/helpers";

interface IContactProps {
  canonicalUrl: string;
}

export default class Contact extends PureComponent {
  public static async getInitialProps({ pathname }: { pathname: string }) {
    return { canonicalUrl: getCanonicalUrl(pathname) };
  }

  public props: IContactProps;

  constructor(props: IContactProps) {
    super(props);
  }

  public render() {
    return (
      <Layout>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <ContactSection />
      </Layout>
    );
  }
}

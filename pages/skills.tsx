import Head from "next/head";
import { PureComponent } from "react";

import Layout from "../components/Layout";
import SkillSection from "../components/SkillSection";

import { getCanonicalUrl, getDataFromApi } from "../common/helpers";
import SkillViewModel from "../models/SkillViewModel";

interface ISkillsProps {
  canonicalUrl: string;
  skills: SkillViewModel[];
}

export default class Skills extends PureComponent {
  public static async getInitialProps({ pathname }: { pathname: string }) {
    return {
      canonicalUrl: getCanonicalUrl(pathname),
      skills: await getDataFromApi(pathname)
    };
  }

  public props: ISkillsProps;

  constructor(props: ISkillsProps) {
    super(props);
  }

  public render() {
    return (
      <Layout>
        <Head>
          <link rel="canonical" href={this.props.canonicalUrl} />
          <meta property="og:url" content={this.props.canonicalUrl} />
        </Head>
        <SkillSection skills={this.props.skills} />
      </Layout>
    );
  }
}

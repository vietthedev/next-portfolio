import Head from "next/head";
import { PureComponent } from "react";

import Layout from "../components/Layout";
import ProjectSection from "../components/ProjectSection";

import { getCanonicalUrl, getDataFromApi } from "../common/helpers";
import ProjectViewModel from "../models/ProjectViewModel";

interface IProjectsProps {
  theme: string;
  canonicalUrl: string;
  projects: ProjectViewModel[];
}

export default class Projects extends PureComponent {
  public static async getInitialProps({ pathname }: { pathname: string }) {
    return {
      canonicalUrl: getCanonicalUrl(pathname),
      projects: await getDataFromApi<ProjectViewModel>(pathname)
    };
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
        <ProjectSection projects={this.props.projects} />
      </Layout>
    );
  }
}

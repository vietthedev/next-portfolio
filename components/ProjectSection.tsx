import { PureComponent, ReactNode } from "react";

import Project from "./Project";

import ProjectViewModel from "../models/ProjectViewModel";

interface IProjectSectionProps {
  theme: string;
  projects: ProjectViewModel[];
}

export default class ProjectSection extends PureComponent {
  public props: IProjectSectionProps;

  constructor(props: IProjectSectionProps) {
    super(props);
  }

  public render() {
    return this.renderProjects(this.props.projects);
  }

  private renderProjects(projects: ProjectViewModel[]) {
    if (!projects.length) {
      return <p>Sorry. Nothing to show.</p>;
    }

    return projects.map(project => (
      <Project key={project._id} theme={this.props.theme} project={project} />
    ));
  }
}

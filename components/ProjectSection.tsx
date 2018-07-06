import { PureComponent } from "react";

import Context from "../common/context";
import Project from "./Project";

import ProjectViewModel from "../models/ProjectViewModel";

interface IProjectSectionProps {
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

    return (
      <Context.Consumer>
        {theme =>
          projects.map(project => (
            <Project key={project._id} theme={theme} project={project} />
          ))
        }
      </Context.Consumer>
    );
  }
}

import { PureComponent } from "react";

import { resolveScopedStyles } from "../common/helpers";
import ProjectViewModel from "../models/ProjectViewModel";

interface IProjectProps {
  theme: string;
  project: ProjectViewModel;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      h2 {
        text-align: center;
      }

      img {
        width: 100%;
      }

      a {
        color: #40ccff;
        text-decoration: none;

        word-break: break-all;
      }

      a:hover {
        text-decoration: underline;
      }

      .project {
        margin: 2rem;
        padding: 1rem;
      }

      .project.light {
        border-top: 1px solid #474747;
        border-bottom: 1px solid #474747;
      }

      .project.dark {
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
      }

      .subtitle {
        font-weight: bold;
      }

      .skill-wrapper {
        text-align: center;
        padding: 0 25%;
      }

      .skill {
        display: inline-block;

        margin: 0.2rem;
        padding: 0.2rem;

        border-color: transparent;
        border-radius: 0.4rem;
      }

      .skill.light {
        background-color: #474747;
        color: #dfdfdf;
      }

      .skill.dark {
        background-color: #eeeeee;
        color: #474747;
      }
    `}</style>
  </div>
);

export default class Project extends PureComponent {
  public props: IProjectProps;

  constructor(props: IProjectProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <div className={`project ${scoped.className} ${this.props.theme}`}>
          <h2 className={scoped.className}>{this.props.project.name}</h2>
          <img
            className={scoped.className}
            src={`/img/projects/${this.props.project.imageName}`}
            alt={this.props.project.name}
          />
          <div className={`skill-wrapper ${scoped.className}`}>
            {this.renderProjectSkills()}
          </div>
          {this.renderProjectUrl(this.props.project.repository, "Repository:")}
          {this.renderProjectUrl(this.props.project.website, "Website:")}
        </div>
        {scoped.styles}
      </>
    );
  }

  private renderProjectSkills() {
    return this.props.project.skills.map(skill => (
      <span
        key={skill}
        className={`skill ${scoped.className} ${this.props.theme}`}
      >
        {skill}
      </span>
    ));
  }

  private renderProjectUrl(info: string, subtitle: string) {
    return info ? (
      <div>
        <span className={`subtitle ${scoped.className}`}>{subtitle}</span>{" "}
        <a className={scoped.className} target="_blank" href={info}>
          {info}
        </a>
      </div>
    ) : (
      ""
    );
  }
}

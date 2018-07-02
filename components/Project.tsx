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
            src={`/static/img/projects/${this.props.project.imageName}`}
            alt={this.props.project.name}
          />
          <div className={`skill-wrapper ${scoped.className}`}>
            {this.props.project.skills.map(skill => (
              <span
                key={skill}
                className={`skill ${scoped.className} ${this.props.theme}`}
              >
                {skill}
              </span>
            ))}
          </div>
          {this.props.project.repository ? (
            <div>
              <span className={`subtitle ${scoped.className}`}>
                Repository:
              </span>{" "}
              <a
                className={scoped.className}
                target="_blank"
                title={this.props.project.name}
                href={this.props.project.repository}
              >
                {this.props.project.repository}
              </a>
            </div>
          ) : (
            ""
          )}
          {this.props.project.website ? (
            <div>
              <span className={`subtitle ${scoped.className}`}>Website:</span>{" "}
              <a
                className={scoped.className}
                target="_blank"
                title={this.props.project.name}
                href={this.props.project.website}
              >
                {this.props.project.website}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        {scoped.styles}
      </>
    );
  }
}

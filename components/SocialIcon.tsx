import { PureComponent, ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";

interface ISocialIconProps {
  theme: string;
  link: string;
  title: string;
  children: ReactNode;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      svg {
        cursor: pointer;
        height: auto;
        transition: fill 0.25s ease-in-out;
        width: 2.5rem;
      }

      svg:hover {
        fill: #2aa4cf;
      }

      li {
        display: inline;
        padding-right: 0.5rem;
      }

      .light {
        fill: #1d2129;
      }

      .dark {
        fill: #dfdfdf;
      }
    `}</style>
  </div>
);

export default class SocialIcon extends PureComponent {
  public props: ISocialIconProps;

  constructor(props: ISocialIconProps) {
    super(props);
  }

  public render() {
    return (
      <li className={scoped.className}>
        <a title={this.props.title} target="_blank" href={this.props.link}>
          <svg
            className={`${scoped.className} ${this.props.theme}`}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{this.props.title}</title>
            {this.props.children}
          </svg>
        </a>
        {scoped.styles}
      </li>
    );
  }
}

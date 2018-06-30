import ReactSVG from "react-svg";

import { Component } from "react";
import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";

interface ISocialIconProps {
  link: string;
  icon: string;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      div {
        display: inline-block;
      }

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

export default class SocialIcon extends Component {
  public props: ISocialIconProps;

  constructor(props: ISocialIconProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <ThemedComponent>
        {themeName => (
          <li className={scoped.className}>
            <ReactSVG
              className={scoped.className}
              svgClassName={`${scoped.className} ${themeName}`}
              path={this.props.icon}
              onClick={this.handleClick}
            />
            {scoped.styles}
          </li>
        )}
      </ThemedComponent>
    );
  }

  private handleClick() {
    window.open(this.props.link, "_blank");
  }
}

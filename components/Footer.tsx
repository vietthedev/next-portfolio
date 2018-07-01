import { PureComponent } from "react";

import { resolveScopedStyles } from "../common/helpers";

import SocialSection from "./SocialSection";

interface IFooterProps {
  theme: string;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      footer {
        flex-shrink: 0;

        bottom: 0;
        left: 0;
        padding: 1.5rem 0;
        right: 0;
        text-align: center;

        transition: all 0.2s ease-in-out;
      }

      .light {
        background-color: #cfcfcf;
        color: #1d2129;
      }

      .dark {
        background-color: #2a2a2a;
        color: #dfdfdf;
      }
    `}</style>
  </div>
);

export default class Footer extends PureComponent {
  public props: IFooterProps;

  public render() {
    return (
      <>
        <footer className={`${scoped.className} ${this.props.theme}`}>
          <SocialSection theme={this.props.theme} />
          Created by the person you see in the picture (&#x30FB;&#x3C9;&#x30FB;)
        </footer>
        {scoped.styles}
      </>
    );
  }
}

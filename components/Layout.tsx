import Router from "next/router";
import { PureComponent, ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

import * as gtag from "../common/gtag";

interface ILayoutProps {
  theme: string;
  children: ReactNode;
}

Router.onRouteChangeComplete = url => {
  gtag.pageview(url);
};

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        flex: 1;

        min-height: 100%;

        transition: all 0.2s ease-in-out;
      }

      .light {
        background-color: #ffffff;
        color: #1d2129;
      }

      .dark {
        background-color: #373737;
        color: #dfdfdf;
      }
    `}</style>
  </div>
);

export default class Layout extends PureComponent {
  public props: ILayoutProps;

  constructor(props: ILayoutProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <div className={`${scoped.className} ${this.props.theme}`}>
          <Header theme={this.props.theme} />
          <NavBar theme={this.props.theme} />
          <Content theme={this.props.theme}>{this.props.children}</Content>
          <Footer theme={this.props.theme} />
        </div>
        {scoped.styles}
      </>
    );
  }
}

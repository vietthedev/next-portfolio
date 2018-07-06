import Router from "next/router";
import NProgress from "nprogress";
import { PureComponent, ReactNode } from "react";

import Context from "../common/context";
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

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => NProgress.start();

Router.onRouteChangeComplete = url => {
  gtag.pageview(url);
  NProgress.done();
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
      <Context.Provider value={this.props.theme}>
        <>
          <div className={`${scoped.className} ${this.props.theme}`}>
            <Header />
            <NavBar />
            <Content>{this.props.children}</Content>
            <Footer />
          </div>
          {scoped.styles}
        </>
      </Context.Provider>
    );
  }
}

import { Component, ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

interface ILayoutProps {
  children: ReactNode;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;

        height: 100%;

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

export default class Layout extends Component {
  public props: ILayoutProps;

  constructor(props: ILayoutProps) {
    super(props);

    this.renderLayout = this.renderLayout.bind(this);
  }

  public render() {
    return <ThemedComponent>{this.renderLayout}</ThemedComponent>;
  }

  private renderLayout(themeName: string) {
    return (
      <>
        <div className={`${scoped.className} ${themeName}`}>
          <Header />
          <NavBar />
          <Content>{this.props.children}</Content>
          <Footer />
        </div>
        {scoped.styles}
      </>
    );
  }
}

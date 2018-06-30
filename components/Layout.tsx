import { ReactNode } from "react";

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

export default (props: ILayoutProps) => (
  <ThemedComponent>
    {themeName => (
      <>
        <div className={`${scoped.className} ${themeName}`}>
          <Header />
          <NavBar />
          <Content>{props.children}</Content>
          <Footer />
        </div>
        {scoped.styles}
      </>
    )}
  </ThemedComponent>
);

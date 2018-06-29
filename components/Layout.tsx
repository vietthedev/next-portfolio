import { PureComponent, ReactNode } from "react";

import Context, { theme } from "../common/context";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import ThemeTogglerButton from "./ThemeTogglerButton";

import { THEMES } from "../common/constants";

interface ILayoutProps {
  children: ReactNode;
}

interface ILayoutState {
  theme: string;
  toggleTheme: () => void;
}

export default class Layout extends PureComponent {
  public props: ILayoutProps;
  public state: ILayoutState;

  constructor(props: ILayoutProps) {
    super(props);

    this.state = { theme, toggleTheme: this.toggleTheme.bind(this) };
  }

  public render() {
    return (
      <Context.Provider value={this.state}>
        <div className={this.state.theme}>
          <Header />
          <NavBar />
          <Content>{this.props.children}</Content>
          <Footer />
          <ThemeTogglerButton />
        </div>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;

            height: 100%;
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
      </Context.Provider>
    );
  }

  private toggleTheme() {
    this.setState((state: ILayoutState) => ({
      theme: state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    }));
  }
}

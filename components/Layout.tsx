import { PureComponent, ReactNode } from "react";

import Context, { theme } from "../common/context";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

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
        </div>
        <style jsx>{`
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
      theme: state.theme === "light" ? "dark" : "light"
    }));
  }
}

import { PureComponent, ReactNode } from "react";
import { resolveScopedStyles } from "../common/utility";

import { theme, ThemeContext } from "../common/theme-context";
import Footer from "./Footer";
import Header from "./Header";

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
      <ThemeContext.Provider value={this.state}>
        <div className={this.state.theme}>
          <Header />
          {this.props.children}
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
      </ThemeContext.Provider>
    );
  }

  private toggleTheme() {
    this.setState((state: ILayoutState) => ({
      theme: state.theme === "light" ? "dark" : "light"
    }));
  }
}

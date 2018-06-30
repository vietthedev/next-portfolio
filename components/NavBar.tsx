import { PureComponent } from "react";

import { resolveScopedStyles } from "../common/helpers";
import NavBarItem from "./NavBarItem";

interface INavBarProps {
  theme: string;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      nav {
        padding: 0.25rem 0.25rem 0 0.25rem;

        text-align: center;
        text-transform: capitalize;
      }
    `}</style>
  </div>
);

export default class NavBar extends PureComponent {
  public props: INavBarProps;

  public render() {
    return (
      <>
        <nav className={`${scoped.className} ${this.props.theme}`}>
          <ul>
            <NavBarItem theme={this.props.theme} href="/">
              About
            </NavBarItem>
            <NavBarItem theme={this.props.theme} href="/skills">
              Skills
            </NavBarItem>
            <NavBarItem theme={this.props.theme} href="/projects">
              Projects
            </NavBarItem>
            <NavBarItem theme={this.props.theme} href="/contact">
              Contact
            </NavBarItem>
          </ul>
        </nav>
        {scoped.styles}
      </>
    );
  }
}

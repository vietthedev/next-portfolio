import { Component } from "react";

import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";
import NavBarItem from "./NavBarItem";

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

export default class NavBar extends Component {
  public render() {
    return <ThemedComponent>{this.renderNavBar}</ThemedComponent>;
  }

  private renderNavBar(themeName: string) {
    return (
      <>
        <nav className={`${scoped.className} ${themeName}`}>
          <ul>
            <NavBarItem href="/">About</NavBarItem>
            <NavBarItem href="/skills">Skills</NavBarItem>
            <NavBarItem href="/projects">Projects</NavBarItem>
            <NavBarItem href="/contact">Contact</NavBarItem>
          </ul>
        </nav>
        {scoped.styles}
      </>
    );
  }
}

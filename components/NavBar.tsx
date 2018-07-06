import Context from "../common/context";
import { resolveScopedStyles } from "../common/helpers";
import NavBarItem from "./NavBarItem";

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      nav {
        margin-top: 0.5rem;
        padding: 0.25rem 0.25rem 0 0.25rem;

        text-align: center;
      }

      ul {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default () => (
  <Context.Consumer>
    {theme => (
      <>
        <nav className={`${scoped.className} ${theme}`}>
          <ul className={scoped.className}>
            <NavBarItem href="/">About</NavBarItem>
            <NavBarItem href="/skills">Skills</NavBarItem>
            <NavBarItem href="/projects">Projects</NavBarItem>
            <NavBarItem href="/contact">Contact</NavBarItem>
          </ul>
        </nav>
        {scoped.styles}
      </>
    )}
  </Context.Consumer>
);

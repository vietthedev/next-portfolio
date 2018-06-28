import Context from "../common/context";

import { THEMES } from "../common/constants";
import { resolveScopedStyles } from "../common/utility";

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      button {
        cursor: pointer;

        position: absolute;
        right: 0.25rem;
        bottom: 0.25rem;
      }
    `}</style>
  </div>
);

export default () => (
  <Context.Consumer>
    {({ theme, toggleTheme }) => (
      <>
        <button
          className={`${scoped.className} ${theme}`}
          onClick={toggleTheme}
        >
          {theme === THEMES.LIGHT ? "Dark Mode" : "Light Mode"}
        </button>
        {scoped.styles}
      </>
    )}
  </Context.Consumer>
);

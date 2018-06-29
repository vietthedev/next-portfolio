import Context from "../common/context";

import { THEMES } from "../common/constants";
import { resolveScopedStyles } from "../common/helpers";

interface IThemeTogglerButtonProps {
  toggleTheme: () => void;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      button {
        cursor: pointer;

        position: fixed;
        right: 0.25rem;
        bottom: 0.25rem;
      }
    `}</style>
  </div>
);

export default (props: IThemeTogglerButtonProps) => (
  <Context.Consumer>
    {({ theme }) => (
      <>
        <button
          className={`${scoped.className} ${theme}`}
          onClick={props.toggleTheme}
        >
          {theme === THEMES.LIGHT ? "Dark Mode" : "Light Mode"}
        </button>
        {scoped.styles}
      </>
    )}
  </Context.Consumer>
);

import { Component } from "react";

import { THEMES } from "../common/constants";
import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";

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

        border-color: transparent;
        border-radius: 5rem;

        font-size: 1.25rem;

        transition: background-color 0.2s ease-in-out;
      }

      .light {
        background-color: #1d2129;
        color: #dfdfdf;
      }

      .light:active {
        background-color: #475063;

        right: 0.1rem;
        bottom: 0.1rem;
      }

      .dark {
        background-color: #dfdfdf;
        color: #373737;
      }

      .dark:active {
        background-color: #8d8d8d;

        right: 0.1rem;
        bottom: 0.1rem;
      }
    `}</style>
  </div>
);

export default class ThemeTogglerButton extends Component {
  public props: IThemeTogglerButtonProps;

  constructor(props: IThemeTogglerButtonProps) {
    super(props);

    this.renderThemeTogglerButton = this.renderThemeTogglerButton.bind(this);
  }

  public render() {
    return <ThemedComponent>{this.renderThemeTogglerButton}</ThemedComponent>;
  }

  private renderThemeTogglerButton(themeName: string) {
    return (
      <>
        <button
          className={`${scoped.className} ${themeName}`}
          onClick={this.props.toggleTheme}
        >
          {themeName === THEMES.LIGHT ? "Dark Mode" : "Light Mode"}
        </button>
        {scoped.styles}
      </>
    );
  }
}

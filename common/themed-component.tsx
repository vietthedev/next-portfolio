import { ReactNode } from "react";

import { ThemeContext } from "./theme-context";

interface IThemeProps {
  render: (themeName: string) => ReactNode;
}

export default (props: IThemeProps) => (
  <ThemeContext.Consumer>
    {({ theme }) => props.render(theme)}
  </ThemeContext.Consumer>
);

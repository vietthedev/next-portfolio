import { ReactNode } from "react";

import { ThemeContext } from "./theme-context";

interface IThemedComponentProps {
  render: (themeName: string) => ReactNode;
}

export default (props: IThemedComponentProps) => (
  <ThemeContext.Consumer>
    {({ theme }) => props.render(theme)}
  </ThemeContext.Consumer>
);

import { ReactNode } from "react";

import Context from "./context";

interface IThemedComponentProps {
  render: (themeName: string) => ReactNode;
}

export default (props: IThemedComponentProps) => (
  <Context.Consumer>{({ theme }) => props.render(theme)}</Context.Consumer>
);

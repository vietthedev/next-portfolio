import { PureComponent, ReactNode } from "react";

import Context from "./context";

interface IThemedComponentProps {
  children: (themeName: string) => ReactNode;
}

export default class ThemedComponent extends PureComponent {
  public props: IThemedComponentProps;

  constructor(props: IThemedComponentProps) {
    super(props);
  }

  public render() {
    return (
      <Context.Consumer>
        {({ theme }) => this.props.children(theme)}
      </Context.Consumer>
    );
  }
}

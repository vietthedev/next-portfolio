import { PureComponent } from "react";
import { theme } from "../common/theme-context";

import ThemedComponent from "../common/themed-component";
import Layout from "../components/Layout";

interface IAboutState {
  theme: string;
}

export default class Index extends PureComponent {
  public state: IAboutState;

  constructor(props: any) {
    super(props);

    this.state = { theme };
  }

  public render() {
    return <Layout>About</Layout>;
  }
}

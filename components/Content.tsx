import { PureComponent, ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";

interface IContentProps {
  theme: string;
  children: ReactNode;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      main {
        flex: 1 0 auto;

        padding: 0.25rem 0.25rem 0 0.25rem;

        transition: all 0.2s ease-in-out;
      }

      .light {
        background-color: #ffffff;
      }

      .dark {
        background-color: #373737;
      }
    `}</style>
  </div>
);

export default class Content extends PureComponent {
  public props: IContentProps;

  constructor(props: IContentProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <main className={`${scoped.className} ${this.props.theme}`}>
          {this.props.children}
        </main>
        {scoped.styles}
      </>
    );
  }
}

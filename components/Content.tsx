import { PureComponent, ReactNode } from "react";

import Context from "../common/context";
import { resolveScopedStyles } from "../common/helpers";

interface IContentProps {
  children: ReactNode;
}

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      main {
        flex: 1 0 auto;

        margin: 0.25rem 10% 0 10%;
        padding: 1rem;

        border-radius: 1rem 1rem 0 0;

        transition: all 0.2s ease-in-out;
      }

      .light {
        background-color: #eeeeee;
        color: #474747;
      }

      .dark {
        background-color: #474747;
        color: #dfdfdf;
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
      <Context.Consumer>
        {({ theme }) => (
          <>
            <main className={`${scoped.className} ${theme}`} role="main">
              {this.props.children}
            </main>
            {scoped.styles}
          </>
        )}
      </Context.Consumer>
    );
  }
}

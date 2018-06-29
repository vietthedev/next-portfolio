import { ReactNode } from "react";

import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";

interface IContentProps {
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

export default (props: IContentProps) => (
  <ThemedComponent
    render={themeName => (
      <>
        <main className={`${scoped.className} ${themeName}`}>
          {props.children}
        </main>
        {scoped.styles}
      </>
    )}
  />
);

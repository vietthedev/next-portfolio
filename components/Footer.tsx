import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";

import Social from "./Social";

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      footer {
        flex-shrink: 0;

        bottom: 0;
        left: 0;
        padding: 1.5rem 0;
        right: 0;
        text-align: center;
      }

      .light {
        background-color: #efefef;
        color: #1d2129;
      }

      .dark {
        background-color: #2a2a2a;
        color: #dfdfdf;
      }
    `}</style>
  </div>
);

export default () => (
  <ThemedComponent
    render={themeName => (
      <>
        <footer className={`${scoped.className} ${themeName}`}>
          <Social />
          Created by the person you see in the picture (&#x30FB;&#x3C9;&#x30FB;)
        </footer>
        {scoped.styles}
      </>
    )}
  />
);

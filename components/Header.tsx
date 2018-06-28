import ThemedComponent from "../common/themed-component";
import { resolveScopedStyles } from "../common/utility";

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      header {
        display: flex;
        align-items: center;
        justify-content: center;

        padding-top: 0.25rem;
      }

      img {
        width: 12rem;

        border: 6px double #666666;
        border-radius: 50%;
        background-clip: padding-box;
      }

      .light {
        color: #1d2129;
      }

      .dark {
        color: #dfdfdf;
      }
    `}</style>
  </div>
);

export default () => (
  <ThemedComponent
    render={themeName => (
      <>
        <header className={`${scoped.className} ${themeName}`}>
          <img
            className={scoped.className}
            src="/static/img/avatar.png"
            alt="Việt Huỳnh"
          />
        </header>
        {scoped.styles}
      </>
    )}
  />
);

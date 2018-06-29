import { resolveScopedStyles } from "../common/helpers";
import ThemedComponent from "../common/themed-component";

const scoped = resolveScopedStyles(
  <div>
    <style jsx>{`
      nav {
        padding: 0.25rem 0.25rem 0 0.25rem;
      }
    `}</style>
  </div>
);

export default () => (
  <ThemedComponent
    render={themeName => (
      <>
        <nav className={`${scoped.className} ${themeName}`}>Navigation bar</nav>
        {scoped.styles}
      </>
    )}
  />
);

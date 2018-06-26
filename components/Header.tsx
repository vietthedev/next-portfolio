import ThemedComponent from "../common/themed-component";

export default () => (
  <ThemedComponent
    render={themeName => (
      <>
        <header className={themeName}>
          (&#x261E;&#xFF9F;&#x30EE;&#xFF9F;)&#x261E; Header
          &#x261C;(&#xFF9F;&#x30EE;&#xFF9F;&#x261C;)
        </header>
        <style jsx>{`
          header {
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
      </>
    )}
  />
);

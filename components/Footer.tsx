import ThemedComponent from "../common/themed-component";

export default () => (
  <ThemedComponent
    render={themeName => (
      <>
        <footer className={themeName}>
          Created by the person you see in the picture (&#x30FB;&#x3C9;&#x30FB;)
        </footer>
        <style jsx>{`
          footer {
            bottom: 0;
            left: 0;
            position: fixed;
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
      </>
    )}
  />
);

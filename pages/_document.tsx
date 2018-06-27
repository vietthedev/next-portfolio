import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from "next/document";

export default class CustomDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style>{`
            * {
              box-sizing: border-box;
            }

            body {
              font-family: Monaco, Consolas, Courier New, monospace;
              margin: 0;
              padding: 0;
            }
            `}</style>
          <title>Việt Huỳnh - Software Developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

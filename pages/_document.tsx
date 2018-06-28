import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from "next/document";

interface ICustomDocumentProps {
  host: string;
}

export default class CustomDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const host = `https://${ctx.req.headers.host}`;
    const initialProps = await Document.getInitialProps(ctx);

    return { host, ...initialProps };
  }

  public props: ICustomDocumentProps;

  public render() {
    return (
      <html>
        <Head prefix="og: http://ogp.me/ns# profile: http://opg.me/ns/profile#">
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta
            name="msapplication-config"
            content="/static/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Việt Huỳnh - Software Developer" />
          <meta
            property="og:description"
            content="This is Việt's portfolio. It includes some of his information, the personal work as well as the skills he possesses."
          />
          <meta
            property="og:image"
            content={`${this.props.host}/static/img/profile_picture.png`}
          />
          <meta
            property="og:image:secure_url"
            content={`${this.props.host}/static/img/profile_picture.png`}
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1900" />
          <meta property="og:image:height" content="1200" />
          <meta property="og:image:alt" content="Việt Huỳnh" />
          <meta property="og:site_name" content="Việt Huỳnh's Portfolio" />
          <meta property="og:type" content="profile" />
          <meta property="og:locale" content="en_US" />
          <meta property="profile:first_name" content="Việt" />
          <meta property="profile:last_name" content="Huỳnh" />
          <meta property="profile:username" content="Salad" />
          <meta property="profile:gender" content="male" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@S_a_l_a_d" />
          <meta property="twitter:creator" content="@S_a_l_a_d" />
          <meta
            property="twitter:title"
            content="Việt Huỳnh - Software Developer"
          />
          <meta
            property="twitter:image"
            content={`${this.props.host}/static/img/profile_picture.png`}
          />
          <meta property="twitter:image:alt" content="Việt Huỳnh" />
          <meta
            property="twitter:description"
            content="This is Việt's portfolio. It includes some of his information, the personal work as well as the skills he possesses."
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

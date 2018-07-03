import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from "next/document";

import {
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_PROFILE,
  SITE_TITLE,
  SITE_TYPE,
  TWITTER_CARD
} from "../common/constants";
import { GA_TRACKING_ID } from "../common/constants";

export default class CustomDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head prefix="og: http://ogp.me/ns# profile: http://ogp.me/ns/profile#">
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
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
          <meta property="description" content={SITE_DESCRIPTION} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE.URL} />
          <meta property="og:image:secure_url" content={SITE_IMAGE.URL} />
          <meta property="og:image:type" content={SITE_IMAGE.TYPE} />
          <meta property="og:image:width" content={SITE_IMAGE.WIDTH} />
          <meta property="og:image:height" content={SITE_IMAGE.HEIGHT} />
          <meta property="og:image:alt" content={SITE_IMAGE.ALT} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:type" content={SITE_TYPE} />
          <meta property="og:locale" content={SITE_LANGUAGE} />
          <meta
            property="profile:first_name"
            content={SITE_PROFILE.FIRST_NAME}
          />
          <meta property="profile:last_name" content={SITE_PROFILE.LAST_NAME} />
          <meta property="profile:username" content={SITE_PROFILE.USERNAME} />
          <meta property="profile:gender" content={SITE_PROFILE.GENDER} />
          <meta property="twitter:card" content={TWITTER_CARD.TYPE} />
          <meta property="twitter:site" content={TWITTER_CARD.USERNAME} />
          <meta property="twitter:creator" content={TWITTER_CARD.USERNAME} />
          <meta property="twitter:title" content={SITE_TITLE} />
          <meta property="twitter:image" content={SITE_IMAGE.URL} />
          <meta property="twitter:image:alt" content={SITE_IMAGE.ALT} />
          <meta property="twitter:description" content={SITE_DESCRIPTION} />
          <link rel="stylesheet" href="/static/css/nprogress.css" />
          <style>{`
            * {
              box-sizing: border-box;
            }

            html {
              display: flex;

              min-height: 100%;
            }

            body {
              flex: 1;

              font-family: Monaco, Consolas, Courier New, monospace;
              margin: 0;
              padding: 0;
            }

            #__next {
              display: flex;

              min-height: 100%;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

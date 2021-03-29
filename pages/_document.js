import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&family=Roboto+Mono:ital,wght@1,500&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            href='https://i.pinimg.com/originals/90/70/26/9070266c2504c2b4e5b62967ae49497c.png'
            type='image/icon type'
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

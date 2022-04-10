import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { FlashlessScript } from "chakra-ui-flashless";
import theme from "../lib/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <FlashlessScript theme={theme} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

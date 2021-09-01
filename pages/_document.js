import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/common/Favicon';
import AccessibilityScriptTag from '../components/layout/AccessibilityScriptTag';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html dir="rtl" lang="he">
        <Head>
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
          <AccessibilityScriptTag />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

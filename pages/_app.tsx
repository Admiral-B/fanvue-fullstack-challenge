import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import lightTheme from "../themes/lightTheme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* Added the favicon in the head tag */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import "@fontsource/bubblegum-sans";
import "../../css/uikit.css";
import "../../css/uikit.min.css";
import "../../css/uikit-rtl.css";
import "../../css/uikit-rtl.min.css";
import { Triangles } from "react-loader-spinner";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Triangles />
      ) : (
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      )}
    </>
  );
}

export default MyApp;

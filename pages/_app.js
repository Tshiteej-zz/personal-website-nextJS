import React from "react";
import {
  ColorModeScript,
  ChakraProvider,
  useColorMode
} from "@chakra-ui/react";

import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";
import { prismDarkTheme, prismLightTheme } from "../styles/prism";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  // console.log(customTheme, "THEME");
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeScript initialColorMode={"dark"} />
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;

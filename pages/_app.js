import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";

import customTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  // console.log(customTheme, "THEME");
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeScript initialColorMode={"dark"} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

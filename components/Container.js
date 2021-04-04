import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";

import Header from "./Header";
import SideSocial from "./SideSocial";
const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717"
  };
  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300"
  };
  const color = {
    light: "black",
    dark: "white"
  };

  return (
    <>
      <Header />
      <SideSocial alignItems='flex-end' position='fixed' />

      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        // bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;

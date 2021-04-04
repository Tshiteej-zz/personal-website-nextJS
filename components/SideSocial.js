import React from "react";
import { Flex, Box, useColorMode, Divider, Center } from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const color = {
  light: "black",
  dark: "white"
};

function SideSocial() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as='SideBarSocial'
      direction='column'
      color={color[colorMode]}
      align='flex-end'
      maxWidth={10}
      position='fixed'
      bottom={0}
      ml={10}
      display={["none", "flex", "flex"]}
    >
      <Box
        my={4}
        as='a'
        href='https://github.com/Tshiteej'
        target='_blank'
        _hover={{ width: "20px" }}
      >
        <FaGithub />
      </Box>
      <Box
        my={4}
        as='a'
        href='https://twitter.com/tbhardwaj97'
        target='_blank'
        _hover={{ width: "20px" }}
      >
        <FaTwitter />
      </Box>
      <Box
        my={4}
        as='a'
        href='https://www.instagram.com/tshiteej/'
        target='_blank'
        _hover={{ width: "20px" }}
      >
        <FaInstagram />
      </Box>
      <Box
        my={4}
        as='a'
        href='https://www.linkedin.com/in/tshiteej/'
        target='_blank'
        _hover={{ width: "20px" }}
      >
        <FaLinkedinIn />
      </Box>
      <Box height='150px' mr={2}>
        <Divider orientation='vertical' borderColor='gray.500' />
      </Box>
    </Flex>
  );
}

export default SideSocial;

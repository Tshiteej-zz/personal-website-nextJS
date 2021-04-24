import React from "react";
import { Flex, Box, useColorMode, Divider } from "@chakra-ui/react";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow
} from "react-icons/fa";

import { motion } from "framer-motion";

const color = {
  light: "black",
  dark: "white"
};

const MBox = motion(Box);

function SideSocial() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as='sidessocial'
      direction='column'
      color={color[colorMode]}
      align='flex-end'
      maxWidth={10}
      position='fixed'
      bottom={0}
      ml={10}
      display={["none", "flex", "flex"]}
    >
      <MBox
        whileHover={{ scale: 1.5, y: "-10px", color: "teal" }}
        my={4}
        as='a'
        href='https://github.com/Tshiteej'
        target='_blank'
      >
        <FaGithub />
      </MBox>
      <MBox
        whileHover={{ scale: 1.5, y: "-10px", color: "teal" }}
        my={4}
        as='a'
        href='https://stackoverflow.com/users/13223807/tshiteej'
        target='_blank'
      >
        <FaStackOverflow />
      </MBox>
      <MBox
        whileHover={{ scale: 1.5, y: "-10px", color: "teal" }}
        my={4}
        as='a'
        href='https://twitter.com/tshiteej'
        target='_blank'
      >
        <FaTwitter />
      </MBox>
      <MBox
        whileHover={{ scale: 1.5, y: "-10px", color: "teal" }}
        my={4}
        as='a'
        href='https://www.instagram.com/tshiteej/'
        target='_blank'
      >
        <FaInstagram />
      </MBox>
      <MBox
        whileHover={{ scale: 1.5, y: "-10px", color: "teal" }}
        my={4}
        as='a'
        href='https://www.linkedin.com/in/tshiteej/'
        target='_blank'
      >
        <FaLinkedinIn />
      </MBox>
      <Box height='150px' mr={2}>
        <Divider
          orientation='vertical'
          borderColor={colorMode == "light" ? "gray.500" : "gray.700"}
        />
      </Box>
    </Flex>
  );
}

export default SideSocial;

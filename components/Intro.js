import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Image,
  Box,
  Divider,
  Link
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
function Intro() {
  return (
    <Flex pt={8} id='about' direction='column'>
      <Heading>About</Heading>
      <Box mt={6} w='70vw'>
        Hello Everyone! <br />
        My name is Tshiteej Bhardwaj and I love creating things for the web.
        Currently working as a Senior Software Engineer at{" "}
        <Link
          colorScheme='teal'
          href='https://yellowmessenger.com/'
          target='_blank'
        >
          YellowMessenger
          <ExternalLinkIcon mx='2px' />
        </Link>
        to create smart-intelligent multi-platform chatbots.
      </Box>
    </Flex>
  );
}

export default Intro;

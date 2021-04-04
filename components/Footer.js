import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  MdCheckCircle,
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Image,
  Box,
  Badge,
  Divider,
  Spacer,
  Link
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      id='footer'
      direction={["column", "row"]}
      mb={0}
      mt={10}
      w='100%'
      h={["200px", "50px"]}
      bgColor={["inherit", colorMode == "light" ? "gray.500" : "gray.700"]}
      align='center'
      justify='center'
    >
      <Box align='center' justify='center' display={["flex", "none"]}>
        <Divider borderColor='gray.500' />
        <Box
          my={4}
          mx={4}
          as='a'
          href='https://github.com/Tshiteej'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaGithub />
        </Box>
        <Box
          my={4}
          mx={4}
          as='a'
          href='https://twitter.com/tbhardwaj97'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaTwitter />
        </Box>
        <Box
          my={4}
          mx={4}
          as='a'
          href='https://www.instagram.com/tshiteej/'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaInstagram />
        </Box>
        <Box
          my={4}
          mx={4}
          as='a'
          href='https://www.linkedin.com/in/tshiteej/'
          target='_blank'
          _hover={{ width: "20px" }}
        >
          <FaLinkedinIn />
        </Box>
      </Box>
      <Box align='center' justify='center'>
        <Text align='center' justify='center'>
          Made with ❤️ and ☕ by Tshiteej
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;

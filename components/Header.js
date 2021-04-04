import React from "react";
import NextLink from "next/link";

import {
  Button,
  Box,
  Heading,
  Flex,
  Text,
  useColorMode,
  Switch,
  Spacer,
  useColorModeValue
} from "@chakra-ui/react";

const navHoverBg = {
  light: "gray.600",
  dark: "gray.300"
};
const color = {
  light: "black",
  dark: "white"
};

const Header = props => {
  const [show, setShow] = React.useState(false);
  //   console.log(show, "SHOW");
  const handleToggle = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();

  const textColor = useColorModeValue("black.500", "red.200");

  return (
    <Flex
      as='nav'
      align='center'
      justify='flex-end'
      wrap='wrap'
      padding='1.5rem'
      maxWidth='80vw'
      alignItems='center'
      ml='10vw'
      minWidth='356px'
      bg='transparent'
      color={textColor}
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading
          as='h1'
          size='lg'
          letterSpacing={"-.1rem"}
          color={color[colorMode]}
        >
          Tshiteej
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill='white'
          width='12px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>
      <Spacer />
      <Box
        display={{
          base: show === true ? "flex" : "none",
          sm: show === true ? "flex" : "none",
          md: "flex"
        }}
        width={{ sm: "full", md: "auto" }}
        alignItems={{ base: "right", sm: "center" }}
        // flexGrow={1}
        direction={{ sm: "row", md: "column" }}
      >
        <NextLink href='/' passHref>
          <Button
            as='a'
            variant='ghost'
            p={[1, 2, 4]}
            _hover={{ border: "1px", borderColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            About
          </Button>
        </NextLink>
        <NextLink href='/' passHref>
          <Button
            as='a'
            variant='ghost'
            p={[1, 2, 4]}
            _hover={{ border: "1px", borderColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            Experience
          </Button>
        </NextLink>
        <NextLink href='/' passHref>
          <Button
            as='a'
            variant='ghost'
            p={[1, 2, 4]}
            _hover={{ border: "1px", borderColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            Work
          </Button>
        </NextLink>
        <NextLink href='/' passHref>
          <Button
            as='a'
            variant='ghost'
            p={[1, 2, 4]}
            _hover={{ border: "1px", borderColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            Contact
          </Button>
        </NextLink>
      </Box>

      <Box
        display={{
          base: show === true ? "block" : "none",
          sm: show ? "block" : "none",
          md: "block"
        }}
        mt={{ base: 4, md: 0 }}
      >
        <Switch size='md' colorScheme='teal' onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
};

export default Header;

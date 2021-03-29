import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Image,
  Box
} from "@chakra-ui/react";

import Container from "../components/Container";
import Top from "../components/Top";
import Intro from "../components/Intro";
import Quote from "../components/Quote";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400"
  };
  return (
    <Container>
      <Head>
        <title>Tshiteej Bhardwaj</title>
      </Head>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='90vw'
        px={2}
      >
        <Top />
        <Quote />
        <Intro />
      </Stack>
    </Container>
  );
}

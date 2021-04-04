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
  Link,
  TagLabel,
  Tag
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  FaBriefcase,
  FaBusinessTime,
  FaLocationArrow,
  FaExternalLinkAlt
} from "react-icons/fa";
function Projects() {
  const { colorMode } = useColorMode();
  return (
    <Flex id='projects' direction='column'>
      <Heading>Projects</Heading>
      <Divider borderColor='gray.500' />
      <Flex justify='' direction={["column", "row"]} w='70vw'>
        <Box
          //   maxW='sm'
          //   as='a'
          //   href='ww.google.com'
          borderWidth='1px'
          borderRadius='lg'
          overflowX='visible'
          mt={6}
          h='500px'
          w='250px'
          boxShadow='dark-lg'
        >
          <Box w='250px' h='200px'>
            <Image
              w='248px'
              h='200px'
              borderRadius='10px'
              src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2806&q=80'
              alt='image'
            />
          </Box>
          <Text
            mt='1'
            fontWeight='semibold'
            // as='h6'
            // lineHeight='tight'
            // isTruncated
            p={2}
            align='center'
          >
            Personal Website
          </Text>
          <Box
            mr={[-20, "-55px"]}
            // borderColor='red'
            // borderWidth='2px'
            borderRadius='15px'
            bgColor={colorMode == "dark" ? "gray.700" : "gray.100"}
            boxShadow='dark-xl'
            // h={20}
          >
            <Box pt='2' pl='3' pb='3' justify='right'>
              Ever thought of solving a problem with regex and ended up with 2
              problems. No more!
            </Box>
          </Box>
          <Text ml={2} mt={2}>
            Stack:
          </Text>
          <Box mt='2' ml='3'>
            <Tag size='sm' variant='outline' colorScheme='teal' mx={1} mb={2}>
              <TagLabel>NextJS</TagLabel>
            </Tag>
            <Tag size='sm' variant='outline' colorScheme='teal' mx={1} mb={2}>
              <TagLabel>Chakra-UI</TagLabel>
            </Tag>
            <Tag size='sm' variant='outline' colorScheme='teal' mx={1} mb={2}>
              <TagLabel>ReactJS</TagLabel>
            </Tag>
            <Tag size='sm' variant='outline' colorScheme='teal' mx={1} mb={2}>
              <TagLabel>HTML</TagLabel>
            </Tag>
            <Tag size='sm' variant='outline' colorScheme='teal' mx={1} mb={2}>
              <TagLabel>CSS</TagLabel>
            </Tag>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Projects;

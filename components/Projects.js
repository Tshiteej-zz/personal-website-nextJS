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
import { motion } from "framer-motion";

const MBox = motion(Box);
const MTag = motion(Tag);
function Projects() {
  const { colorMode } = useColorMode();
  return (
    <Flex id='projects' direction='column' mb={250}>
      <Heading>Projects</Heading>
      <Divider borderColor='gray.500' />
      <Flex justify='' direction={["column", "row"]} w='70vw' mt={20}>
        <Box
          //   maxW='sm'
          //   as='a'
          //   href='ww.google.com'
          borderWidth='1px'
          borderRadius='lg'
          overflowX='visible'
          mt={6}
          h='450px'
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
          <MBox
            whileHover={{ x: "30px", y: "-30px", scale: 1.2 }}
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
          </MBox>
          <Text ml={2} mt={2}>
            Stack:
          </Text>
          <Box mt='2' ml='3'>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>NextJS</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>Chakra-UI</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>ReactJS</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>HTML</TagLabel>
            </MTag>
            <MTag
              size='sm'
              variant='outline'
              colorScheme='teal'
              mx={1}
              mb={2}
              whileHover={{ scale: 1.2 }}
            >
              <TagLabel>CSS</TagLabel>
            </MTag>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Projects;

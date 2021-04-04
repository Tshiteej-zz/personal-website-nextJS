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
  Divider,
  Link
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  FaBriefcase,
  FaBusinessTime,
  FaLocationArrow,
  FaExternalLinkAlt
} from "react-icons/fa";
function Experience() {
  return (
    <Flex id='experience' direction='column'>
      <Heading>Experience</Heading>
      <Divider borderColor='gray.500' />
      <Flex
        direction='row'
        borderWidth='1px'
        borderRadius='lg'
        justify='space-between'
        w={["inherit", "55vw"]}
        pl={4}
        pt={4}
        pb={4}
        pr={2}
        mt={20}
        boxShadow='2xl'
      >
        <Box boxSize='200px' display={["none", "block"]}>
          <Image
            borderRadius='20px'
            src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2806&q=80'
            alt='image'
          />
        </Box>
        <Box>
          <List spacing={5} mt={5}>
            <Stack justify='space-evenly' direction='column'>
              <ListItem>
                <ListIcon as={FaBriefcase} color='teal.600' />
                YellowMessenger
              </ListItem>
              <ListItem>
                <ListIcon as={FaBusinessTime} color='teal.600' />
                Senior Software engineer (January 2021 - Present)
              </ListItem>
              <ListItem>
                <ListIcon as={FaBusinessTime} color='teal.600' />
                Software engineer (June 2019 - January 2021)
              </ListItem>
              <ListItem>
                <ListIcon as={FaLocationArrow} color='teal.600' />
                Building Intelligent Chatbots
              </ListItem>
              <ListItem>
                <ListIcon as={FaExternalLinkAlt} color='teal.600' />
                <Link href='https://yellowmessenger.com/'>yellow.ai</Link>
              </ListItem>
            </Stack>
          </List>
        </Box>
      </Flex>

      <Flex
        direction='row'
        borderWidth='1px'
        borderRadius='lg'
        mt={7}
        ml={["0", "10vw"]}
        justify='space-between'
        w={["inherit", "55vw"]}
        pl={4}
        pt={4}
        pb={4}
        pr={2}
        boxShadow='2xl'
      >
        <Box>
          <List spacing={5} mt={5}>
            <Stack justify='space-evenly' direction='column'>
              <ListItem>
                <ListIcon as={FaBriefcase} color='teal.600' />
                CDAC - Pune
              </ListItem>
              <ListItem>
                <ListIcon as={FaBusinessTime} color='teal.600' />
                Summer Internship (2018)
              </ListItem>
              <ListItem>
                <ListIcon as={FaLocationArrow} color='teal.600' />
                Built Inventory management portal for the procurement of
                Param-Shavak
              </ListItem>
              <ListItem>
                <ListIcon as={FaExternalLinkAlt} color='teal.600' />
                <Link href='https://cdac.in/'>CDAC</Link>
              </ListItem>
            </Stack>
          </List>
        </Box>
        <Box boxSize='200px' display={["none", "block"]}>
          <Image
            borderRadius='20px'
            src='https://www.sagacent.com/wp-content/uploads/2019/04/server-clustering.jpg'
            alt='image'
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Experience;

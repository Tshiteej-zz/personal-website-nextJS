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
import {
  FaBriefcase,
  FaBusinessTime,
  FaLocationArrow,
  FaExternalLinkAlt
} from "react-icons/fa";
import { motion } from "framer-motion";

const MBox = motion(Box);
function Blogs() {
  const { colorMode } = useColorMode();
  return (
    <Flex id='blogs' direction='column' mb={250}>
      <Heading>Recent Articles</Heading>
      <Divider borderColor='gray.500' />
      <Flex
        justify='space-evenly'
        direction={["column", "row"]}
        w='70vw'
        mt={20}
      >
        <MBox
          //   maxW='sm'
          //   as='a'
          //   href='ww.google.com'
          whileHover={{ scale: 1.2, y: "-30px" }}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          mt={6}
          h='400px'
          w='300px'
          boxShadow='dark-lg'
        >
          <Box w='300px' h='200px'>
            <Image
              w='300px'
              h='200px'
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
            How regex in python isn’t as bad as you think?
          </Text>
          <Box px='4' pb='6'>
            {/* <Box d='flex' alignItems=''> */}
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              //   ml='2'
            >
              Published on : 05-APR-21
            </Box>
            {/* </Box> */}

            <Box pt='2' justify='right'>
              Ever thought of solving a problem with regex and ended up with 2
              problems. No more!
            </Box>
          </Box>
        </MBox>

        <MBox
          //   maxW='sm'
          whileHover={{ scale: 1.2, y: "-30px" }}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          mt={20}
          h='400px'
          w='300px'
          boxShadow='dark-lg'
        >
          <Box w='300px' h='200px'>
            <Image
              w='300px'
              h='200px'
              src='https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2806&q=80'
              alt='image'
            />
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            // isTruncated
            p={2}
            align='center'
          >
            Test Automation Using Python and Selenium
          </Box>
          <Box px='6' pb='6'>
            {/* <Box d='flex' alignItems=''> */}
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              Published on : 05/04/2021
            </Box>
            {/* </Box> */}

            <Box>
              Ever though of solving a problem with regex and ended up with 2
              problems now. No more!
            </Box>
          </Box>
        </MBox>

        <MBox
          //   maxW='sm'
          //   as='a'
          //   href='ww.google.com'
          whileHover={{ scale: 1.2, y: "-30px" }}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          mt={6}
          h='400px'
          w='300px'
          boxShadow='dark-lg'
        >
          <Box w='300px' h='200px'>
            <Image
              w='300px'
              h='200px'
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
            How regex in python isn’t as bad as you think?
          </Text>
          <Box px='4' pb='6'>
            {/* <Box d='flex' alignItems=''> */}
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              //   ml='2'
            >
              Published on : 05-APR-21
            </Box>
            {/* </Box> */}

            <Box pt='2' justify='right'>
              Ever thought of solving a problem with regex and ended up with 2
              problems. No more!
            </Box>
          </Box>
        </MBox>
      </Flex>
    </Flex>
  );
}

export default Blogs;

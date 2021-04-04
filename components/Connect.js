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
  Button,
  Divider,
  Spacer,
  Link,
  EmailIcon
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  FaBriefcase,
  FaMailBulk,
  FaLocationArrow,
  FaExternalLinkAlt
} from "react-icons/fa";
function Connect() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      id='contact'
      direction={["column", "row"]}
      mb={0}
      h='200px'
      w='100%'
      align='center'
      justify='center'
    >
      <Box align='center' justify='center'>
        <Text p={10} mt={1} lineHeight={2}>
          Want to discuss tech, comics, anime or have a project in mind! <br />
          Would love to connect!
        </Text>
        <Button
          as='a'
          href='mailto:tbhardwaj97@gmail.com'
          target='_blank'
          leftIcon={<FaMailBulk />}
          colorScheme='teal'
          variant='outline'
          size='lg'
        >
          Connect
        </Button>
      </Box>
    </Flex>
  );
}

export default Connect;

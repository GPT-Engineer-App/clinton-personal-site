// Personal website for DeWitt Clinton
import { Box, Flex, Heading, Text, Image, Link, VStack, Icon, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl" mb={4}>
          DeWitt Clinton
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZVdpdHQlMjBDbGludG9uJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzODQzNjI1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="DeWitt Clinton" />
        <Text mt={4}>DeWitt Clinton is a software engineer with a passion for developing scalable web applications and working on open source projects. He specializes in React and Node.js.</Text>
      </Box>
      <VStack spacing={4} mt={5}>
        <Link href="https://www.linkedin.com/in/dewittclinton" isExternal>
          <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue">
            LinkedIn
          </Button>
        </Link>
        <Link href="https://github.com/dewittclinton" isExternal>
          <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray">
            GitHub
          </Button>
        </Link>
        <Link href="mailto:dewitt.clinton@example.com">
          <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="red">
            Email
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
};

export default Index;

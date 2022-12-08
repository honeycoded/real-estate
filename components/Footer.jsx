import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box color="gray.600" as="cite" textAlign={"center"}>
      <Text textAlign={"center"} borderTop="1px" borderColor={"gray.300"}>
        2021 Realtor, inc
      </Text>
    </Box>
  );
};

export default Footer;

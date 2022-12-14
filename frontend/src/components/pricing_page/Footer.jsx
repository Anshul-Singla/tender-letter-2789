import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Box px={16} pt={6}>
        <HStack>
          <Image src="https://tmetric.com/images/v3/tmetric_logo_with_text.svg" />
        </HStack>
      </Box>
      <SimpleGrid columns={[1, 2, 2, 4]} p={16} margin="auto">
        <List>
          <ListItem as="b">TMETRIC</ListItem>
          <ListItem>Application</ListItem>
          <ListItem>Desktop</ListItem>
          <ListItem>iOS</ListItem>
          <ListItem>Mobile</ListItem>
        </List>

        <List>
          <ListItem as="b">Browser Extensions</ListItem>
          <ListItem>Chrome</ListItem>
          <ListItem>Firefox</ListItem>
          <ListItem>Opera</ListItem>
          <ListItem>Edge</ListItem>
          <ListItem>safari</ListItem>
          <ListItem>Ecommerce</ListItem>
        </List>

        <List>
          <ListItem as="b">Resources</ListItem>
          <ListItem>Solutions</ListItem>
          <ListItem>Integrations</ListItem>
          <ListItem>Help</ListItem>
          <ListItem>Time Trackers Comparison</ListItem>
          <ListItem>Blog</ListItem>
        </List>
        <List>
          <ListItem as="b">About</ListItem>
          <ListItem>Terms of Servive</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Cookies Policy</ListItem>
        </List>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;

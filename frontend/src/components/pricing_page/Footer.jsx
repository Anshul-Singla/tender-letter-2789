import {
  Box,
  HStack,
  Image,
  List,
  Flex,
  ListItem,
  SimpleGrid,
  Heading,Text,
} from "@chakra-ui/react";
import { AiFillChrome } from "react-icons/ai";
import { FaFirefoxBrowser ,FaEdge , FaSafari } from "react-icons/fa";
import { DiOpera } from "react-icons/di";
import React from "react";
import logo from '../../logo/time_tracker_logo.png'

const Footer = () => {
  const footerList1 = [
    "Application","Desktop","iOS","Mobile"
  ]
  const footerList2 = [
   
    {
      link:"https://addons.mozilla.org/en-US/firefox/addon/tmetric-extension/",
      text:"Firefox"
    },{
      link:"https://addons.opera.com/en/extensions/details/tmetric-extension/",
      text:"Opera"
    },{
      link:"https://microsoftedge.microsoft.com/addons/detail/bkohhohbfioiffcejghnjljadblbifok",
      text:"Edge"
    },{
      link:"https://apps.apple.com/app/tmetric-for-safari/id1483939427",
      text:"safari"
    }
    
  ]
  const footerList3 = [
    "Solutions","Integrations","Help","Time Trackers Comparison","Blog"
  ]
  const footerList4 = [
    "About TMetric","Terms of Service","Privacy Policy","Cookies Policy"
  ]
  return (
    <Box   backgroundColor='#DCDCDC'>
      <Box px={16} pt={6}>
        <HStack>
          <Image src={logo} w={100} />
        </HStack>
      </Box>
      <SimpleGrid columns={[1, 2, 2, 4]} p={16} margin="auto" borderBottom='1px solid #c0c0c0'>
        <List>
          <ListItem as='b'> TMETRIC </ListItem>
          {
            footerList1.map(list => <ListItem> {list} </ListItem>)
          }
        </List>
        <List>
          <ListItem as="b">Browser Extensions</ListItem>
              <Flex gap='.5rem'  alignItems='center'>
                <AiFillChrome/>
                <ListItem> Chrome </ListItem>
              </Flex>
              <Flex gap='.5rem'  alignItems='center'>
                <FaFirefoxBrowser/>
                <ListItem> FireFox </ListItem>
              </Flex>
              <Flex gap='.5rem'  alignItems='center'>
                <DiOpera/>
                <ListItem> Opera </ListItem>
              </Flex>
              <Flex gap='.5rem'  alignItems='center'>
                <FaEdge/>
                <ListItem> Edge </ListItem>
              </Flex>
              <Flex gap='.5rem'  alignItems='center'>
                <FaSafari/>
                <ListItem> Safari </ListItem>
              </Flex>
        </List>
        <List>
          <ListItem as="b">Resources</ListItem>
          {
            footerList3.map(list => <ListItem> {list} </ListItem>)
          }
        </List>
        <List>
          <ListItem as="b">About</ListItem>
          {
            footerList4.map(list => <ListItem> {list} </ListItem>)
          }
        </List>
      </SimpleGrid>
    <Box  m='30px 0 0 0' paddingBottom='20px'>
        <Text m='0 30px' fontWeight='600' fontSize='16px'>Copyright © Devart 2022</Text>
      
    </Box>
    </Box>
  );
};

export default Footer;

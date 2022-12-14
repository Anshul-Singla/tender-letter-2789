import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  ChakraProvider,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Box,
  AccordionItem,
  Accordion,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import { BsArrowRight, BsFolderFill, BsStopwatchFill } from "react-icons/bs";
import { RiBillFill, RiTeamFill } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { SlEarphonesAlt } from "react-icons/sl";
import {
  SiAsana,
  SiGithub,
  SiJirasoftware,
  SiMicrosoftoffice,
  SiTodoist,
} from "react-icons/si";
function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <ChakraProvider>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>TimeTracker</DrawerHeader>

            <DrawerBody>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Why TimeTracker
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List color="black" as="b">
                      <ListItem color="grey" mt={2}>
                        Overview
                      </ListItem>
                      <ListItem mt={2}>Industry</ListItem>
                      <ListItem mt={2}>Customers</ListItem>
                      <ListItem mt={2} color="gray">
                        Features
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={BsStopwatchFill} color="gray" />
                        Time Tracking
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={RiBillFill} color="gray" />
                        Billing and invoincing
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={BsFolderFill} color="gray" /> Project
                        Management
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={RiTeamFill} color="gray" /> Team
                        Management
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={FaChartBar} color="gray" /> Task
                        Management
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={GiPalmTree} color="gray" /> Time Off
                      </ListItem>
                      <ListItem mt={2} color="blue">
                        View All Features
                        <ListIcon ml={2} as={BsArrowRight} color="blue" />
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Apps & Integreations
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List color="black" as="b">
                      <ListItem mt={2} color="gray">
                        Apps
                      </ListItem>
                      <ListItem mt={2}>Browser Extensions</ListItem>
                      <ListItem mt={2}>Mobile Apps</ListItem>
                      <ListItem mt={2}>Desktop Apps</ListItem>
                      <ListItem mt={2} color="grey">
                        Integrations
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={SiJirasoftware} color="blue" />
                        Jira
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={SiAsana} color="red.400" />
                        Asana
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={SiTodoist} color="red.700" /> Todoist
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={SiMicrosoftoffice} color="red.700" /> MS
                        Office
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={SiGithub} />
                        Github
                      </ListItem>
                      <ListItem mt={2}>
                        <ListIcon as={SlEarphonesAlt} color="green.400" />{" "}
                        Freshdesk
                      </ListItem>
                      <ListItem mt={2} color="blue">
                        View All Integrations
                        <ListIcon ml={2} as={BsArrowRight} color="blue" />
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Text mt={3} fontSize="20px" fontWeight="600">
                Pricing
              </Text>
              <hr />
              <Text mt={3} fontSize="20px" fontWeight="600">
                Support
              </Text>
              <hr />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </ChakraProvider>
    </>
  );
}

export default Hamburger;

import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { AiFillTags, AiOutlineLeft } from "react-icons/ai";
import { Link as ReachLink } from "react-router-dom";
import { BsFillGearFill, BsFolderFill, BsStopwatchFill } from "react-icons/bs";
import { RiBillFill, RiTShirtAirFill, RiTeamFill } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbChartArcs, TbChecklist } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Logo from "../../logo/time_tracker_logo.png";

const Sidebar = () => {
  const [val, setVal] = useState(true);
  return (
    <Flex bg="#f6f7f8" >
      
      <IconButton
   
        size="sm"
        as={RxHamburgerMenu}
        position="absolute"
        top="5"
        left="5"
        zIndex={1}
        padding={2}
        onClick={() => (val ? setVal(false) : setVal(true))}
        display={val ? "none" : "block"}
      />

      <Box
      // border={"1px solid black"}
        backgroundColor={"#eaeaea"}
        zIndex={1}
        h="100vh"
        w={"fit-content"}
        // width={["100%", "50%", "40%", "30%"]}
        display={val ? "flex" : "none"}
        p={4}
        position="fixed"
        top="0"
        left="0"
      >
        <VStack align="start">
          <Flex gap={4}>
            <IconButton
              size="sm"
              padding={2}
              icon={<AiOutlineLeft />}
              onClick={() => {
                setVal(false);
              }}
            />
            <Image src={Logo} height="50px" width="80px" />
          </Flex>
          <List color="black" fontWeight="400" fontSize="20px">
            <ListItem mt={2}>
              <Link as={ReachLink} to="/auth/tracker">
                <ListIcon as={BsStopwatchFill} color="gray" mr={4} />
                Time
              </Link>
            </ListItem>
            <ListItem mt={2}>
              <Link as={ReachLink} to="">
                <ListIcon as={RiBillFill} color="gray" mr={4} />
                My Work
              </Link>
            </ListItem>
            <ListItem mt={2}>
              <Link as={ReachLink} to="/auth/tasks">
                <ListIcon as={BsFolderFill} color="gray" mr={3} /> Tasks
              </Link>
            </ListItem>
            <ListItem mt={2}>
              <Link as={ReachLink} to="">
                {" "}
                <ListIcon as={RiTeamFill} color="gray" mr={3} /> Team
              </Link>
            </ListItem>
          </List>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" m={0} p={0}>
                    ANALYZE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List color="black" fontWeight="400" fontSize="16px">
                  <ListItem mt={2}>
                    <Link as={ReachLink} to="">
                      <ListIcon as={FaChartBar} />
                      Reports
                    </Link>
                  </ListItem>
                  <ListItem mt={2}>
                    <Link as={ReachLink} to="">
                      <ListIcon as={TbChartArcs} />
                      Activity
                    </Link>
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" m={0} p={0}>
                    MANAGE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List color="black" fontWeight="400" fontSize="16px">
                  <ListItem mt={2}>
                    <Link as={ReachLink} to="/auth/projects">
                      <ListIcon as={BsFolderFill} color="gray" /> Project
                    </Link>
                  </ListItem>

                  <ListItem mt={2}>
                    <Link as={ReachLink}>
                      <ListIcon as={HiOutlineBuildingOffice2} color="gray" />{" "}
                      Clients
                    </Link>
                  </ListItem>
                  <ListItem mt={2}>
                    <Link as={ReachLink} to=""></Link>
                    <ListIcon as={RiBillFill} color="gray" />
                    Invoices
                  </ListItem>
                  <ListItem mt={2}>
                    <Link as={ReachLink} to="">
                      <ListIcon as={GiPalmTree} color="gray" /> Time Off
                    </Link>
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" m={0} p={0}>
                    WORKSPACE
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List color="black" fontWeight="400" fontSize="16px">
                  <ListItem mt={2}>
                    <Link as={ReachLink}>
                      <ListIcon as={BsFillGearFill} color="gray" /> Settings
                    </Link>
                  </ListItem>

                  <ListItem mt={2}>
                    <Link as={ReachLink}>
                      <ListIcon as={CgProfile} color="gray" /> Members
                    </Link>
                  </ListItem>
                  <ListItem mt={2}>
                    <Link as={ReachLink} to=""></Link>
                    <ListIcon as={RiTShirtAirFill} color="gray" />
                    Teams
                  </ListItem>
                  <ListItem mt={2}>
                    <Link as={ReachLink} to="">
                      <ListIcon as={AiFillTags} color="gray" /> Tags
                    </Link>
                  </ListItem>
                  <ListItem mt={2}>
                    <Link as={ReachLink} to="">
                      <ListIcon as={GrIntegration} color="gray" /> Integration
                    </Link>
                  </ListItem>
                  <ListItem mt={2}>
                    <Link as={ReachLink} to="">
                      <ListIcon as={TbChecklist} color="gray" /> Subscription
                    </Link>
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
        <Box position="absolute" bottom="5">
          <Button width="100%" colorScheme="messenger">
            Logout
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Sidebar;

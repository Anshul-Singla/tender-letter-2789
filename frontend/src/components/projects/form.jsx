//import { DrawerExample } from "./drawer";
import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//:::::::::::::: MAIN FUNCTION ::::::::::::::::::

export const Inputform = () => {
  const [task, setTask] = useState("");
  const [taskid, setTaskid] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState({ task: "", taskid: "", desc: "" });
  const [ui, setUi] = useState(false);
  const [bui, setBui] = useState(false);
  const [wui, setWui] = useState(false);
  let navigate = useNavigate();

  //:::::::::::::: POST REQUEST :::::::::::::::::::

  const handleSubmit = async () => {
    setData({ ...data, task: task, taskid: taskid, desc: desc });
    await axios
      .post("http://localhost:8080/project/new", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
    navigate("/auth/projects");
  };

  //:::::::::::::::::::: SWITCH UI ::::::::::::::::::::

  const handleUi = () => {
    setUi(!ui);
  };
  const handleUiTwo = () => {
    setBui(!bui);
  };
  const handleUiThree = () => {
    setWui(!wui);
  };
  //:::::::::::::::: NAVIGATOR ::::::::::::::::::::::::
  const handleBack = () => {
    navigate("/auth/projects");
  };

  //:::::::::::::::: SHOW UI ON DOM :::::::::::::::::::
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns="repeat(2, 1fr)"
        w="99%"
        m="auto"
      >
        <Box mt={"5px"} border={"1px solid grey"} w={["55%", "40%", "50%"]}>
          SIDEBAR COMPONENT
        </Box>
        <Box
          w={["140%", "135%", "140%"]}
          ml={["-4rem", "-8.5rem", "-11rem", "-19rem"]}
        >
          {/* :::::::::::::::::: MAIN FORM FOR ADDING DATA :::::::::::::::::*/}

          <Box onClick={handleBack} w="100%" p={4}>
            <Text fontSize={["2xl", "2xl", "3xl"]}>← New Project</Text>
          </Box>
          {/* ::::::::::::::::::::::::: FORM UI ::::::::::::::::::::::::::::: */}
          <Box
            display={"grid"}
            gridTemplateColumns="repeat(2,1fr)"
            border={"1px solid grey"}
            borderRadius={"6px"}
            h={["1100px", "920px", "780px"]}
          >
            <Box w={"50%"}>
              <Grid templateColumns="repeat(1, 1fr)" gap={2} mt="5">
                <GridItem
                  pl="3"
                  pt="2"
                  border={"1px solid grey"}
                  borderRadius={"6px"}
                  w="90%"
                  m="auto"
                  h="10"
                >
                  General
                </GridItem>
                <a href="#billing">
                  <GridItem
                    pl="3"
                    pt="2"
                    border={"1px solid grey"}
                    borderRadius={"6px"}
                    w="90%"
                    m="auto"
                    h="10"
                  >
                    Billing
                  </GridItem>
                </a>
                <a href="#budget">
                  <GridItem
                    pl="3"
                    pt="2"
                    border={"1px solid grey"}
                    borderRadius={"6px"}
                    w="90%"
                    m="auto"
                    h="10"
                  >
                    Budget
                  </GridItem>
                </a>
                <a href="#work">
                  <GridItem
                    pl="3"
                    pt="2"
                    border={"1px solid grey"}
                    borderRadius={"6px"}
                    w="90%"
                    m="auto"
                    h={["15", "20", "10"]}
                  >
                    Work types
                  </GridItem>
                </a>
                <GridItem
                  pl="3"
                  pt="2"
                  border={"1px solid grey"}
                  borderRadius={"6px"}
                  w="90%"
                  m="auto"
                  h="10"
                >
                  Team
                </GridItem>
              </Grid>
            </Box>
            {/* ::::::::::::::::::::::::: IMPORTANT INPUT BOXES ::::::::::::::::::::::::::: */}
            <Box ml={["-3rem", "-5rem", "-8rem", "-13rem"]}>
              <Text pl="2" pt="3" fontSize="xl">
                General
              </Text>

              <Text mt="3" pl="3" fontSize="sm">
                Project Name
              </Text>
              <Input
                value={data.task}
                id="task"
                mt="1"
                ml="3"
                w="80%"
                placeholder="Enter Your Project Name"
                onChange={(e) => setData({ ...data, task: e.target.value })}
              />
              <Text mt="2" pl="3" fontSize="sm">
                Project Code
              </Text>
              <Input
                id="taskId"
                value={data.taskid}
                onChange={(e) => setData({ ...data, taskid: e.target.value })}
                mt="1"
                ml="3"
                w="80%"
                placeholder="e.g : 101"
              />
              <Text mt="2" pl="3" fontSize="sm">
                Description
              </Text>
              <Input
                value={data.desc}
                id="desc"
                onChange={(e) => setData({ ...data, desc: e.target.value })}
                mt="1"
                ml="3"
                h="20"
                w="80%"
                placeholder="Basic details"
              />
              <br />
              <Button
                onClick={handleSubmit}
                mt="4"
                ml={["9rem", "9rem", "28rem"]}
                colorScheme="blue"
              >
                Submit
              </Button>
              {/*::::::::::::::::::::::::: SWITCH UI  ::::::::::::::::::::::*/}
              <br />
              <Box display={"flex"} id="billing">
                <Text mt="2" pl="3" fontSize="xl">
                  Billing
                </Text>
                <Switch
                  mt="4"
                  pl="2"
                  ml={["0rem", "5px", "9px"]}
                  id="email-alerts"
                  onChange={handleUi}
                />
              </Box>
              <Stack spacing={3}>
                <Alert
                  mt="3"
                  w="85%"
                  status={ui === false ? "info" : "success"}
                >
                  <AlertIcon />
                  {ui === false
                    ? "To set up billing options for the project, mark it as billable."
                    : "marked as billable."}
                </Alert>
              </Stack>
              <br />
              <Box display={"flex"} id="budget">
                <Text mt="2" pl="3" fontSize="xl">
                  Budget
                </Text>
                <Switch
                  mt="4"
                  pl="2"
                  ml={["0rem", "5px", "9px"]}
                  id="email-alerts"
                  onChange={handleUiTwo}
                />
              </Box>
              <Stack spacing={3}>
                <Alert
                  mt="3"
                  w="85%"
                  status={bui === false ? "info" : "warning"}
                >
                  <AlertIcon />
                  {bui === false
                    ? "To add a budget to the project, you need to enable the section"
                    : "Something went wrong"}
                </Alert>
              </Stack>
              <br />
              <Box display={"flex"} id="work">
                <Text mt="2" pl="3" fontSize="xl">
                  Work Types
                </Text>
                <Switch
                  mt="4"
                  pl="2"
                  ml={["0rem", "5px", "9px"]}
                  id="email-alert"
                  onChange={handleUiThree}
                />
              </Box>
              <Stack spacing={3}>
                <Alert mt="3" w="85%" status={wui === false ? "info" : "error"}>
                  <AlertIcon />
                  {wui === false
                    ? "There are no work types in the workspace. You should create work type"
                    : " There was an error processing your request"}
                </Alert>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

import React, { useState } from "react";
//import { DrawerExample } from "./drawer";
import { Box, Button, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import axios from "axios";
//----------------------------------
export const Inputform = () => {
  const [task, setTask] = useState("");
  const [taskid, setTaskid] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState({ task: "", taskid: '', desc: "" });
  
  //-------------------
  const handleSubmit = async () => {
    setData({ ...data, task: task, taskid: taskid, desc: desc });
    await axios
      .post("http://localhost:8080/project/new", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  //------------------------------------
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
          {/* ---------------------------------------*/}

          <Box w="100%" p={4}>
            <Text fontSize={["2xl", "2xl", "3xl"]}>← New Project</Text>
          </Box>
          {/* ------------------------------------------------ */}
          <Box
            display={"grid"}
            gridTemplateColumns="repeat(2,1fr)"
            border={"1px solid grey"}
            borderRadius={"6px"}
            h={"500px"}
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
            {/* ------------------------------------------- */}
            <Box ml={["-3rem", "-5rem", "-8rem", "-13rem"]}>
              <Text pl="3" pt="3" fontSize="xl">
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
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

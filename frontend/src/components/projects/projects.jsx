import React from "react";
//import { DrawerExample } from "./drawer";
import {
  Box,
  Grid,
  Select,
  Text,
  Button,
  Switch,
  Checkbox,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Inputform } from "./form";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
//----------------------------------

export const Projects = () => {
  const [data, setData] = useState([]);

  //--------------------------------
  const getData = async () => {
    await axios
      .get("http://localhost:8080/project/show")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  };
  
  //:::::::::: GETTING DATA ON UI :::::::::::::

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  //:::::::::::::::: DELETING DATA :::::::::::::::::
  const handleDelete = async (id, ti) => {
    try {
      await axios.delete(`http://localhost:8080/project/delete/${id}`);
      setData(
        data.filter((el) => {
          return el._id !== id;
        })
      );
      alert(`      TASK WITH ID : ${ti} WILL BE DELETED`);
    } catch (err) {
      console.log(err.message);
    }
  };
  //::::::::::::::: TOOGLE DATA :::::::::::::::
  let toogle = (id) => {
    let afterToogle = data.map((el) =>
      el._id === id ? { ...el, done: !el.done } : el
    );
    setData(afterToogle);
  };
  //::::::::::::::: UPDATE DATA ::::::::::::::::

  const handleUpdate = async (id) => {
    let update = prompt("Enter New Description Here");
    console.log(update);
    try {
      await axios
        .post(`http://localhost:8080/project/update/${id}`, {
          desc: update,
        })
        .then((res) => getData());
    } catch (err) {
      console.log(err.message);
    }
  };

  //-----------------------------------------------------------------
  const handleForm = () => {
    <Routes>
      <Route path="/new_project" element={<Inputform />}></Route>
    </Routes>;
    console.log("OK");
  };
  //------------------------------------------------------------------
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns="repeat(2, 1fr)"
        w="99%"
        m="auto"
      >
        <Box border={"1px solid grey"} w={["55%", "40%", "50%"]}>
          SIDEBAR COMPONENT
        </Box>
        <Box
          w={["140%", "135%", "140%"]}
          ml={["-4rem", "-8.5rem", "-11rem", "-19rem"]}
        >
          {/* ---------------------------------------*/}

          <Box w="100%" p={4}>
            <Text fontSize={["2xl", "2xl", "3xl"]}>Projects</Text>
          </Box>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={0}
            w="60%"
            p={"6px"}
          >
            <Select size={["xs", "sm", "sm"]} placeholder="Client">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select size={["xs", "sm", "sm"]} placeholder="Status">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select size={["xs", "sm", "sm"]} placeholder="Billing">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select size={["xs", "sm", "sm"]} placeholder="Budget">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Grid>
          {/* ------------------------------------------------ */}
          <Box border={"1px solid grey"} borderRadius={"6px"}>
            <Box borderBottom={"1px solid grey"} p={"10px"}>
              {/*--------------------------------- */}
              <Button onClick={handleForm} colorScheme="blue">
                {" "}
                + New Project{" "}
              </Button>
              {/*--------------------------------- */}
              <Switch ml={["0rem", "5px", "9px"]} id="email-alerts" />
            </Box>
            {/* -------------API COMPONENT------------- */}
            <Box h={"400px"}>
              {data.map((el) => (
                <Box
                  key={el._id}
                  display={"grid"}
                  gridTemplateColumns="repeat(3, 1fr)"
                  w="90%"
                  m="auto"
                  mt="2"
                  p="2"
                  border={"1px solid gray"}
                  borderRadius={"16px"}
                >
                  <Box display={"grid"} alignItems={"center"}>
                    <Text as="b">
                      <Checkbox
                        onChange={() => toogle(el._id)}
                        isInvalid
                        p="1"
                      />
                      {el.task.toUpperCase()}
                    </Text>

                    <Text fontSize="sm">NOTE : {el.desc} !</Text>
                  </Box>
                  <Box
                    display={"grid"}
                    textAlign="center"
                    alignItems={"center"}
                  >
                    {!el.done ? (
                      <Text as="b" color={"red"} fontSize="sm">
                        PENDING
                      </Text>
                    ) : (
                      <Text as="b" color={"green"} fontSize="sm">
                        COMPLETE AT {new Date().toLocaleTimeString()}
                      </Text>
                    )}
                  </Box>
                  <Box textAlign={"right"}>
                    <Button
                      onClick={() => handleUpdate(el._id)}
                      mr="2"
                      w="10%"
                      border={"1px solid white"}
                    >
                      🖊
                    </Button>
                    <Button
                      onClick={() => handleDelete(el._id, el.taskid)}
                      w="10%"
                      border={"1px solid white"}
                    >
                      🗑
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

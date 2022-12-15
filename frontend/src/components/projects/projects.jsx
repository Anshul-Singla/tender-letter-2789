//import { DrawerExample } from "./drawer";
import React from "react";
import {
  Box,
  Grid,
  Select,
  Text,
  Button,
  Switch,
  Checkbox,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//::::::::::: MAIN FUNCTION :::::::::::::::

export const Projects = () => {
  const [data, setData] = useState([]);

  //:::::::::: GETTING DATA ON UI :::::::::::::

  const getData = async () => {
    await axios
      .get("http://localhost:8080/project/show")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  };

  const filter = async (done) => {
    await axios
      .post("http://localhost:8080/project/toggle", { done: done })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  //:::::::::::::::: DELETING DATA :::::::::::::::::
  const handleDelete = async (id, ti) => {
    try {
      await axios.delete(`http://localhost:8080/project/delete/${id}`);
      setData(
        data.filter((el) => {
          return el._id !== id;
        })
      );
      alert(`TASK WITH ID : ${ti} WILL BE DELETED`);
    } catch (err) {
      console.log(err.message);
    }
  };
  //::::::::::::::: TOOGLE DATA :::::::::::::::
  let toogle = async (id) => {
    try {
      await axios
        .post(`http://localhost:8080/project/update/${id}`, {
          done: true,
        })
        .then((res) => getData());
    } catch (err) {
      console.log(err.message);
    }
    console.log(data);
  };
  //::::::::::::::: UPDATE DATA ::::::::::::::::

  const handleUpdate = async (id, ti) => {
    let update = prompt(`Enter New Description For Task ID : ${ti}`);
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
  //::::::::::::::::: STATUS CHECK ::::::::::::::::::::

  const handleStatus = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      console.log("inside empty");
      getData();
    }
    if (e.target.value === "false") {
      console.log("inside false");
      filter(false);
    }
    if (e.target.value === "true") {
      console.log("inside true");
      filter(true);
    }
  };

  //::::::::::::::::::::::: NAVIGATE ::::::::::::::::::::::::::::
  let navigate = useNavigate();
  const handleForm = () => {
    navigate("/auth/projects/new");
    console.log("OK");
  };
  //:::::::::::::::::::: MAIN UI ON DOM :::::::::::::::::::::::
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
          {/* ::::::::::: STARTING THE PROJECTS PART :::::::::::*/}

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
            <Select
              size={["xs", "sm", "sm"]}
              onChange={handleStatus}
              placeholder="Status"
            >
              <option value="false">Pending</option>
              <option value="true">Complete</option>
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
          {/* ::::::::::::::: SHOW DATA ON UI ::::::::::::::::*/}
          <Box border={"1px solid grey"} borderRadius={"6px"}>
            <Box
              borderBottom={"1px solid grey"}
              p={"10px"}
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {/* ::::::::::: ADDING NEW PROJECT :::::::::::: */}
              <Button onClick={handleForm} colorScheme="blue">
                {" "}
                + New Project{" "}
              </Button>
              <Box>
                <Switch ml={["0rem", "1rem", "-19rem"]} id="email-alerts" />{" "}
                Group by client
              </Box>
              <Box textAlign={"right"}>Projects : {data.length}</Box>
            </Box>
            {/* ::::::::::::::::: API COMPONENT ::::::::::::::: */}
            <Box h={"400px"}>
              <Box
                display={"grid"}
                gridTemplateColumns="repeat(4, 1fr)"
                w="97%"
                m="auto"
                textAlign={"center"}
                mt="1"
              >
                <Box borderRight={"1px solid grey"}>
                  <Text fontSize="xs">TASK</Text>
                </Box>
                <Box borderRight={"1px solid grey"}>
                  <Text fontSize="xs">ID</Text>
                </Box>
                <Box borderRight={"1px solid grey"}>
                  <Text fontSize="xs">STATUS</Text>
                </Box>
                <Box>
                  <Text fontSize="xs">E/D</Text>
                </Box>
              </Box>
              <hr />
              {/*::::----:::: API MAP ::::----:::: */}
              {data.map((el) => (
                <Box
                  key={el._id}
                  display={"grid"}
                  gridTemplateColumns="repeat(4, 1fr)"
                  w="97%"
                  m="auto"
                  mt="2"
                  p="2"
                  border={"1px solid gray"}
                  borderRadius={"10px"}
                >
                  <Box display={"grid"} alignItems={"center"}>
                    <Text fontSize="md" as="b">
                      <Checkbox
                        onChange={() => toogle(el._id)}
                        isInvalid
                        p="1"
                      />
                      {el.task.toUpperCase()}
                    </Text>

                    <Text fontSize="sm">{el.desc}!</Text>
                  </Box>
                  <Box
                    display={"grid"}
                    textAlign="center"
                    alignItems={"center"}
                  >
                    {" "}
                    <Text fontSize="sm">{el.taskid}</Text>
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
                        COMPLETED AT {new Date().toLocaleTimeString()}
                      </Text>
                    )}
                  </Box>
                  <Box display="flex" flexWrap={"wrap"}>
                    <Button
                      onClick={() => handleUpdate(el._id, el.taskid)}
                      ml={["8", "8", "5", "20"]}
                      w="10%"
                      border={"1px solid white"}
                    >
                      🖊
                    </Button>
                    <Button
                      onClick={() => handleDelete(el._id, el.taskid)}
                      ml={["8", "8", "2"]}
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

import React, { useEffect, useState } from "react";
import { GoPlay } from "react-icons/go";
import { HiStop } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { RxDotFilled } from "react-icons/rx";
import { FcGenericSortingAsc } from "react-icons/fc";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import chart from "../Time_Tracker/chart.png";
import {
    Box,
    Center,
    Container,
    Flex,
    Input,
    Text,
    FlexBox,
    Image,
    Button,
    Checkbox,
    useDisclosure,
    Fade,
    Divider,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import Timeline from "react-timeline-bar";
import "react-timeline-bar/dist/index.css";
import TimePicker from "react-time-picker";
import { v4 as uuidv4 } from "uuid";
import ActiveProject from "./ActiveProject";
import axios from "axios";

const Tracker = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [play, setPlay] = useState(0);
    const [uptime, setUptime] = useState([0, 0]);
    let [value, onChange] = useState("8:00");
    let [value1, onChange1] = useState("9:00");
    const [shour, setshour] = useState([]);
    const [ehour, setehour] = useState([]);
    // console.log(value)
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        id: "",
        description: "",
        project: "",
        start: shour,
        end: ehour,
    });
    // console.log(form)

    // // <<<<<<<<<<< GET DATA >>>>>>>>>>
    // const GetData = async () => {
    //     return (
    //         await axios.get("http://localhost:8080/tracker/show")
    //         .then((res) => {
    //          console.log(res.data.time)
    //         })
    //     )
    // }

    // useEffect(() => {
    //     GetData()
    // }, [])


    // delete the task
    const DeleteProject = (id) => {
        let newData = data.filter((e) => e.id !== id);
        setData(newData);
        rset();
    };

    const rset = () => {
        let h = ehour[0] - shour[0];
        let m = ehour[1] - shour[1];
        let temp = [...uptime];
        setUptime([temp[0] - h, temp[1] - m]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(value)
        setForm({
            ...form,
            [name]: value,
            id: uuidv4(),
        });
    };

    const set = () => {
        let h = ehour[0] - shour[0];
        let m = ehour[1] - shour[1];
        let temp = [...uptime];
        setUptime([temp[0] + h, temp[1] + m]);
    };

    const Addproject = (e) => {
        e.preventDefault();
        setData([...data, form]);
        set();
        onClose();
    };

    useEffect(() => {
        setshour(value.trim().split(":").map(Number));
        setForm({ ...form, start: shour.join(":") });
    }, [value]);

    useEffect(() => {
        setehour(value1.trim().split(":").map(Number));
        setForm({ ...form, end: ehour.join(":") });
    }, [value1]);


    return (
        <Box
            display={"flex"}
            flexDirection={["column", "column", "column"]}
            gap={"1rem"}
            // border={"1px solid grey"}
            w={"auto"}
        >

            {/* Top-part */}
            <Center >
                <Box
                    display={"flex"}
                    flexDirection={["column", "column", "row"]}
                    justifyContent={"space-between"}
                    gap={"2rem"}
                    w={"80%"}
                    padding={"1rem"}
                // border={"1px solid red"}
                >
                    <Flex gap="4" align={"center"} >
                        <GoPlay style={{ color: "#17c22e", fontSize: "3rem" }} />
                        <HiStop style={{ fontSize: "2rem" }} />
                        <Text fontSize="2rem">My Time</Text>
                    </Flex>

                    <Flex gap="4" align={"center"}>
                        <Input w={"auto"} type="date" />
                        <Text fontSize={"2xl"}>Today</Text>

                        <Box display={"flex"}>
                            <BiChevronLeft size={"1.5rem"} />
                            <RxDotFilled size={"1.5rem"} />
                            <BiChevronRight size={"1.5rem"} />
                        </Box>

                    </Flex>
                </Box>
            </Center>


            {/* Middle-part */}
            <Center>
                <Box
                    border={"0.2px solid #d8dde1"}
                    borderRadius={".5rem"}
                    display={"flex"}
                    flexDirection={"column"}
                    w={"80%"}
                    padding={"1rem"}
                >
                    <Box
                        display={"flex"}
                        flexDirection={["row", "row", "row"]}
                        justifyContent={"space-between"}
                        gap={"2rem"}
                    >
                        <Box w={"fit-content"}>
                            <Text>Total</Text>
                            <Text fontSize="1.5rem">
                                {Math.abs(uptime[0]) + "h" + " " + Math.abs(uptime[1]) + "m"}
                            </Text>
                        </Box>

                        <Box w={"fit-content"}>
                            <Text>Monthly Balance . . .</Text>
                            <Text fontSize="1.5rem" color={"#17c22e"}>
                                {/* 1 Min */}
                            </Text>
                        </Box>
                    </Box>

                    <Image src={chart} alt="chart" />
                </Box>
                {/* <Timeline onSetNewTime={seconds => console.log(seconds)} /> */}
            </Center>


            {/* Down-part */}
            <Center>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    border={"0.2px solid #d8dde1"}
                    borderRadius={".5rem"}
                    w={"80%"}
                    gap={"1rem"}
                >
                    <Box
                        border={"0.2px solid #d8dde1"}
                        borderRadius={".5rem"}
                        display={"flex"}
                        flexDirection={["column", "column", "row"]}
                        justifyContent={["space-between", "space-between", "space-between"]}
                        padding={"1rem"}
                    >
                        <Flex gap="4">
                            <Checkbox></Checkbox>
                            <Button onClick={onOpen} width={"fit-Content"}>
                                Add Time Entry
                            </Button>
                            <Button width={"fit-content"}>Add Break</Button>
                        </Flex>
                    </Box>

                    {data.length === 0 ? (
                        <Text overflow={"hidden"}>
                            "No work time is recorded for this day."
                        </Text>
                    ) : (
                        data.map((e) => {
                            return (
                                <ActiveProject
                                    props={e}
                                    key={e.id}
                                    setPlay={setPlay}
                                    play={play}
                                    DeleteProject={DeleteProject}
                                />
                            );
                        })
                    )}
                </Box>
            </Center>

            {/* <<<<<<<<<<< FORM >>>>>>>>> */}
            <Center>
                <form style={{ width: "80%", marginTop: "-1.5rem" }}>
                    <Fade in={isOpen}>
                        <Divider />
                        <Box
                            color="black"
                            w="100%"
                            rounded="md"
                            boxShadow="xs"
                            p={"1rem"}
                            pt="3rem"
                        >
                            {/* First Flex*/}

                            <Flex mt={"-3%"} justifyContent="space-between">
                                <Box w="50%">
                                    <Text textAlign={"left"}>Description</Text>
                                    <Input
                                        w="100%"
                                        h="30px"
                                        name="description"
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Description"
                                    ></Input>
                                </Box>
                                <Box>
                                    <Text textAlign={"left"}>Start Time</Text>
                                    <TimePicker onChange={onChange} value={value} />
                                </Box>
                                <Box>
                                    <Text textAlign={"left"}>End Time</Text>
                                    <TimePicker onChange={onChange1} value={value1} />
                                    {/* <Clock setClock2={setClock2}/> */}
                                </Box>

                                <Box w="12%">
                                    <Text textAlign={"left"}>Duration</Text>
                                    <Text border="1px solid" borderRadius={"3px"}>
                                        {ehour[0] - shour[0]} h : {ehour[1] - shour[1]} m
                                    </Text>
                                </Box>
                            </Flex>

                            {/* Second Flex*/}
                            <Flex mt="30px" w="60%" justifyContent={"space-between"}>
                                <Box w="55%">
                                    <Text textAlign={"left"}>Add Project</Text>
                                    <Input
                                        name="project"
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Add project"
                                    />
                                </Box>
                                <Box w="40%">
                                    <Text textAlign={"left"}>Add Tags</Text>
                                    <Input placeholder="Add Tags" />
                                </Box>
                            </Flex>

                            {/* Form End */}
                            <Flex gap="20px" textAlign={"left"} mt="20px">
                                <Button
                                    bg="blue"
                                    type="submit"
                                    onClick={Addproject}
                                    colorScheme="facebook"
                                >
                                    Save
                                </Button>
                                <Button onClick={onClose} color="black">
                                    Cancel
                                </Button>
                            </Flex>

                        </Box>
                    </Fade>
                </form>
            </Center>
        </Box>
    );
};

export default Tracker;

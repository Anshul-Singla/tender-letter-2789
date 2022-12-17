import React, { useEffect, useState } from "react";
import { GoPlay } from "react-icons/go";
import { HiStop } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineAddCircleOutline} from "react-icons/md";
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
    useToast,
} from "@chakra-ui/react";


import "react-timeline-bar/dist/index.css";
import TimePicker from "react-time-picker";
import ActiveProject from "./ActiveProject";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

const Tracker = () => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [play, setPlay] = useState(0);
    const [uptime, setUptime] = useState([0, 0]);
    let [value, onChange] = useState("8:00");
    let [value1, onChange1] = useState("9:00");
    const [shour, setshour] = useState([]);
    const [ehour, setehour] = useState([]);

    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        desc: "",
        project: "",
        tag: "",
        start_time: shour,
        end_time: ehour,
    });

    const [done, setDone] = useState(false)
    // console.log("data", data)


    // <<<<<<<<<<< GET DATA >>>>>>>>>>
    const GetData = async () => {
        return await axios.get("http://localhost:8080/tracker/show")
            .then((res) => {
                //  console.log("res",res.data)
                setData(res.data)
            })
    }
    // <<<<<<<<<<< USE EFFECT >>>>>>>>>>
    useEffect(() => {
        GetData()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    // <<<<<<<<<<< FORM SUBMIT >>>>>>>>>>
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/tracker/new", form)
        onClose()
        GetData()
        set();

        toast({
            title: 'Time Entry Created.',
            description: "We've created Time Entry for you.",
            status: 'success',
            duration: 1500,
            isClosable: true,
            position: "top"
        })


    }
    // <<<<<<<<<<< DELETE DATA >>>>>>>>>>
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/tracker/delete/${id}`);
            setData(
                data.filter((el) => {
                    return el._id !== id;
                })
            );
            rset()
            toast({
                title: `Time Entry Deleted`,
                description: "We've Deleted Time Entry for you.",
                status: 'success',
                duration: 1500,
                isClosable: true,
                position: "top"
            })

        } catch (err) {
            console.log(err.message);
        }
    };

    // <<<<<<<<<<< TOOGLE DATA >>>>>>>>>>
    let toogle = async (id, done) => {
        try {
            await axios
                .post(`http://localhost:8080/tracker/update/${id}`, {
                    done: !done,
                })
                .then((res) => {
                    console.log("res", res)
                    GetData()
                });
        } catch (err) {
            console.log(err.message);
        }
        console.log(data);
    };

    // <<<<<<<<<<< UPDATE DATA >>>>>>>>>>
    const handleUpdate = async (id) => {
        let update = prompt(`Enter New Description For Task ID : ${id}`);
        console.log(update);
        try {
            await axios
                .post(`http://localhost:8080/tracker/update/${id}`, {
                    desc: update,
                })
                .then((res) => GetData());
        } catch (err) {
            console.log(err.message);
        }
    };


    const rset = () => {
        let h = ehour[0] - shour[0];
        let m = ehour[1] - shour[1];
        let temp = [...uptime];
        setUptime([temp[0] - h, temp[1] - m]);
    };


    const set = () => {
        let h = ehour[0] - shour[0];
        let m = ehour[1] - shour[1];
        let temp = [...uptime];
        setUptime([temp[0] + h, temp[1] + m]);
    };

    useEffect(() => {
        setshour(value.trim().split(":").map(Number));
        setForm({ ...form, start: shour.join(":") });
    }, [value]);

    useEffect(() => {
        setehour(value1.trim().split(":").map(Number));
        setForm({ ...form, end: ehour.join(":") });
    }, [value1]);


    // <<<<<<<<<<< HANDLE TIMER >>>>>>>>>>
    const handleTimer = () => {
        setDone(!done)
    }



    return (

        <Flex justifyContent={"space-between"} >
            <Sidebar />
            {/* <Center> */}
            <Box
                // border={"1px solid red"}
                display={"flex"}
                flexDirection={["column", "column", "column"]}
                gap={"2rem"}

                w={["100%", "100%", "84%"]}
                padding={"1rem"}
            >

                {/* <<<<<<<<<<< TOP PART >>>>>>>>>> */}
                <Center >
                    <Box
                        display={"flex"}
                        flexDirection={["column", "column", "row"]}
                        justifyContent={"space-between"}
                        gap={"2rem"}
                        w={"100%"}
                        padding={"1rem"}
                    // border={"1px solid red"}
                    >
                        <Flex gap="4" align={"center"} >
                            {done ?
                                <GoPlay cursor={"pointer"} onClick={handleTimer} style={{ color: "#17c22e", fontSize: "3rem" }} />
                                : <MdOutlineAddCircleOutline cursor={"pointer"} onClick={handleTimer} style={{ color: "#17c22e", fontSize: "3rem" }}/>}
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


                {/* <<<<<<<<<<< MIDDLE PART >>>>>>>>>> */}
                <Center>
                    <Box
                        border={"0.2px solid #d8dde1"}
                        borderRadius={".5rem"}
                        display={"flex"}
                        flexDirection={"column"}
                        w={"100%"}
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
                </Center>


                {/* <<<<<<<<<<< DOWN PART >>>>>>>>>> */}
                <Center>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        border={"0.2px solid #d8dde1"}
                        borderRadius={".5rem"}
                        w={"100%"}
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

                        {/* <<<<<<<< MAP THE DATA >>>>>>>>> */}
                        {
                            data.length === 0 ? (
                                <Text overflow={"hidden"}>
                                    "No work time is recorded for this day."
                                </Text>
                            ) : (
                                data.map((e) => {
                                    return (
                                        <ActiveProject
                                            props={e}
                                            key={e._id}
                                            setPlay={setPlay}
                                            play={play}
                                            DeleteProject={handleDelete}
                                            toogle={toogle}
                                            UpdateProject={handleUpdate}

                                        />
                                    );
                                })
                            )
                        }
                    </Box>
                </Center>

                {/* <<<<<<<<<<< FORM INPUT >>>>>>>>> */}
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

                                <Flex mt={"-3%"} justifyContent="space-between">

                                    <Box w="50%">
                                        <Text textAlign={"left"}>Description</Text>
                                        <Input
                                            w="100%"
                                            h="30px"
                                            name="desc"
                                            value={form.desc}
                                            onChange={handleChange}
                                            placeholder="Description"
                                        ></Input>
                                    </Box>

                                    {/* <Box w="55%">
                                    <Text textAlign={"left"}>Start_time</Text>
                                    <TimePicker name="start_time" onChange={handleChange} value={form.start_time} />
                                <Input
                                        name="start_time"
                                        value={form.start_time}
                                        onChange={handleChange}
                                        placeholder="start_time"
                                    />
                                </Box> */}


                                    <Box>
                                        <Text textAlign={"left"}>Start Time</Text>
                                        <TimePicker onChange={onChange} value={value} />
                                    </Box>
                                    <Box>
                                        <Text textAlign={"left"}>End Time</Text>
                                        <TimePicker onChange={onChange1} value={value1} />

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
                                            value={form.project}
                                            onChange={handleChange}
                                            placeholder="Add project"
                                        />
                                    </Box>
                                    <Box w="40%">
                                        <Text textAlign={"left"}>Add Tags</Text>
                                        <Input placeholder="Add Tags" name="tag" value={form.tag} onChange={handleChange} />
                                    </Box>
                                </Flex>

                                {/* Form End */}
                                <Flex gap="20px" textAlign={"left"} mt="20px">
                                    <Button
                                        bg="blue"
                                        type="submit"
                                        onClick={handleSubmit}
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
            {/* </Center> */}
        </Flex>

    );
};

export default Tracker;


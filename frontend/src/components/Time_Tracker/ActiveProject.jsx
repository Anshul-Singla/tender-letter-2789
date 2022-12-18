import { Box, Button, Center, Checkbox, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { FcFolder } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { TfiTimer } from "react-icons/tfi";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ActiveProject = ({
    props,
    setPlay,
    play,
    DeleteProject,
    // toogle,
    UpdateProject,
    ToggleProject,
    shour,
    ehour
}) => {
    
    const [count, setCount] = useState(0);
    const [is, setIs] = useState(false);
    const timerId = useRef(null);

    useEffect(() => {
        document.title = `Today Time Tracker : ${count}`
    }, [count])

    // <<<<<<<<<<< START TIMER >>>>>>>>>>>
    const Start = () => {
        setIs(true);
        // setPlay(play + 1)
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setCount((count) => count + 1);
            }, 1000);
        }
    };

    // <<<<<<<<<<< TIMER PAUSE >>>>>>>>>>>
    const Pause = () => {
        // setPlay(play - 1)
        setIs(false);
        clearTimeout(timerId.current);
        timerId.current = null;
    };

    // console.log("props",props)
    return (
        <Box
            key={props._id}
            border={"0.2px solid #d8dde1"}
            width={"auto"}
            height={"auto"}
            borderRadius={".5rem"}
        >
            <Flex p={".5rem"} justifyContent="space-between">
                <Flex gap="1rem">
                    <Checkbox onChange={()=>ToggleProject(props._id,props.done)}></Checkbox>
                    <Text>{props.desc}</Text>
                </Flex>
                <Flex gap="2rem">
                    <Flex gap="10px">
                        {" "}
                        <FcFolder size="1.5rem" />
                        <Text>{props.project}</Text>
                    </Flex>
                    <Flex>
                    {ehour[0] - shour[0]} h : {ehour[1] - shour[1]}0 min
                        {/* {`${Number(Number(props.end_time[0])-Number(props.start_time[0]))}hr : 00 min`} */}
                    </Flex>

                    <Center><Flex gap={".5rem"}>{count} <TfiTimer color="grey"/> </Flex></Center>
                    <Flex flexDirection={["column", "column", "row"]} gap="1rem">
                        {!is ? (
                            <FaPlay cursor={"pointer"} color="#17c22e" onClick={Start} />
                        ) : (
                            <FaStop cursor={"pointer"} color="red" onClick={Pause} />
                        )}
                        <Text ml="20px" cursor={"pointer"}>
                        {
                            props.done ?
                            <GrEdit onClick={() => UpdateProject(props._id)} size={"20px"} />
                            :null
                            }
                        </Text>
                        <Text ml="20px" cursor={"pointer"}>
                           {
                            props.done ?
                           <MdOutlineDeleteOutline color="red"
                                onClick={() => DeleteProject(props._id)}
                                size={"20px"}
                            />
                        :null
                           }
                        
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}

export default ActiveProject;

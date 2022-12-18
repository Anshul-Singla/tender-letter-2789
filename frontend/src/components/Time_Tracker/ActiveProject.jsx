import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { FcFolder } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ActiveProject = ({
    props,
    setPlay,
    play,
    DeleteProject,
    toogle,
    UpdateProject,
}) => {
    console.log(props)
    const [count, setCount] = useState(0);
    const [is, setIs] = useState(false);
    const timerId = useRef(null);

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

    // <<<<<<<<<<< PAUSE START >>>>>>>>>>>
    const Pause = () => {
        // setPlay(play - 1)
        setIs(false);
        clearTimeout(timerId.current);
        timerId.current = null;
    };


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
                    <Checkbox onChange={() => toogle(props._id)}></Checkbox>
                    <Text>{props.desc}</Text>
                </Flex>
                <Flex gap="2rem">
                    <Flex gap="10px">
                        {" "}
                        <FcFolder size="1.5rem" />
                        <Text>{props.project}</Text>
                    </Flex>
                    <Flex>
                        {props.start_time} - {props.end_time}
                    </Flex>

                    <Text>{count} : sec </Text>
                    <Flex flexDirection={["column", "column", "row"]} gap="1rem">
                        {!is ? (
                            <FaPlay color="#17c22e" onClick={Start} />
                        ) : (
                            <FaStop color="red" onClick={Pause} />
                        )}
                        <Text ml="20px" cursor={"pointer"}>
                            <GrEdit onClick={() => UpdateProject(props._id)} size={"20px"} />
                        </Text>
                        <Text ml="20px" cursor={"pointer"}>
                            <MdOutlineDeleteOutline
                                onClick={() => DeleteProject(props._id)}
                                size={"20px"}
                            />
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}

export default ActiveProject;

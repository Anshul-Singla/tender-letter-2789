import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FaPlay, FaStop } from 'react-icons/fa'
import { FcFolder } from 'react-icons/fc'
import { MdOutlineDeleteOutline } from "react-icons/md"

const ActiveProject = ({ props, setPlay, play, DeleteProject }) => {
    const [count, setCount] = useState(0)
    const [is, setIs] = useState(false)
    const timerId = useRef(null)

    const Start = () => {
        setIs(true)
        setPlay(play + 1)
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setCount((count) => count + 1)
            }, 60000)
        }
    }
    const Pause = () => {
        setPlay(play - 1)
        setIs(false)
        clearTimeout(timerId.current)
        timerId.current = null;
    }


    return (
        <Box key={props.id} border={"0.2px solid #d8dde1"}    borderRadius={".5rem"} >
            <Flex  p={".5rem"} justifyContent="space-between" >
                <Flex gap="1rem">
                    <Checkbox ></Checkbox>
                    <Text>{props.description}</Text>
                </Flex>
                <Flex gap="2rem" >
                    <Flex gap="10px"> <FcFolder size="1.5rem" /><Text>{props.project}</Text></Flex>
                    <Flex>{props.start} - {props.end}</Flex>

                    <Text>{count} : min </Text>
                    {!is ?
                        <FaPlay color='gray' onClick={Start} />
                        :
                        <FaStop color='gray' onClick={Pause} />
                    }
                    <Text ml="20px" cursor={"pointer"}><MdOutlineDeleteOutline onClick={() => DeleteProject(props.id)} size={"20px"} /></Text>
                </Flex>
            </Flex>


        </Box>
    )
}

export default ActiveProject
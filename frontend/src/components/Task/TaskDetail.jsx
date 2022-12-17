import React, { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,Input,SimpleGrid,Box,Text
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
 import axios from 'axios';
  import {BsFillCreditCardFill,BsStopwatchFill,BsFillCalendarDateFill} from "react-icons/bs";
  import {FaUserCircle} from "react-icons/fa";
  import {TbFileDescription} from "react-icons/tb";
  import {GrValidate} from "react-icons/gr"
import "./TaskDetails.css"

  

export default function TaskDetail({details,isOpen, onOpen, onClose}) {
  if(isOpen){
    var {_id,projectname,assignee,date,description,estimatedtime,status}=details
   
  }


var res="Not Completd"
 if(status){
  var Buttonstyle={
 backgroundColor:"rgb(63, 252, 0)"
   }
  res="Complted"
 }
// }
  
  //  console.log("details",projectname)
    
 
  //  const { isOpen, onOpen, onClose } = useDisclosure()



  
// useEffect(()=>{
//   const handleClick=()=>{
    
//    onOpen()
// }
   
// },[])



const handleStatus=async(id,status)=>{


try{
    await axios.post(`http://localhost:8080/${id}`,{
      status:!status
    })
   
  }
  catch(e){
    console.log(e.message)
  }  
}





return (
      <>
     <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><Text fontSize="40px" color={"red"} >TASK DETAILS</Text></DrawerHeader>
            <Button onClick={()=>{handleStatus(_id,status);onClose()}} style={Buttonstyle}  > <GrValidate/>{res}</Button>
            <DrawerBody>
 
            <SimpleGrid columns={2} spacing={41} fontSize="30px" fontWeight={"500"} padding="10px">
            <Box  height='40px'className='details' ><BsFillCreditCardFill/>Project :</Box>
            <Box  height='40px'>{projectname}</Box>
            <Box  height='40px' className='details'><FaUserCircle/>Assignee :</Box>
            <Box  height='40px'>{assignee}</Box>
            <Box  height='40px'className='details'><BsStopwatchFill/>Due Date :</Box>
            <Box  height='40px'>{date}</Box>
            <Box  height='40px'className='details'><TbFileDescription/>Description : </Box>
            <Box  height='40px'className='details'>{description}</Box>
            <Box  height='40px'className='details'><BsFillCalendarDateFill/>Estimate :</Box>
            <Box  height='40px'>{estimatedtime}</Box>
            </SimpleGrid> 

            </DrawerBody>
            <DrawerFooter>
                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>Save</Button> */}
            <Button backgroundColor='teal' color="white" variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

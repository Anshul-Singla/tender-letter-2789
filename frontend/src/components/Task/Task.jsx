import React, { useEffect, useState } from 'react'
import { Select,Box, Button, Input, Text,Flex,Spacer} from '@chakra-ui/react';

import {AiFillCheckCircle} from "react-icons/ai"
import SelectTag from './select/selectTag'
import InitialFocus from "./Form"
import axios from 'axios'
import { useDisclosure } from '@chakra-ui/react';
import "./Task.css"
import TaskDetail from './TaskDetail';
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';


export default function Task() {
  const { isOpen, onOpen, onClose } = useDisclosure()
   const [data,setData]=useState([])
 const [details,setdetails]=useState({})
  const [recall,setRefresh]=useState()
 




const refresh=(refresh)=>{
setRefresh(refresh)
}

useEffect(()=>{
 axios.get(`https://time-tracker-server.onrender.com/task`)
.then((res)=>setData(res.data))
},[recall])

//================== find details of a single Task ======================
const handleDetails=(id)=>{
  axios.get(`https://time-tracker-server.onrender.com/task/${id}`)
  .then((res)=>{setdetails(res.data);onOpen()})

}


//===================== Delete a Task ==============================

const handleDelete=(id)=>{
  axios.delete(`https://time-tracker-server.onrender.com/task/${id}`)
  alert("Task Deleted Successfully")
  setRefresh(Date.now())
}

//======================= Edit Task =================================
const handleEdit=async(id)=>{
  let update=prompt(`Enter New Task Name`)

  try{
    await axios.patch(`https://time-tracker-server.onrender.com/task/${id}`,{
      taskname:update
    })
  }
  catch(e){
    console.log(e.message)
  }
  setRefresh(Date.now())
}

const handleSelect=((de)=>{
  axios.get(`https://time-tracker-server.onrender.com/task`)
  .then((res)=>{
  if(de=="null"){
    setRefresh(Date.now())
  }
    else if(de=="false"){
     
      const cd=res.data.filter((e)=>e.status==false)
     
      setData(cd)
        }
        else if(de=="true"){
          
              const cd=data.filter((e)=>e.status==true)
              console.log("true",cd)
          setData(cd)   

        }
        
 })
})

return (
      <Box style={{"display":"flex" , "gap":"2rem","justifyContent":"space-evenly"}}>
      <Box >
        <Sidebar/>
      </Box>
      <Box style={{"width":"70%","padding":"20px"} } m='20px 'border='2px solid' borderRadius='25px'>
      <Box style={{"fontSize":"27px","fontWeight":"500"}}  w={[300,400,800,900]} className="text" >My Tasks |</Box>
      <br/>
      <Box style={{"display":"flex","flexWrap":"wrap",'gap':"5px" }}w={["100%"]} >
     
      <SelectTag text={"Client : All"} />
      <SelectTag text={"Project: All"}/>
      <SelectTag text={"Tag: All"}/>
      <SelectTag text={"Status: Open"}/>
      <SelectTag text={" Source:Inter.."} />
      </Box>
<br/>

      <Box style={{"display":"flex",'gap':"5px","border":"1px solid gray","w":"100%","borderRadius":"5px","padding":"10px"}} w={["90%"]}>
       
      {/* //============================ form =========================  */}

      
   <InitialFocus refresh={refresh}/>

      {/* <Select placeholder="Sort : Project" backgroundColor={"gray.100"} size='120px' textAlign="center" w="140px" h="35px" borderColor="gray" borderRadius="7px" _hover={{backgroundColor:"#e2e6eb"}}> 
      <option value='Project'>Project</option>
      <option value='Estimate'>Estimate</option>
      <option value='Due Date'>Due Date</option>
      <option value='Last Update'>Last Update</option>
      <option value='Newer First'>Newer First</option>
      <option value='Older First'>Older First</option>
      </Select> */}
      <Select onClick={(e)=>handleSelect(e.target.value)} backgroundColor={"gray.100"} size='120px' textAlign="center" w="140px" h="35px" borderColor="gray" borderRadius="7px"> 
      <option value="null">All Task</option>
      <option value="true">Completed</option>
      <option value="false">Not Completed</option>
      </Select>

     
        <Input w="250px" placeholder='Search Here ' marginLeft={"50%"} h="35px"></Input>
       
        </Box>
       
        <Box clssname="box" style={{'gap':"1px","border":"1px solid gray","borderRadius":"5px","padding":"10px",}} h="750" overflow={"auto"} w={["100%"]}>
         {
          data && data.map((e)=>(
           
            <Box className='boxx'>
              <Flex>
              <Box><AiFillCheckCircle className='AiFillCheckCircle' /></Box>
            
            <Box className='taskdiv'onClick={()=>{handleDetails(e._id)}} >
       
             <TaskDetail details={details} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
          
             <Text className='text'>{e.taskname}</Text>
            </Box>
            <Spacer />
            <FaEdit size={"38px"} className="FaEdit" onClick={()=>handleEdit(e._id)}/>
            <MdDelete size={"40px"} className="MdDelete " onClick={()=>handleDelete(e._id)}/>
            </Flex>
           <hr></hr>
            </Box>
       ))
         }

        </Box>
    </Box>
    </Box>
  )
}

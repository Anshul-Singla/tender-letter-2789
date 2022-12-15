import React, { useEffect, useState } from 'react'
import { Select,Box, Button, Input, Text} from '@chakra-ui/react';

import {AiFillCheckCircle} from "react-icons/ai"
import SelectTag from './component/selectTag'
import InitialFocus from "./Form"
import axios from 'axios'

import "./Task.css"
import TaskDetail from './TaskDetail';




export default function Task() {
  const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
 const [data,setData]=useState([])

 const [recall,setRefresh]=useState("")
const refresh=(refresh)=>{
setRefresh(refresh)
}
let id=1
useEffect(async()=>{
await axios.get(`http://localhost:8080/task/1`)
.then((res)=>console.log(res.data))


},[])

const handleDetails=(id)=>{
  console.log(data)
// data.map((e)=>((id==e.id)console.log(e))
  


  
}

return (
    <Box style={{"display":"flex"}}>
      <Box className="sidebar"></Box>
      <Box style={{"border":"2px solid red","width":"80%","padding":"0px 160px"} }>
      <Box style={{"fontSize":"27px","fontWeight":"500"}}>My Tasks |</Box>
      <br/>
      <Box style={{"display":"flex","flexWrap":"wrap",'gap':"5px"}}w={[300,400,800,900]} display={["flex","grid","flex"]} >
     
      <SelectTag text={"Client : All"} />
      <SelectTag text={"Project: All"}/>
      <SelectTag text={"Tag: All"}/>
      <SelectTag text={"Status: Open"}/>
      <SelectTag text={" Source:Inter.."} />
      </Box>
<br/>

      <Box style={{"display":"flex",'gap':"5px","border":"1px solid gray","w":"100%","borderRadius":"5px","padding":"10px"}} >
       <InitialFocus refresh={refresh}/>
      <Select placeholder="Sort : Project" backgroundColor={"gray.100"} size='120px' textAlign="center" w="140px" h="35px" borderColor="gray" borderRadius="7px" _hover={{backgroundColor:"#e2e6eb"}}> 
      <option value='Project'>Project</option>
      <option value='Estimate'>Estimate</option>
      <option value='Due Date'>Due Date</option>
      <option value='Last Update'>Last Update</option>
      <option value='Newer First'>Newer First</option>
      <option value='Older First'>Older First</option>
      </Select>
     
        <Input w="250px" placeholder='Search Here ' marginLeft={"50%"} h="35px"></Input>
       
        </Box>
        
        <Box style={{'gap':"1px","border":"1px solid green","w":"100%","borderRadius":"5px","padding":"10px",}} h="750" overflow={"auto"} w={[300,400,800,900,1210]}>
         {
          data.map((e)=>(
           
            <>
            <div className='taskdiv'onClick={()=>TaskDetail(e.id,data)} >
           <AiFillCheckCircle className='AiFillCheckCircle'/>
            <Text fontSize='md'>{e.taskname}</Text>
            </div>
           <hr></hr>
            </>
       
        
            
          ))
         }

        </Box>
    </Box>
    </Box>
  )
}

import { Box, Center, Heading, ListItem, UnorderedList, useToast , Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Text, Flex, } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import style from './AdminPanel.css'
import { Link, useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const [users , setUsers] = useState([]);
    const role = localStorage.getItem('role');
    const navigate = useNavigate();
    const toast = useToast();
    console.log('role:', role)
    if(role != "admin"){
        navigate('/auth/tracker');
        toast({
            title: 'Only for admin',
            // description: "We've created Time Entry for you.",
            status: 'warning',
            duration: 1500,
            isClosable: true,
            position: "top-left"
          })
    }

    const getData = async () => {
        return await axios
          .get("http://localhost:8080/admin/users")
          .then((res) =>{
            console.log('res.data:', res.data)
             setUsers( res.data.users)
          })
          .catch((err) => console.log(err.message));
      };
      console.log('users:', users)
      useEffect(() => {
          getData();
          if(role != "admin"){
            navigate('/auth/tracker');
            toast({
                title: 'Only for admin',
                // description: "We've created Time Entry for you.",
                status: 'warning',
                duration: 1500,
                isClosable: true,
                position: "top-left"
              })
        }else{

            toast({
                title: 'Welcome Admin',
                description: "You can Edit the users",
                status: 'success',
                duration: 1500,
                isClosable: true,
                position:'top-left',
              })
        }
    },[]);
    const handleDelete= async (id)=>{
      let {data} = await axios.delete(`http://localhost:8080/admin/users/${id}`);
      if(data){
        let updatedData = users.filter(user => user._id != id)
        setUsers(updatedData);
      }
        console.log('life_is_awesome:')
        // getData()
      }
  return (
    <Box backgroundImage='https://img.freepik.com/premium-vector/blackboard-background-design_87498-1211.jpg?w=740' backgroundRepeat='no-repeat' backgroundSize='cover' w='100vw' h='100vh'>
        <Center>
            <Heading size='xl' fontWeight='400'>
                {/* LIFE IS AESOME...() */}
                Admin Panel
            </Heading>
        </Center>
        <Box>
            {/* <Flex >
            </Flex> */}
                <Text textAlign='center'>All the Users</Text>       
            <TableContainer>
                <Table variant='striped' colorScheme='teal' size='sm' w='90vw' m='0 auto' border='2px solid #fff' borderRadius='20px'>
                    <Thead>
                        <Tr>
                            <Th color='pink' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Name</Th>
                            <Th color='pink' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' className='tableEmail' >E-mail</Th>
                            <Th color='pink' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Role</Th>
                            <Th color='pink' textAlign='center' fontSize='20px' p='10px 0' fontWeight='400' >Delete User</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                        //  data.length == 0 ? <Heading color='#fff' textAlign='center' fontWeight='400'>No users Yet </Heading>:
                            users.map(list => (
                                <Tr className='tableRow'>
                                    <Td textAlign='center' className='tableName'> {list.name} </Td>
                                    <Td textAlign='center' className='tableEmail'> {list.email} </Td>
                                    <Td textAlign='center' className='tableRole'> {list.role} </Td>
                                    <Td  textAlign='center' > {<DeleteIcon className='deleteIcone' cursor='pointer' onClick={ () => handleDelete(list._id) } />} </Td>
                                </Tr>
                            ))
                        }
                        {/* <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr> */}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    </Box>

  )
}

export default AdminPanel
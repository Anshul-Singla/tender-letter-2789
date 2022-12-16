import React, { useEffect } from 'react';
import logo from '../../logo/time_tracker_logo.png'
import { Box, Center, Flex,  Image, Text , FormControl,FormLabel,Input, Button, Heading, useToast,} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import {AiFillWindows , AiFillApple} from'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { userLogin } from '../redux/userRedux/login.action';
import { Link, useNavigate } from 'react-router-dom';


const initialState = {
    email:'',
    password:''
}
const Login = () => {
    const {Token , message} = useSelector(store => store.UserLogin.data);
    const [user , setUser] = useState(initialState);
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    console.log('message:',message)

    // if (Token || gAuth)
    if (Token) {
        navigate("/");
        toast({
          title: "You have loged IN",
          status: "success",
          duration: 1200,
          isClosable: true,
          position: "top",
        });
      }
    
      useEffect(() => {
        if (message == "You have Loged IN Successfully") {
            toast({
              title: message,
              status: "success",
              duration: 1200,
              isClosable: true,
              position: "top",
            })}
            // navigate("/login");
        else if (message == "Wrong Credential!")
          toast({
            title: "Wrong Credential!",
            status: "error",
            duration: 1200,
            isClosable: true,
            position: "top",
          });
        }, [message]);
    const handleChange = (e) => {
        const {name , value} = e.target;
        setUser(prev => ({
            ...prev , [name] : value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(user))
    }
    console.log('user:', user)
  return (
   <Box background='#F6F7F8' >
        <Flex flexDirection='column' justifyContent='center' alignItems='center' >
            <Box border='1px solid #d0d6db' w='30vw' borderRadius='0.375rem'p='20px' width={["100%","50%" , "30%"]} >
                <Box backgroundColor='#f2f5fc'>
                    <Flex m='0 2rem' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Link to='/'>
                            <Image src={logo} w={150} />
                        </Link>
                        <Text w='100%'fontSize='3xl' textAlign='center'> Log into Ttracker</Text>
                    </Flex>
                </Box>
                <Box>
                    <form onSubmit={handleSubmit}  >
                        <Box m='20px 0'>
                            <FormLabel>Email address</FormLabel>
                            <Input required onChange={handleChange} name='email' type='email' placeholder='johnsmith@mail.com'/>
                        </Box>
                        <Box m='20px 0'>
                            <FormLabel>Password</FormLabel>
                            <Input required onChange={handleChange} name='password'  type='password' placeholder='Enter your password'/>
                        </Box>
                        <Box m='20px 0 0 0'>
                            <Button w='100%' colorScheme='messenger' type='submit'>Log In</Button>
                        </Box>
                    </form>
                    <Center borderBottom='1px solid #d0d6db' position='relative' m='20px 0 0 0' p='20px 0'>
                        <Text position='absolute' zIndex='100' top='7' p='0 20px' backgroundColor='white' fontWeight='400'>or</Text>
                    </Center>
                </Box>
                <Box borderBottom='1px solid #d0d6db '>
                    <Flex gap='1rem' justifyContent='center' alignItems='center' border='1px solid #d0d6db'  borderRadius='0.375rem' m='20px 0'>
                        <FcGoogle/><Text>Log In with Google</Text>
                    </Flex>
                    <Flex gap='1rem' justifyContent='center' alignItems='center' border='1px solid #d0d6db'  borderRadius='0.375rem'  m='20px 0'>
                        <AiFillWindows/><Text>Log In with Microsoft</Text>
                    </Flex>
                    <Flex gap='1rem' justifyContent='center' alignItems='center' border='1px solid #d0d6db'  borderRadius='0.375rem'  m='20px 0'>
                        <AiFillApple/><Text>Log In with Apple</Text>
                    </Flex>
                </Box>
                <Flex justifyContent='space-between' alignItems='center' m='10px 0'>
                    <Text _hover={{
                        borderBottom:'1px solid #3070f0'
                    }} cursor='pointer' fontSize='sm' color='#3070f0'>Cant't Log In?</Text>
                    <Text _hover={{
                        borderBottom:'1px solid #3070f0'
                    }} cursor='pointer' fontSize='sm' color='#3070f0'>Sign Up</Text>
                </Flex>
            </Box>
        </Flex>
   </Box>
  )
}


export default Login
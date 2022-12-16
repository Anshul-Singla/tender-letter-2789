import React, { useEffect } from 'react';
import logo from '../../logo/time_tracker_logo.png'
import { Box, Center, Flex,  Image, Text , FormControl,FormLabel,Input, Button, Heading, useToast,} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import {AiFillWindows , AiFillApple} from'react-icons/ai';
import style from './signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { SignupApi } from '../redux/userRedux/signup.action';
import { Link, useNavigate } from 'react-router-dom';


const initialState = {
    name: "",
    email: "",
    password: "",
  };
  
const Signup = () => {
    const [user , setUser] = useState(initialState);
    const dispatch = useDispatch();
    const {message , status} = useSelector(store => store.UserSignup.data);
    const toast = useToast();
  const navigate = useNavigate();



    // console.log('store:', store)
    console.log('message:', message)
    useEffect(() => {
        if (message)
          if (message == "You have signup Successfully") {
            toast({
              title: message,
              status: "success",
              duration: 1200,
              isClosable: true,
              position: "top",
            });
            navigate("/login");
          } else if (message.message == "User already exist!") {
            toast({
              title: message.message,
              status: "error",
              duration: 1200,
              isClosable: true,
              position: "top",
            });
          }
      }, [message]);

      const handleChange = (e) => {
        let { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
      };
      console.log('user:', user)
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SignupApi(user));
        setUser("");
        e.target.reset();
      };
    return (
        <Box background='#F6F7F8' >
            <Flex justifyContent='center' alignItems='center' gap="1rem" >
                <Box border='1px solid #d0d6db' w='30vw' borderRadius='0.375rem'p='20px' backgroundColor='rgba(255, 255, 255, 0.843)' width={["100%",,"50%","80%"]} >
                    <Flex justifyContent='center' alignItems='center' gap='3rem'>
                        <Box>
                            <Box backgroundColor='#f2f5fc'>
                                <Flex m='0 auto' flexDirection='column' justifyContent='center' alignItems='center'>
                                    <Link to='/'>
                                        <Image src={logo} w={150} />
                                    </Link>
                                    <Text fontSize='3xl' >Create Your Account</Text>
                                </Flex>
                            </Box>
                        <Box>
                            <form onSubmit={handleSubmit} >
                                <Box m='20px 0'>
                                    <FormLabel>Name</FormLabel>
                                    <Input onChange={handleChange} name="name" type='text' placeholder='Jhon'/>
                                </Box>
                                <Box m='20px 0'>
                                    <FormLabel>Email address</FormLabel>
                                    <Input onChange={handleChange} name="email" type='email' placeholder='johnsmith@mail.com'/>
                                </Box>
                                <Box m='20px 0'>
                                    <FormLabel>Password</FormLabel>
                                    <Input onChange={handleChange} name="password" type='password' placeholder='Enter your password'/>
                                </Box>
                                <Box m='20px 0 0 0'>
                                    <Button w='100%' colorScheme='messenger' type='submit'>Sign Up</Button>
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
                        <Flex justifyContent='center' alignItems='center' m='10px 0'>Already have an account?
                            <Text _hover={{borderBottom:'1px solid #3070f0'}} cursor='pointer' fontSize='sm' color='#3070f0' m='0 10px'>Log In?</Text>
                        </Flex>
                        </Box>
                        <Box className='hideImage'>
                            <Image src='https://id.tmetric.com/images/side_image_register.svg' w='100%'/>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
       )
}

export default Signup
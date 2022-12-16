import React from 'react';
import logo from '../../logo/time_tracker_logo.png'
import { Box, Center, Flex,  Image, Text , FormControl,FormLabel,Input, Button, Heading,} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import {AiFillWindows , AiFillApple} from'react-icons/ai';

const Login = () => {
  return (
   <Box background='#F6F7F8' >
        <Flex flexDirection='column' justifyContent='center' alignItems='center' >
            <Box border='1px solid #d0d6db' w='30vw' borderRadius='0.375rem'p='20px' >
                <Box backgroundColor='#f2f5fc'>
                    <Flex m='0 4rem' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Image src={logo} w={150} />
                        <Text fontSize='3xl'> Log into Ttracker</Text>
                    </Flex>
                </Box>
                <Box>
                    <FormControl>
                        <Box m='20px 0'>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' placeholder='johnsmith@mail.com'/>
                        </Box>
                        <Box m='20px 0'>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder='Enter your password'/>
                        </Box>
                        <Box m='20px 0 0 0'>
                            <Button w='100%' colorScheme='messenger'>Log In</Button>
                        </Box>
                    </FormControl>
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
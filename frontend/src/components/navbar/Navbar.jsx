import React from 'react';
import { Box, Button, Flex, Heading,  Text } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import style from './Navbar.css'
import WhyTracker from './WhyTracker';
import AppsIntegrations from './AppsIntegrations';

const Navbar = () => {
    console.log('style:', style)
  return (
    <Box 
    border=".5px solid grey"
    padding='15px 0'
    position='relative'
    margin='0 auto'
    top={0}
    left={0}
    w="100vw"
    backgroundColor="#fff"
     >
        <Flex justifyContent='space-between' alignItems='center' w="90%" margin='0 auto'> 
            <Flex gap='1rem' justifyContent='center' alignItems='center' > 
                <Heading size='sm' cursor='pointer'><Text fontSize='4xl'as='b'>T</Text>Tracker</Heading>
                <Button colorScheme='gray' variant='solid' size='md' cursor='pointer'>
                    En
                </Button>
            </Flex>
            <Flex gap='1rem'>
                <Box cursor='pointer' id="click"> Why Ttracker <ChevronDownIcon />
                    <Box id='show'>
                        <WhyTracker/>
                    </Box>
                </Box>
                <Box cursor='pointer' id="click">Apps & Integrations <ChevronDownIcon />
                    <Box id='show'>
                        <AppsIntegrations/>
                    </Box>
                </Box>
                <Text cursor='pointer'>Pricing</Text>
                <Text cursor='pointer'>Support</Text>
                <Text cursor='pointer'>Blog</Text>
            </Flex>
            <Flex gap='1rem' justifyContent='center' alignItems='center'>
                <Heading fontSize='md' cursor='pointer' fontWeight='500'>Log In</Heading>
                <Box as='button' className='btnHover' fontWeight={500}>Sign Up</Box>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar
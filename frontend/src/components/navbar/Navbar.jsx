import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box 
    border=".5px solid grey"
    padding='15px 0'
    position='absolute'
    top={0}
    left={0}
    w="100vw"
    // backgroundColor="#fff"
     >
        {/* <Box>Navbar</Box> */}
        <Flex justifyContent='space-between' alignItems='center'> 
            <Flex gap='1rem' justifyContent='center' alignItems='center' > 
                <Heading size='sm' cursor='pointer'><Text fontSize='4xl'as='b'>T</Text>Tracker</Heading>
                <Button colorScheme='gray' variant='solid' size='md' cursor='pointer'>
                    En
                </Button>
            </Flex>
            <Flex gap='1rem'>
                <Flex cursor='pointer' >Why Ttracker</Flex>
                <Flex cursor='pointer' >Apps & Integrations  </Flex>
                <Text cursor='pointer'>Pricing</Text>
                <Text cursor='pointer'>Support</Text>
                <Text cursor='pointer'>Blog</Text>
            </Flex>
            <Flex gap='1rem' justifyContent='center' alignItems='center'>
                <Heading fontSize='xl' cursor='pointer' >Log In</Heading>
                <Button colorScheme='blue' cursor='pointer' variant='outline'>
                    Sign Up
                </Button>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar
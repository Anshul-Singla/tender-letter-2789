import { Box, Center, Flex, Heading, Text , Input, Button, Image } from '@chakra-ui/react';
import { EmailIcon} from '@chakra-ui/icons'
import React from 'react'
import Navbar from '../navbar/Navbar'

const Landing = () => {
  return (
    <Box>
        {/* <Heading>LIFE IS AWESOME...</Heading> */}
        <Navbar/>
        <Box className='middleName'>
           <FirstPart/>
        </Box>
        {/* <Box>LANDING PAGE</Box> */}
        {/* <Box>Footer</Box> */}
    </Box>
  )
}

const FirstPart = () => {
  return (
    <Box backgroundColor='#FBEFCA' padding='40px 30px' >
      {/* <Center>
        <Heading>LIFE IS AWESOME.... FirstPart</Heading>
      </Center> */}
      <Flex>
        <Box>
          <Heading size='3xl' noOfLines={3}    padding='20px 10px' margin='15px 0'>Empower your Team with Time Tracking</Heading>
          <Text fontSize='2xl' fontWeight='500' margin='15px 0'>TMetric streamlines your team work so you can focus on what matters</Text>
          <Flex alignItems='center' margin='20px 0'>
              <Box border='1px solid grey' padding={1} backgroundColor='#fff' borderRadius=' 3px 0 0 3px '>
                <EmailIcon color='blue.500'w={7} h={8} />
              </Box> 
              <Box border='1px solid grey' padding={2} backgroundColor='#fff' w='100%' borderRadius='0 3px 3px 0'>
                <Input placeholder='Enter your email address' variant='unstyled' />
              </Box>
          </Flex>
          <Flex  alignItems='center'justifyContent='space-evenly'>
            <Button w="40%" colorScheme='messenger'>Get Started</Button>
            <Text>Fully Functional 30-Day Trial</Text>
          </Flex>
        </Box>
        <Image  src='https://tmetric.com/media/nb3imgh0/img-home-heading.svg' />
      </Flex>
      

    </Box>
  )
}
export default Landing
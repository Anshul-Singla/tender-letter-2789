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
           <SecondPart/>
        </Box>
        {/* <Box>LANDING PAGE</Box> */}
        {/* <Box>Footer</Box> */}
    </Box>
  )
}

const FirstPart = () => {
  let imageLinks = [
    "https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png",
    "https://tmetric.com/media/w4mhgaul/time-tracking-software.png",
    "https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png",
    "https://tmetric.com/media/c2eewysw/g2_2022_main_page.png",
    "https://tmetric.com/media/cwnfzugf/icon-capterra-shortlist.png",
    "https://tmetric.com/media/psxgf3r4/icon-software-advice-frontrunners.png",
    "https://tmetric.com/media/jfxavlps/getapp-logotype.svg"
]
  return (
    <Box>
      <Box backgroundColor='#FBEFCA' padding='40px 25px' >
        {/* <Center>
          <Heading>LIFE IS AWESOME.... FirstPart</Heading>
        </Center> */}
        <Flex>
          <Box>
            <Heading size='3xl' noOfLines={3} padding='20px 10px' margin='15px 0'>Empower your Team with Time Tracking</Heading>
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
      <Box w="99vw" m='20px 0' paddingBottom='20px' borderBottom='1px solid #e2e7eb'>
        <Flex>
          {
            imageLinks.map(i => <Image src={i} w="9vw" margin="0 auto" />)
          }
        </Flex>
      </Box>
    </Box>
  )
}
const SecondPart = () => {
  let card = [
    {
      link :"https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg",
      name:"Time Tracking"
    },
    {
      link:"https://tmetric.com/media/1niddz51/icon-project-blue.svg",
      name:"Project Management"
    },
    {
      link:"https://tmetric.com/media/2gxihhdu/icon-team-blue.svg",
      name:"Team Management"
    },
    {
      link:"https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg",
      name:"Billing & Invoicing"
    },
    {
      link:"https://tmetric.com/media/yoblhiut/icon-reports-blue.svg",
      name:"Reporting"
    },
    {
      link:"https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg",
      name:"Time Off"
    }
  ]
  return (
    <Box m="50px 0">
      <Center>
        <Box w="60vw" textAlign='center'>
          <Heading size='3xl' noOfLines={2} fontWeight='600' >Best time tracking features for your business</Heading>
        </Box>
      </Center>
      <Flex>
        <Image w={["1000px","800px"]} src='https://tmetric.com/media/1kxfndjp/img-advantages.svg' />
        <Flex flexDirection='column' >
        {
          card.map(c => 
            // console.log('c:', c.name)
          <SecondPartCard key={c.link} link={c.link} name={c.name} />
           )
        }
        </Flex>
      </Flex>
    </Box>
  )
}
const SecondPartCard = ({link , name}) => {
  return(
    <Box>
      <Flex>
        <Image src={link} />
        <Heading> {name} </Heading>
      </Flex>
    </Box>
  )

}
export default Landing
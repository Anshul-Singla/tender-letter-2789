import { Box, Center, Flex, Heading, Text , Input, Button, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { EmailIcon} from '@chakra-ui/icons';
import React from 'react';
import Navbar from '../navbar/Navbar';
import style from './Landing.css'

const Landing = () => {
  return (
    <Box>
        {/* <Heading>LIFE IS AWESOME...</Heading> */}
        <Navbar/>
        <Box className='middleName'>
           <FirstPart/>
           <SecondPart/>
           <ThirdPart/>
           <FourtPart/>
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
      <Center p='20px 0' m='30px 0'>
        <Box w="60vw" textAlign='center'>
          <Heading size='3xl' noOfLines={2} fontWeight='700' >Best time tracking features for your business</Heading>
        </Box>
      </Center>
      <Flex justifyContent='space-evenly'>
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
    <Box m='10px 0' className='secondPartCard'>
      <Flex p='10px 50px 10px 10px' borderRadius='10px' border='1px solid #e2e7eb' gap='2rem' alignItems='center' >
        <Image src={link} />
        <Heading size='md' fontWeight='500'> {name} </Heading>
      </Flex>
    </Box>
  )
}
const ThirdPart = () => {
  const card =[ {
    heading:"Take effective control of working time",
    list :[
      "timekeeping","sites and apps monitoring","activity tracking","screenshots capturing",
      "task management","50+ integrations","work schedule"
    ],
    link:"https://tmetric.com/media/kssowlxe/img-activity-cases.svg",
    backgroundColor:'#f6f7f8',
    flexDirection:'row'
  },
  {
    heading:"Achieve high profitability by using time tracker",
    list:[
      "project management","project budgeting",'billing and invoicing',"accurate payroll","accurate payroll"
    ],
    link:"https://tmetric.com/media/lltfuaaz/img-report-cases-svg.svg",
    flexDirection:'row-reverse'
  },
  {
    heading:"Improve attendance with time off tracking software",
    list:[
      "flexible time off policy","time off requests management","time off calendar","pto calculations",
    ],
    link:"https://tmetric.com/media/mlzbtxv5/time-off-calendar-case.svg",
    flexDirection:'row'
  }
]
  return (
    <Box>
      {
        card.map(c => <ThirdPartCard  heading={c.heading} list={c.list} link={c.link}   />)
      }
    </Box>
  )
}
const ThirdPartCard = ({heading , list , link ,backgroundColor , flexDirection}) => {
  return(
  <Box 
  
  // backgroundColor={`${backgroundColor}`}
  >
    <Flex w='90vw' m='0 auto' alignItems='center' flexDirection={flexDirection}>
      <Box>
        <Heading textAlign='center' m='20px 0'>{heading}</Heading>
        <UnorderedList>
          {
            list.map(list => <ListItem fontSize='xl' m='5px 0'> {list} </ListItem> )
          }
        </UnorderedList>
        <Center>
          <Button colorScheme='messenger' m='10px 0'> Start Free Trial</Button>
        </Center>
      </Box>
      <Box>
        <Image src={link} width='100%'/>
      </Box>
    </Flex>
  </Box>
  )
}
const FourtPart = () => {
  return (
    <Box>
      <Heading>LIFE IS AWESOME...</Heading>
    </Box>
  )
}
const FourtPartCard = () => {
  
}
export default Landing
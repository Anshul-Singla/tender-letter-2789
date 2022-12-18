import { Box, Center, Flex, Heading, Text , Input, Button, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { EmailIcon} from '@chakra-ui/icons';
import React from 'react';
import Navbar from '../navbar/Navbar';
import {ArrowForwardIcon } from '@chakra-ui/icons';
import style from './Landing.css'
import Footer from '../pricing_page/Footer';
import Hamburger from '../Hamburger/Hamburger';
import NavbarResponsive from '../navbar/NavbarResponsive';

const Landing = () => {
  return (
    <Box overflowX='hidden'>
        {/* <Heading>LIFE IS AWESOME...</Heading> */}
        <Navbar /> 
        <NavbarResponsive/>
        <Box className='middleName' >
           <FirstPart/>
           <SecondPart/>
           <ThirdPart/>
           <FourtPart/>
           <FifthPart/>
           <SixthPart/>
           <Footer/>
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
      <Box backgroundColor='#FBEFCA' padding='40px 25px' w='99vw' >
        {/* <Center>
          <Heading>LIFE IS AWESOME.... FirstPart</Heading>
        </Center> */}
        <Flex className='firstPartFlex' >
          <Box  className='firstPartBox' >
            <Heading className='firstPartBoxHeading' size='3xl'  padding='20px 10px' margin='15px 0'>Empower your Team with Time Tracking</Heading>
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
          <Image  src='https://tmetric.com/media/nb3imgh0/img-home-heading.svg' m='20px auto' w={["100%" , "60%"]} />
        </Flex>
      </Box>
      <Box w="98vw" m='20px 0' paddingBottom='20px' borderBottom='1px solid #e2e7eb'>
        <Flex flexWrap='wrap'>
          {
            imageLinks.map(i => <Image src={i} w='150px' m='20px auto' />)
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
          <Heading size='3xl'  fontWeight='600' >Best time tracking features for your business</Heading>
        </Box>
      </Center>
      <Flex justifyContent='space-evenly' className='firstPartFlex' gap='1rem'>
        <Image w={["100%" , "65%"]} m='20px auto' src='https://tmetric.com/media/1kxfndjp/img-advantages.svg' />
        <Flex flexDirection='column' w='90%' m='0 auto' >
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
    <Flex w='90vw' m='0 auto' alignItems='center' flexDirection={flexDirection} className='firstPartFlex'>
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
  let cardLinks1 =[ 
    'https://tmetric.com/media/cshbmvwf/logo-integration-gsuite.svg',
    "https://tmetric.com/media/fnbggshs/logo-integration-msoffice.svg",
    "https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg",
    "https://tmetric.com/media/smflyk5w/logo-integration-github.svg",
    "https://tmetric.com/media/kbrcntmi/logo-integration-excel.svg",
    "https://tmetric.com/media/4aeci1fh/logo-integration-asana.svg",
    "https://tmetric.com/media/caxbzjss/logo-integration-jira.svg",
    "https://tmetric.com/media/dw2nwjwv/logo-integration-gitlab.svg",
    "https://tmetric.com/media/me5ih5eu/logo-integration-gdocs.svg",
    "https://tmetric.com/media/0bzmfrlf/logo-integration-trello.svg",
    "https://tmetric.com/media/sdaj41fi/logo-integration-redmine.svg",
    "https://tmetric.com/media/1xedbfav/logo-integration-zendesk.svg",
    "https://tmetric.com/media/n3dmgi1p/logo-integration-wrike.svg"
  ]
  return (
    <Box>
      <Flex flexDirection='column' justifyContent='center' alignItems='center'gap='2rem' m='30px 0' >
        <Heading size='2xl' maxWidth='60%' textAlign='center'>Integrate time tracker tool with 50+ popular services</Heading>
        <Text fontSize='2xl' w='90%' m='0 auto'>TMetric integrates with dozens of services, which lets you measure progress and activity in any tool you use.</Text>
        <Flex gap='3rem'  justifyContent='center' alignItems='center' className='firstPartFlex'>
          <Button colorScheme='messenger'>
            Start Free Trial
          </Button>
          <Box>
            <Text fontSize='xl' color='#3070f0'>View All Integrations <ArrowForwardIcon/> </Text>
          </Box>
        </Flex>
      </Flex>
      <Box w={["100%"]} m='0 auto' >
        <Flex gap='1rem' m='20px 0' flexWrap='wrap' justifyContent='center' alignItems='center'>
          {
            cardLinks1.map(l => <FourtPartCard link={l}  /> )
          }
        </Flex>
        {/* <Flex  gap='3rem' m='20px 0' >
          {
            cardLinks2.map(l => <FourtPartCard link={l}  /> )
          } 
        </Flex>*/}
      </Box>
    </Box>
  )
}
const FourtPartCard = ({link}) => {
  return (
    <Box border='1px solid  #e2e7eb' padding="20px" borderRadius='10px' className='fourthPartCard'>
        <Image src={link} w={['120px']} />
    </Box>
  )
}
const FifthPart = () =>{
  return (
    <Box backgroundColor='#fff2cc' p='10px 0 30px 0' >
      {/* <Heading>LIFE IS AWESOME...</Heading> */}
      <Flex flexDirection='column' justifyContent='center' alignItems='center' gap='1rem' >
        <Heading   m='20px 0 0 0 ' fontWeight='500' >Read Hundreds of Reviews</Heading>
        <Image src='https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg' w={[ "70%",350]} m='20px 0' />
        <Heading size='2xl' fontWeight='500'>4.5 Customer Rating</Heading>
        <Heading color='#3070f0'>242 Reviews</Heading>
      </Flex>
    </Box>
  )
}
const SixthPart = () => {
  const sixthPartCard = [
    {
      link:'https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg',
      text:" The most straightforward time tracking app"
    },
    {
      link:'https://tmetric.com/media/opdfdo3l/icon-platforms.svg',
      text:'Available on all platforms: macOS, Windows, Linux, iOS, and Android'
    },
    {
      link:"https://tmetric.com/media/igkmpmix/icon-freetrial.svg",
      text:"Free plan with basic time tracking for a team up to 5"
    },
    {
      link:"https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg",
      text:"Reasonable price makes it affordable for anyone"
    },
    {
      link:"https://tmetric.com/media/0uyowzzu/icon-multilang.svg",
      text:"Multilanguage solution"
    }
  ]
  return (
    <Box m='60px 0'>
      <Heading size='2xl' textAlign='center' fontWeight='500' margin='5rem 0 30px 0'>Why choose TMetric?</Heading>
      <Flex width='90vw' m='0 auto' gap='2rem' flexWrap='wrap'>
        {
          sixthPartCard.map( c => <SixthPartCard link={c.link} text={c.text}/> )
        }
      </Flex>
    </Box>
  )
}
const SixthPartCard = ({link , text}) => {
  return (
    <Box border='1px solid #e2e7eb' w={["100%","50%",'212px']} p='40px 10px' m='0 auto' borderRadius='15px' >
      <Image src={link}/>
      <Text fontWeight='600' m='30px 0'> {text} </Text>
    </Box>
  )
}
export default Landing
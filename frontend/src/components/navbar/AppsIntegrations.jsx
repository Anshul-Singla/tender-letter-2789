import React from 'react';
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import {ArrowForwardIcon } from '@chakra-ui/icons';

import style from './Navbar.css'


const AppsIntegrations = () => {
  return (
    <Box 
    // border='2px solid'
    backgroundColor="#fff"
    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    
    >
        {/* <Heading>LIFE IS AWESOME....</Heading> */}
        <Flex justifyContent='space-around' padding='10px 30px'>
            <Box w='40%'>
                <Heading color="#A4A9B2" size='md' marginBottom='18px' fontWeight='500'  >Apps</Heading>
                <Box w = '200px'>
                    <Heading color="#212529" marginBottom='8px' size='sm' >Browser Extensions</Heading>
                    <Text color="#4C5157" fontSize='15px' margin='0 0 15px 0' >Simple time tracking extension which helps you be more productive</Text>
                </Box>
                <Box w = '200px'>
                    <Heading  color="#212529" size='sm'>Mobile apps</Heading>
                    <Text color="#4C5157" fontSize='15px' margin='0 0 15px 0' >Install TMetric app to your phone or a tablet device. Android and iOS platforms are supported.</Text>
                </Box>
                <Box w = '200px'>
                    <Heading  color="#212529" size='sm'>Desktop apps</Heading>
                    <Text color="#4C5157" fontSize='15px' margin='0 0 15px 0' >Download TMetric app for your desktop computer or a laptop</Text>
                </Box>
            </Box>
            <Box w='60%'>
                <Heading color="#A4A9B2" size='md' marginBottom='18px' fontWeight='500' >Integrations</Heading>
                <Flex justifyContent='space-between' alignItems='center' margin='20px 0'>
                    <Box w = '250px' >
                        <Flex gap='1rem'className='integrationCompanies'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/rejbvkxk/icon-jira-small.svg' />
                            <Box>
                                <Heading size='sm' className='integrationCompaniesHeading' >Jira</Heading>
                                <Text>Time tracking on every task in one click</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem' className='integrationCompanies'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/u4kphldq/icon-asana-small.svg' />
                            <Box>
                                <Heading size='sm' className='integrationCompaniesHeading' >Asana</Heading>
                                <Text>Start to accurately track time of tasks</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem' className='integrationCompanies'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/jduhrdq5/icon-todoist-small.svg' />
                            <Box>
                                <Heading size='sm' className='integrationCompaniesHeading' >Todoist</Heading>
                                <Text>Track time of your lists and tasks</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Box w = '250px'>
                        <Flex gap='1rem' className='integrationCompanies'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/uq4dqcrf/icon-ms-office-small.svg' />
                            <Box>
                                <Heading size='sm' className='integrationCompaniesHeading' >MS Office</Heading>
                                <Text>Get plugin for tracking time in MS Office Online</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem' className='integrationCompanies'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/nfqj22co/icon-github-small.svg' />
                            <Box>
                                <Heading size='sm' className='integrationCompaniesHeading' >GitHub</Heading>
                                <Text>Track time spent working on an issue with one mouse click</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem' className='integrationCompanies'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/l1cply4y/icon-freshdesk-small.svg' />
                            <Box>
                                <Heading size='sm' className='integrationCompaniesHeading' >Freshdesk</Heading>
                                <Text>Track time spent on every support ticket</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Box>
                    <Text fontSize='xl' color='#3070f0'>View All Integrations <ArrowForwardIcon/> </Text>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default AppsIntegrations
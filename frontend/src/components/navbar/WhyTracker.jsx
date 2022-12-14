import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import {ArrowForwardIcon } from '@chakra-ui/icons';

const WhyTracker = () => {
  return (
    <Box 
    // border='2px solid'
    backgroundColor="#fff"
    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
        {/* <Heading>LIFE IS AWESOME....</Heading> */}
        <Flex justifyContent='space-around' padding='10px 30px'>
            <Box w='40%'>
                <Heading color="#A4A9B2" size='md' marginBottom='18px' >Overview</Heading>
                <Box w = '200px'>
                    <Heading color="#212529" marginBottom='8px' size='sm' >Industry</Heading>
                    <Text color="#4C5157" fontSize='15px' margin='0 0 15px 0' >Made for all industries. Check benefits of usage</Text>
                </Box>
                <Box w = '200px'>
                    <Heading  color="#212529" size='sm'>Customers</Heading>
                    <Text color="#4C5157" fontSize='15px' margin='0 0 15px 0' >See why business use TMetric for time tracking and workflow management</Text>
                </Box>
            </Box>
            <Box w='60%' margin='20px 0'>
                <Heading color="#A4A9B2" size='md' marginBottom='18px' >Features</Heading>
                <Flex justifyContent='space-between' alignItems='center' margin='20px 0'>
                    <Box w = '250px'>
                        <Flex gap='1rem'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg' />
                            <Box>
                                <Heading size='sm'>Time Tracking</Heading>
                                <Text>Capture and control every task you work on</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/5r1l1s4g/icon-invoice-gray.svg' />
                            <Box>
                                <Heading size='sm'>Billing & Invoicing</Heading>
                                <Text>Set billable rates and easily create invoices</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/kqgpqtvh/icon-project-gray.svg' />
                            <Box>
                                <Heading size='sm'>Project Management</Heading>
                                <Text>Create projects, set rates and budgets</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Box w = '250px'>
                        <Flex gap='1rem'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg' />
                            <Box>
                                <Heading size='sm'>Team Management</Heading>
                                <Text>Monitor productivity and activity level of your team</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/g3jc0dsg/icon-reports-gray.svg' />
                            <Box>
                                <Heading size='sm'>Task Management</Heading>
                                <Text>Manage tasks and set up an effective workflow</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box w = '250px'>
                        <Flex gap='1rem'>
                            <Image alignSelf='flex-start' src='https://tmetric.com/media/bxylkc2s/icon-time-off-gray.svg' />
                            <Box>
                                <Heading size='sm'>Time Off</Heading>
                                <Text>Simply ask for days off and control teams attendance</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Box margin='20px 0'>
                    <Text fontSize='xl' color='#3070f0' >View All Integrations <ArrowForwardIcon/> </Text>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default WhyTracker
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../navbar/Navbar'

const Landing = () => {
  return (
    <Box>
        <Heading>LIFE IS AWESOME...</Heading>
        <Navbar/>
        <Box>LANDING PAGE</Box>
        <Box>Footer</Box>
    </Box>
  )
}

export default Landing
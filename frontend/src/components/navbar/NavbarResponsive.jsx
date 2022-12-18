import React from 'react';
import { Box, Flex , Image,} from '@chakra-ui/react';
import logo from '../../logo/time_tracker_logo.png';
import Hamburger from '../Hamburger/Hamburger';

const NavbarResponsive = () => {
  return (
    <Box backgroundColor='#fff' className='navbarResponsive'>
        <Flex justifyContent='space-between' alignItems='center' w='90vw' m='0 auto' p='10px 0'>
            <Box>
                <Image src={logo} w='90px'/>
            </Box>
            <Box>
                <Hamburger/>
            </Box>
        </Flex>
    </Box>
  )
}

export default NavbarResponsive
import React,{ useContext } from "react";
// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import { Select } from '@chakra-ui/react'
import {UserContext} from 'contexts/UserContext'


// FUNCTIONS

function SidebarContent(props) {
  const {clients, activeClient, selectClient} = useContext(UserContext)
  const { routes } = props;
  

  const handleChangeClient = (e) => {
    selectClient(e.target.value)
  }
  console.log('activeClient',activeClient )
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' px="16px" borderRadius='30px'>
      <Brand />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
        {clients.length>0 && <Select defaultValue={activeClient} onChange={handleChangeClient} placeholder='Select option'>
          {clients.map( client => <option value={client.name}>{client.name}</option>)}
        
        </Select>}
      </Stack>

      
    </Flex>
  );
}

export default SidebarContent;

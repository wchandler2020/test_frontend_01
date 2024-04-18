import React, { useContext } from "react";
// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import { Select } from "@chakra-ui/react";
import { UserContext } from "contexts/UserContext";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa6";

// FUNCTIONS

function SidebarContent(props) {
  const { clients, activeClient, selectClient } = useContext(UserContext);
  const { routes } = props;

  const handleChangeClient = (e) => {
    selectClient(e.target.value);
  };
  console.log("activeClient", activeClient);
  // SIDEBAR
  return (
    <Flex
      direction="column"
      height="100%"
      pt="25px"
      px="16px"
      borderRadius="30px"
    >
      <Brand />
      <Stack direction="column" mb="auto" mt="8px" height='90%' display='flex' alignContent='center'>
        <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
        <Box style={{display: clients.length == 1 ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center',  width: '100%'}} >
          {clients.length > 0 && (
            <Select
              defaultValue={activeClient}
              onChange={handleChangeClient}
              placeholder="Select option"
            >
              {clients.map((client) => (
                <option value={client.name}>{client.name}</option>
              ))}
            </Select>
          )}
        </Box>
        <Box height='100%' width='100%' display='flex' alignItems='flex-end' justifyContent='center'>
              <Box marginBottom='1.5rem' display='flex' justifyContent='center' alignItems='center' flexDirection='column' width='45%'> 
                  <h3 className='font-light text-base'>Find Jorie AI On</h3>
                  <div style={{width: '70%', borderBottom: '1px solid #888888', marginBottom: '12px', opacity: '.3'}}></div>
                  <Box display='flex' justifyContent='space-between' width='100%'>
                      <a href=""><ImFacebook size={20} /></a>
                      <a href=""><BsInstagram size={20} /></a>
                      <a href=""><FaTwitter size={20} /></a>
                      <a href=""><FaLinkedinIn size={20} /></a>
                  </Box>
              </Box>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;

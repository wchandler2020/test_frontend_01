import React from "react";
// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import ArBucketsChart from "components/charts/ArBucketsChart";

export default function ArBuckets(props) {
  const { ...rest } = props;
  console.log('props 1', props.chartData)
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.600'
              fontSize='md'
              fontWeight='600'>
              AR Buckets
            </Text>
          </Flex>
          <Flex align='end'>
            <Text
              color={textColor}
              fontSize='34px'
              fontWeight='700'
              lineHeight='100%'>
              
            </Text>
            <Text
              ms='6px'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
            </Text>
          </Flex>
        </Flex>
        <Flex align='center'>
          <Icon as={RiArrowUpSFill} color='green.500' />
          <Text color='green.500' fontSize='sm' fontWeight='700'>
          </Text>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <ArBucketsChart chartData={props.chartData} />
      </Box>
    </Card>
  );
}
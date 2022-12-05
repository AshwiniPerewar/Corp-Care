import React from "react";

import {
  Bar,
  BarChart,
 Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const Earning = () => 
{
  const data = [
    {
      day: "S",
      expenditure: 21,
      earning: 30,
    },
    {
      day: "M",
      expenditure: 21,
      earning: 30,
    },
    {
      day: "T",
      expenditure: 21,
      earning: 30,
    },
    {
      day: "W",
      expenditure: 21,
      earning: 30,
    },
    {
      day: "T",
      expenditure: 21,
      earning: 30,
    },
    {
      day: "F",
      expenditure: 21,
      earning: 30,
    },
    {
      day: "S",
      expenditure: 21,
      earning: 30,
    },
  ];

  return (
    <Box
    mt="10px"
    borderRadius="10px"
    w="300px"
    boxShadow="xl" 
    textAlign={"center"}
    >
      <Stack mb="10px">
        <Text color="gray.400" mt="10px" fontSize="12px">Saved this month</Text>
        <Heading size="xl" fontWeight="700">$12,281</Heading>
         <Box>
         <Text color="gray.400" fontSize="12px">Your payment will be</Text>
        <Text color="gray.400" fontSize="12px">updated by the system</Text>
         </Box>
      </Stack>
      <BarChart width={260} height={200} data={data}  ml="-10px">
        <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize="14px" color="grey"/>
        <YAxis borderTopRadius="10px" axisLine={false} tickLine={false}   fontSize="14px" color="#bcbcbc"/>
        <Tooltip />

        <Bar dataKey="expenditure" fill="#00d1ff" barSize={4} />
        <Bar dataKey="earning" fill="#0038ff" barSize={4} />
      </BarChart>
    </Box>
  );
};


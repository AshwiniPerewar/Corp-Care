import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
   
  },
};

const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Expenditure',
      data: labels.map(() => faker.datatype.number({ min: 20, max: 25 })),
      backgroundColor: 'rgba(75,192,192,1)',
      pointBorderWidth: 1
    },
    {
      label: 'Earning',
      data: labels.map(() => faker.datatype.number({ min: 30, max: 30 })),
      backgroundColor: 'blue',
    },
  ],
};


export function BarChart() {
  return(
    <Box textAlign={"center"} backgroundColor="white" w="340px" h={"inherit"} mt={4} p={2} boxShadow={"xl"}>
      <Text fontSize={"xs"} >Your payment will be updated by the system.</Text>
      <Heading fontSize={"2xl"}>₹12.690</Heading>
  <Bar options={options} data={data}/>
  </Box>
  )
}

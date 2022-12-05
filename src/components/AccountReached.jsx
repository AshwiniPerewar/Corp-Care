import { Box, Flex, Text } from "@chakra-ui/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { title: "Nov 1", price: 30 },
  { title: "Nov 4", price: 20 },
  { title: "Nov 8", price: 33 },
  { title: "Nov 12", price: 10 },
  { title: "Nov 16", price: 40 },
];

export const AccountReached = () => 
{
  return (
    <Box p={3} mt="10px">
       <Flex justify={"space-around"} color="gray.400">
        <Text >Day</Text>
        <Text>Week</Text>
        <Text color="black">Month</Text>
        <Text>Year</Text>
      </Flex>
      <AreaChart
        width={280}
        height={200}
        data={data}
       margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8084ff " stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8084ff " stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8084ff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8084ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="title" axisLine={false} tickLine={false} fontSize="14px" color="grey"/>
        <YAxis axisLine={false} hide={true} tickLine={false} fontSize="14px" color="grey" />

        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8084ff "
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </Box>
  );
};


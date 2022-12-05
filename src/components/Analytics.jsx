import { Box, Button,  Flex, Text } from "@chakra-ui/react";
import { BiDownArrowAlt } from "react-icons/bi";
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

const Analytics = () => {
  return (
    <Box  ml="0" p={4}>
      <Flex justifyContent={"space-between"}>
      <Button bgColor="black" color="white" h="30px" borderRadius={"30px"}>
            Income <BiDownArrowAlt fontSize="25px" fontWeight="bold" />
          </Button>
          <Flex justifyContent={"space-between"}>
       <Text>Sort by</Text>
          <Button bgColor="white"  boxShadow={"md"} h="25px" borderRadius={"30px"}>
            Month <BiDownArrowAlt fontSize="20px" fontWeight="bold"/>
          </Button>
        </Flex>
      </Flex>
      <AreaChart
        width={400}
        height={200}
        data={data}
        margin={{ top: 30, right: 60, left: -30, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="title" axisLine={false} tickLine={false} fontSize="14px" color="grey"/>
        <YAxis axisLine={false} tickLine={false} fontSize="14px" color="grey"/>

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

export default Analytics;
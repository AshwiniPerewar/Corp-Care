import { Box,  Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Transactions = () => {

    const data=[
        {image:"https://cdn-icons-png.flaticon.com/512/2761/2761118.png",title:"Jio Mobile App",date:"27 Apr 2022 4:45AM", price:"$15"},
        {image:"https://cdn-icons-png.flaticon.com/512/2761/2761118.png",title:"Amazon",date:"27 May 2022 4:45AM", price:"$150"},
        {image:"https://cdn-icons-png.flaticon.com/512/2761/2761118.png",title:"Flipkart",date:"2 Apr 2022 8:45AM", price:"$165"},
        {image:"https://cdn-icons-png.flaticon.com/512/2761/2761118.png",title:"Jio Mobile App",date:"27 Apr 2022 4:45AM", price:"$85"}    
    ]

    console.log(data)

  return (
       <Box w="240px" bgColor="white" m="auto">
            {data.map((el)=>
            (
                <Box mt="10px">
                    <Flex justifyContent={"space-between"} gap="10px">
                        <Image src={el.image} w="40px" h="30px"></Image>
                        <Flex direction={"column"}>
                            <Heading fontSize={"xs"}>{el.title}</Heading>
                            <Text fontSize={"xs"}>{el.date}</Text>
                            </Flex>
                        <Heading fontSize={"xs"}>{el.price}</Heading>
                    </Flex>
                </Box>
            ))}
        </Box>
   
  )
}

export default Transactions
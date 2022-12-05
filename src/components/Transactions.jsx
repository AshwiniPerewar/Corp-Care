import { Box,  Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Transactions = () => {

    const data=[
        {image:"https://elements-cover-images-0.imgix.net/f5996f56-6efb-4d44-8e20-2c66eadba54b?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=a0f3183d45d16fb7a048ecd3ddd03236",title:"Jiko Mobile App",date:"12 Nov 2021 4:45AM", price:"$15"},
        {image:"https://elements-cover-images-0.imgix.net/f5996f56-6efb-4d44-8e20-2c66eadba54b?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=a0f3183d45d16fb7a048ecd3ddd03236",title:"Jiko Mobile App",date:"12 Nov 2021 4:45AM", price:"$15"},
        {image:"https://elements-cover-images-0.imgix.net/f5996f56-6efb-4d44-8e20-2c66eadba54b?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=a0f3183d45d16fb7a048ecd3ddd03236",title:"Jiko Mobile App",date:"12 Nov 2021 4:45AM", price:"$15"},
        {image:"https://elements-cover-images-0.imgix.net/f5996f56-6efb-4d44-8e20-2c66eadba54b?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=a0f3183d45d16fb7a048ecd3ddd03236",title:"Jiko Mobile App",date:"12 Nov 2021 4:45AM", price:"$15"},
        ]

    console.log(data)

  return (
       <Box w="260px" bgColor="white" p={6}>
        <Flex gap="20px" direction="column">
            {data.map((el)=>
            (
               <HStack justifyContent={"space-between"}>
                        <HStack justifyContent={"space-between"}>
                            <Image src={el.image} w="50px" h="50px" borderRadius={10}></Image>
                        <Flex direction={"column"} >
                            <Heading fontSize={"xs"}>{el.title}</Heading>
                            <Text fontSize={"10px"} color="#c5c5c5">{el.date}</Text>
                            </Flex>
                            </HStack>
                        <Heading  fontSize={"xs"}>{el.price}</Heading>
                    </HStack>
           
            ))}
            </Flex>
        </Box>
   
  )
}

export default Transactions
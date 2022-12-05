import { Button,  Heading, Image, Container, Box, Flex} from '@chakra-ui/react'
import React from 'react'
const Reminder = () => {
  return (
    <div><Container maxW='200px' h={"280px"} bgColor={"#0038ff"} borderRadius={10} mt={3}  color="white" p={5}>
    <Flex direction={"column"} gap="30px">
        <Heading size='xs' textAlign={"center"} >Agency Design Kit</Heading>
         <Box  h={"70px"} w={"70px"} m="auto" bgColor="white" borderRadius={"15px"}>
         <Image  w="30px" h="40px" margin={"auto"} mt={"20%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3HbDJaK8IYfTRt4g9BaViUzjcryxhVzf4u75A1sW&s"/>
         </Box>
        <Heading size='xs' textAlign={"center"} >Will be published Nov 25, 2022</Heading>
        
      </Flex>
      <Button h={8} w={"90%"} variant='solid' fontSize={"12px"} fontWeight={"bold"} color='black' bgColor={"white"} mt={3} ml={"5%"}>
          Set As Reminder
        </Button>
      
   </Container></div>
  )
}

export default Reminder
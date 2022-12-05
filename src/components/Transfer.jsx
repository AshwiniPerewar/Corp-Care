import {
  Button,
  Stack,
  Heading,
  Image,
  Container,
  Box,
  Flex,
  Text,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
const Transfer = () => {
  const persons = [
    "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    "data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiN8CfgAcagsL3x2hwLXAUfsO4T80s3xRgVEAMBlTctE6b7TbO0X94jvXjdQ8RDYFRqz4&usqp=CAU",
    "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
    "data:image/png;base64,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",
  ];

  return (
    <div>
      <Container
        maxW="300px"
        h={"200px"}
        borderRadius={10}
        mt={3}
        bgColor="white"
        boxShadow={"xl"}
      >
        <Stack spacing="2" w={"90%"} m={"auto"} p={3}>
          <Text fontSize="14px" textAlign={"center"}>
            Transfer to your team
          </Text>
          <Flex justify={"space-between"} mt="40px" pb="20px">
            <Flex>
              <Heading size={"xl"} color="grey">
                $
              </Heading>
              <Heading size="xl" textAlign={"center"}>
                450
              </Heading>
            </Flex>{" "}
            <Button borderRadius={"10px"} bgColor="blue" color="white">
              Transfer
            </Button>
          </Flex>
          <Divider/>
        </Stack>
        <Flex ml="20px" mt="10px">
          {persons.map((el) => (
            <Avatar size={"sm"} mr="-10px" src={el} />
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Transfer;

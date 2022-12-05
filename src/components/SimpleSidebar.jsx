import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
 Text,
  useDisclosure,
  Heading,
  Input,
  Divider,
} from "@chakra-ui/react";
import { GiWallet, GiTakeMyMoney, GiHelp } from "react-icons/gi";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineAnalytics,
} from "react-icons/md";
import { MdSms } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiFillSchedule, AiFillSetting } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import Analytics from "./Analytics";
import Reminder from "./Reminder";
import Transactions from "./Transactions";
import Transfer from "./Transfer";
import { Earning } from "./Earning";
import { AccountReached } from "./AccountReached";
import { VscCommentDiscussion } from "react-icons/vsc";
import { RiFileList2Fill } from "react-icons/ri";

 
const LinkItems = [
  { name: "Overview", icon: GiWallet },
  { name: "Products", icon: MdOutlineProductionQuantityLimits },
  { name: "Analytics", icon: MdOutlineAnalytics },
  { name: "Schedule", icon: AiFillSchedule },
  { name: "Payout", icon: GiTakeMyMoney },
  { name: "Statements", icon: RiFileList2Fill },
];
const LinkItems2 = [
  { name: "Help", icon: GiHelp },
  { name: "Community", icon: VscCommentDiscussion },
  { name: "Settings", icon: AiFillSetting },
  { name: "Logout", icon: GrLogout },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={"white"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <HStack>
        <Flex
          ml="20%"
          direction="column"
          gap="10px"
          borderRightWidth="1px"
          p={3}
          borderRightColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Flex gap="20px">
            <Box>
              <Heading fontSize={"md"}>Analytics</Heading>
              <Box
                bgColor={"white"}
                w="400px"
                mt={3}
                p={2}
                boxShadow={"xl"}
                borderRadius="10px"
              >
                <Analytics />
              </Box>
            </Box>
            <Box>
              <Heading fontSize={"md"}>Reminder</Heading>
              <Reminder />
            </Box>
          </Flex>
          <Flex gap="20px" mt="30px">
            <Box>
              <Heading fontSize={"md"}>Recent Transactions</Heading>
              <Box
                bgColor={"white.100"}
                w="280px"
                mt={3}
                p={2}
                borderRadius="10px"
                boxShadow={"2xl"}
                textAlign="center"
              >
                <Transactions />
              </Box>
            </Box>

            <Box>
              <Heading fontSize={"md"}>Recent Transactions</Heading>

              <Box
                bgColor={"white"}
                w="300px"
                mt={3}
                p={2}
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                borderRadius="10px"
                textAlign="center"
              >
                <Text color="#c5c5c5" fontSize="14px">
                  Accounts Reached
                </Text>
                <Heading fontSize={"2xl"}>₹11.76</Heading>
                <AccountReached />
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Divider orientation="vertical"/>
        <Flex direction={"column"} gap="10px">
          <Box mt="-20%">
            <Heading fontSize={"md"}>Earnings</Heading>
            <Earning />
          </Box>
          <Box mt={10}>
            <Heading fontSize={"md"}>Recent Transactions</Heading>
            <Transfer />
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "100px", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Heading
          size="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color={"#0038ff"}
        >
          LOGO
        </Heading>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Divider orientation="horizontal" />
      {LinkItems2.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      textAlign={"start"}
      bg={useColorModeValue("white", "gray.900")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      gap="180px"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>
      <Box ml="-100px">
            <Text textAlign="start" fontSize="x-large" fontWeight="700">
              Hello, John 👋
            </Text>
          </Box>
          <Flex direction={"row"} justify="space-around">
            <Input placeholder="Search" w="300px"/>
          </Flex>
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
            <HStack spacing="4" fontSize="4xl" width="100%">
              <MdSms />
              <FiHardDrive />
              <BiUserCircle />
            </HStack>
        </Flex>
      </HStack>
    </Flex>
  );
};

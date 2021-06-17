import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import { MoonIcon } from "@chakra-ui/icons";
import { FaSun } from "react-icons/fa";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const getNavLinks = () => {
    return (
      <>
        {/* <Button variant="ghost " onClick={() => navigate(`/quiz`)}>
          Home
        </Button> */}
      </>
    );
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Logo />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {getNavLinks()}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              variant="ghost"
              aria-label="Toggle Dark Mode"
              fontSize="large"
              icon={isDark ? <FaSun /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {getNavLinks()}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  Box,
  Spacer,
  Text,
  Show,
  Hide,
  Button,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <Flex borderBottom={{ base: "2px" }} borderColor={"gray.400"} p={"2"}>
      <Box cursor={"pointer"}>
        <Link href={"/"}>
          <Text fontSize="3xl" as="cite" color={"blue.700"}>
            Realtor
          </Text>
        </Link>
      </Box>
      <Spacer />
      <Hide above="md">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            colorScheme="blue"
          ></MenuButton>
          <MenuList>
            <Link href="/">
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href={"/search"}>
              <MenuItem icon={<BsSearch />}>
                <Text>Search</Text>
              </MenuItem>
            </Link>
            <Link href={"/search?purpose=for-rent"}>
              <MenuItem icon={<FcAbout />}>Rent</MenuItem>
            </Link>{" "}
            <Link href={"/search?purpose=for-sale"}>
              <MenuItem icon={<FiKey />}>Buy</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Hide>
      <Show above="md">
        <Flex>
          <Link href={"/"}>
            <Button
              leftIcon={<FcHome />}
              aria-label="navigate to home page"
              variant="link"
              mr={4}
            >
              Home
            </Button>
          </Link>

          <Link href={"/search"}>
            <Button
              leftIcon={<BsSearch />}
              aria-label="navigate to search page"
              variant="link"
              mr={4}
            >
              Search
            </Button>
          </Link>
          <Link href={"/search?purpose=for-rent"}>
            <Button
              leftIcon={<FcAbout />}
              aria-label="check houses for rent"
              variant="link"
              mr={4}
            >
              Rent
            </Button>
          </Link>
          <Link href={"/search?purpose=for-sale"}>
            <Button
              leftIcon={<FiKey />}
              aria-label="Check houses for sale"
              variant="link"
              mr={4}
            >
              Buy
            </Button>
          </Link>
        </Flex>
      </Show>
    </Flex>
  );
};

export default Navbar;

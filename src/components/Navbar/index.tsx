import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { User } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
// import Directory from "./Directory";

const Navbar: React.FC = () => {
  // const [user] = useAuthState(auth);

  // const { onSelectMenuItem } = useDirectory();

  return (
    <Flex
      bg={"white"}
      height="44px"
      padding={"6px 12px"}
      justifyContent={{ md: "space-between" }}
    >
      <Flex
        align={"center"}
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
      >
        <Image src="/images/redditFace.svg" height="30px" alt="reddit face" />
        <Image
          display={{ base: "none", md: "unset" }}
          src="/images/redditText.svg"
          height={"46px"} alt="redditText"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;

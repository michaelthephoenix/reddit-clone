import { Button } from "@chakra-ui/react";
import React, {useState} from "react";
import { useSetRecoilState } from "recoil";
// import {  } from "../../../atoms/authModalAtom";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
    // const setAuthModalState = useSetRecoilState(authModalState);
    return (
        <>
        <Button variant={"outline"}
        height="28px"
        display={{base: "none", sm:"flex"}}
        width={{base: "70px", md: "110px"}}
        mr={2}
        >
            Sign Up
        </Button>
        </>
    );
};

export default AuthButtons;
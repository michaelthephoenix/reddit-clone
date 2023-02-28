import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authModalState, ModalView } from "@/atoms/authModalAtoms";
import Login from "./Login"
import SignUp from "./SignUp"

type AuthInputProps = {
    toggleView: (view: ModalView) => void;
};

const AuthInputs: React.FC<AuthInputProps> = ({toggleView}) => {
    const modalState = useRecoilValue(authModalState);
    return (
        <Flex direction="column" alignItems="center" width="100%" mt={4}>
      {modalState.view === "login" ? (
        <Login toggleView={toggleView} />
      ) : (
        <SignUp toggleView={toggleView} />
      )}
    </Flex>
    );
};

export default AuthInputs;
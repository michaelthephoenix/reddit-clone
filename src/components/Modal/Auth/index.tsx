import React, { useEffect } from "react";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { authModalState } from "../../../atoms/authModalAtoms";
import { userState } from "../../../atoms/userAtom";
import { auth } from "../../../firebase/clientApp";
import AuthInputs from "./Inputs";
// import OAuthButtons from "./OAuthButtons";
// import ResetPassword from "./ResetPassword";
import ModalWrapper from "../ModalWrapper";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => 
  setModalState((prev) => ({
    ...prev,
    open: false,
  }));
  
  const currentUser = useRecoilValue(userState);
  const [user, error] = useAuthState(auth);


  const toggleView = (view: string) => {
    setModalState({
      ...modalState,
      view: view as typeof modalState.view,
    });
  };

  useEffect(() => {
    if (user) handleClose();
  },[user]);

  return (
    <ModalWrapper isOpen={modalState.open} onClose={handleClose}>

    </ModalWrapper>
  )
}

export default AuthModal;
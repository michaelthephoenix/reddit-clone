import React from "react";
import Navbar from "../Navbar";
// import { useAuthState } from "react-firebase-hooks/auth";
// import {auth} from "../,,/firebase/clientApp";
// import AuthModal from "../Modal/Auth";
// import useAuth from "../../hooks/useAuth"

 

const Layout: React.FC = ({ children }) => {

    return (
        <>
        <Navbar/>
        {children}
        </>
    )
}

export default Layout;
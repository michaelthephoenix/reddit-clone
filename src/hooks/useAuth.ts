import {doc, onSnapshot } from "firebase/firestore";
import {useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import {userState} from "../atoms/userAtom";
import { auth, firestore } from "../firebase/clientApp";
import nookies from "nookies";
import {User} from "firebase/auth";

const useAuth = () => {
    const [user] = useAuthState(auth);
    // something maybe missing here

    useEffect(() => {
        console.log("Here is User", user);

        user ? setUserCookie(user) : nookies.set(undefined, "token", "");
    }, [user]);

    const setUserCookie =async (user:User) => {
        const token = await user.getIdToken();
        console.log("Here is token", token);
        nookies.set(undefined, "token", token);
    };

    //something missing here
}

export default useAuth;

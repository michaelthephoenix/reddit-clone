import {doc, onSnapshot } from "firebase/firestore";
import {useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import {userState} from "../atoms/userAtom";
import { auth, firestore } from "../firebase/clientApp";
import nookies from "nookies";



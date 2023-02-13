import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./clientApp";

export const signInWithGoogle: any = async () =>
  signInWithPopup(auth, new GoogleAuthProvider());

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {};
export const logout = () => signOut(auth);

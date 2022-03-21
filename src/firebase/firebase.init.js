import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.congid";

const firebaseInitialization = () => {
  initializeApp(firebaseConfig);
};
export default firebaseInitialization;

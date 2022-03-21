import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  LogOut,
  isUserExcest,
  isAdmin,
} from "./redux/firebaseUsere/userAction";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import { Button } from "@mui/material";
import Header from "./components/header/Header";
import { Switch, Route, Link } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Home from "./components/home/Home";
import DashebordHome from "./components/dashbord/DashebordHome";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import store from "./redux/store";
import SingleShare from "./components/home/allShare/SingleShare";
import ShareUpdate from "./components/home/allShare/ShareUpdate";
import UpdateProfile from "./components/dashbord/profile/UpdateProfile";
import Error from "./components/home/error/Error";

store.dispatch(isUserExcest());

function App() {
  const dispatch = useDispatch();
  const { logut, user, admin, profile } = useSelector((state) => state.USER);
  const logout = () => {
    dispatch(LogOut());
  };

  // console.log(admin);
  // console.log(profile);
  useEffect(() => {
    // console.log(user.email);
    dispatch(isAdmin(user.email));
  }, [user.email]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/contact">
          <Contact />
        </PrivateRoute>
        <PrivateRoute path="/about">
          <About />
        </PrivateRoute>
        <PrivateRoute path="/dashbord">
          <DashebordHome />
        </PrivateRoute>
        <PrivateRoute path="/singleshare/:_id">
          <SingleShare />
        </PrivateRoute>
        <PrivateRoute path="/updatefile/:_id">
          <ShareUpdate></ShareUpdate>
        </PrivateRoute>

        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/updateprofile/:email">
          <UpdateProfile></UpdateProfile>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </>
  );
}

export default App;

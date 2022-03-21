import {
  GOOGLE_SIGNUP,
  EMAIL_PASSWORD_SIGNUP,
  EMAIL_PASSWORD_SIGNIN,
  IS_USER_EXICET,
  ERORR,
  IS_SIGN,
  LOG_OUT,
  IS_LOADING,
  IS_ADMIN,
  PROFILE,
} from "./userType";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import firebaseInitialization from "../../firebase/firebase.init";

firebaseInitialization();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export const EmailPasswordSignUP = (user, history, from) => {
  const { email, password, fullName } = user;
  // console.log(email, password);
  return (dispatch) => {
    // console.log(email, password, fullName);
    dispatch({ type: IS_SIGN, payload: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUsere(fullName);
        // console.log(user);
        userBD(email, fullName, user.photoURL);
        history.push(from);
        dispatch({
          type: EMAIL_PASSWORD_SIGNUP,
          payload: user,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
        dispatch({
          type: ERORR,
          payload: errorMessage,
        });
      });
  };
};

const updateUsere = (fullName) => {
  updateProfile(auth.currentUser, {
    displayName: fullName,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};
export const signInEmailPassword = (user, history, from) => {
  return (dispatch) => {
    const { email, password } = user;
    dispatch({ type: IS_SIGN, payload: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({
          type: EMAIL_PASSWORD_SIGNIN,
          payload: user,
        });
        history.push(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          type: ERORR,
          payload: errorMessage,
        });
      });
  };
};

export const googlesINUP = (history, from) => {
  // const history = useHistory();
  // console.log(from);
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        userBD(user.email, user.displayName, user.photoURL);
        dispatch({
          type: GOOGLE_SIGNUP,
          payload: user,
        });
        history.push(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({
          type: ERORR,
          payload: errorMessage,
        });
      });
  };
};

export const LogOut = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: LOG_OUT,
          payload: "logout",
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };
};

export const isUserExcest = () => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        dispatch({
          type: IS_USER_EXICET,
          payload: user,
        });
      } else {
        dispatch({
          type: IS_USER_EXICET,
          payload: {},
        });
      }
    });
  };
};

const userBD = (email, name, picture) => {
  // console.log(email, name);
  // const user={email,name}
  fetch("https://infinite-reef-36150.herokuapp.com/user", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, name, picture }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
    });
};

// is admin
export const isAdmin = (email) => {
  return (dispatch) => {
    // console.log(email);
    fetch(`https://infinite-reef-36150.herokuapp.com/isadmin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({ type: IS_ADMIN, payload: data.admin, User: data.User });
      });
  };
};

//profile

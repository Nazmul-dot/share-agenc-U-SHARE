import {
  GOOGLE_SIGNIN,
  GOOGLE_SIGNUP,
  EMAIL_PASSWORD_SIGNUP,
  EMAIL_PASSWORD_SIGNIN,
  IS_USER_EXICET,
  LOG_OUT,
  ERORR,
  IS_SIGN,
  IS_LOADING,
  IS_ADMIN,
} from "./userType";
const initialState = {
  user: {},
  isloading: false,
  error: "",
  value: 12345,
  isSign: false,
  logut: "not logout",
  admin: false,
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_PASSWORD_SIGNUP:
    case GOOGLE_SIGNUP:
    case GOOGLE_SIGNIN:
    case EMAIL_PASSWORD_SIGNIN:
    case IS_USER_EXICET:
      // console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        isSign: false,
        isloading: false,
      };
    case IS_SIGN:
      return {
        ...state,
        isSign: action.payload,
      };
    case IS_LOADING:
      // console.log(action.payload);
      return {
        ...state,
        isloading: true,
      };
    case ERORR:
      return {
        ...state,
        isSign: false,
        error: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        error: "",
        isSign: false,
        logut: action.payload,
      };
    case IS_ADMIN:
      return {
        ...state,
        admin: action.payload,
        profile: action.User,
      };
    default:
      return state;
  }
};

export default userReducer;

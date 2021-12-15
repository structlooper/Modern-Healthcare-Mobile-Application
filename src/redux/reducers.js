import * as actionTypes from './actionTypes'
import { set_selected_profile } from "./actionTypes";

const InitialState = {
  introScreen: true,
  primary: '#ffab00',
};
const SignUpDetails = {
  email: 'test@gmail.com',
  phone: ''
};
const AuthUserState = {
  token: '',
  authUserDetails: '',
  profile_skipped:false,
  selected_profile:null
};


export const settingReducer = (state = InitialState,action) => {
  switch (action.type) {
    case actionTypes.set_intro_screen:
      return {...state,introScreen: action.payload}
    default:
      return state;
  }
}

export const signUpReducer = (state = SignUpDetails,action) => {
  switch (action.type) {
    case actionTypes.set_signup_details_email:
      return {...state,email: action.payload}
    case actionTypes.set_signup_details_phone:
      return {...state,phone: action.payload}
    default:
      return state;
  }
}
export const authReducer = (state = AuthUserState,action) => {
  switch (action.type) {
    case actionTypes.set_auth_user_token:
      return {...state,token: action.payload}
    case actionTypes.set_auth_user_details:
      return {...state,authUserDetails: action.payload}
    case actionTypes.set_auth_profile_skipped:
      return {...state,profile_skipped: action.payload}
    case actionTypes.set_selected_profile:
      return {...state,selected_profile: action.payload}
    default:
      return state;
  }
}

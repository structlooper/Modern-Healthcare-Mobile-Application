import * as actionTypes from './actionTypes'

const InitialState = {
  introScreen: true,
  primary: '#ffab00',
};
const SignUpDetails = {
  email: 'test@gmail.com',
  phone: ''
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
    // case actionTypes.set_signup_details_phone:
    //   return {...state,phone: action.payload}
    default:
      return state;
  }
}

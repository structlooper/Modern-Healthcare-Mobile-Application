import * as actionTypes from './actionTypes'

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
const DoctorFilterState = {
  CountryLis: '',
  SelectedCountry: {
    iconUrl:'https://cdn1.vectorstock.com/i/1000x1000/69/45/canada-flag-vector-5786945.jpg',
    title:'+1',
    country:'can',
    countryIcon:'🇨🇦 ',
    language:'English',
  },
  DoctorGender:'',
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
export const doctorFilterReducer = (state = DoctorFilterState,action) => {
  switch (action.type) {
    case actionTypes.set_selected_country:
      return {...state,SelectedCountry: action.payload}
    case actionTypes.set_doctor_gender:
      return {...state,DoctorGender: action.payload}
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

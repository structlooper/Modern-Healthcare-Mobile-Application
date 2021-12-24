import * as actionTypes from "./actionTypes";
import { set_auth_profile_skipped, set_selected_profile } from "./actionTypes";

export const setIntroScreen = value => dispatch => {
  dispatch({
    type: actionTypes.set_intro_screen,
    payload: value,
  });
};
export const SetSignUpDetailsEmail = value => dispatch => {
  dispatch({
    type: actionTypes.set_signup_details_email,
    payload: value,
  });
};
export const SetSignUpDetailsPhone = value => dispatch => {
  dispatch({
    type: actionTypes.set_signup_details_phone,
    payload: value,
  });
};
export const SetAuthUserToken = value => dispatch => {
  dispatch({
    type: actionTypes.set_auth_user_token,
    payload: value,
  });
};
export const SetAuthUserDetails = value => dispatch => {
  dispatch({
    type: actionTypes.set_auth_user_details,
    payload: value,
  });
};
export const SetAuthProfileSkipped = value => dispatch => {
  dispatch({
    type: actionTypes.set_auth_profile_skipped,
    payload: value,
  });
};

export const SetSelectedProfile = value => dispatch => {
  dispatch({
    type: actionTypes.set_selected_profile,
    payload: value,
  });
};
export const SetSelectedCountry = value => dispatch => {
  dispatch({
    type: actionTypes.set_selected_country,
    payload: value,
  });
};
export const SetDoctorGender = value => dispatch => {
  dispatch({
    type: actionTypes.set_doctor_gender,
    payload: value,
  });
};

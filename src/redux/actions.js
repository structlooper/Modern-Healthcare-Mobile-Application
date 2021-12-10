import * as actionTypes from "./actionTypes";

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

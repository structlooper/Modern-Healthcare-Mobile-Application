import * as actionTypes from "./actionTypes";

export const setIntroScreen = value => dispatch => {
  dispatch({
    type: actionTypes.set_intro_screen,
    payload: value,
  });
};

import * as actionTypes from './actionTypes'

const InitialState = {
  introScreen: true,
  primary: '#ffab00',
};


export const settingReducer = (state = InitialState,action) => {
  switch (action.type) {
    case actionTypes.set_intro_screen:
      return {...state,introScreen: action.payload}
    default:
      return state;
  }
}

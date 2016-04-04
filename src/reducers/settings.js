import { StatusBar, Platform } from 'react-native';
import constants from '../constants';
import { createReducer } from '../utils';

const initialState = {};

const settingReducers = {
  toggleMenu(state, bool) {
    if (Platform.OS === 'ios') {
      StatusBar.setHidden(bool, 'slide');
    }
    return state;
  }
};

export default createReducer(initialState, {
  [constants.SETTINGS_MENU]: (state, { bool }) => settingReducers.toggleMenu(state, bool)
});

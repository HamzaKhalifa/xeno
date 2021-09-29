import {
  SET_THEME_VALUE
} from './actionTypes'

export const setThemeValue = (path, value) => ({ type: SET_THEME_VALUE, payload: { path, value } })
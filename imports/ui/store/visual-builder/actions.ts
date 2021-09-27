import {
  SET_VISUAL_BUILDER_VISIBLE,
  SET_PAGES
} from './actionTypes'

export const setVisualBuilderVisible = (visible) => ({ type: SET_VISUAL_BUILDER_VISIBLE, payload: visible })

export const setPages = (pages) => ({ type: SET_PAGES, payload: pages })
import { LOAD_STORIES, SET_SECTION, CHANGE_VISIBILITY } from './stories';

export const loadStories = () => ({
  type: LOAD_STORIES,
});

export const setSection = topic => ({
  type: SET_SECTION,
  topic,
});

export const changeVisibility = visibility => ({
  type: CHANGE_VISIBILITY,
  visibility,
});

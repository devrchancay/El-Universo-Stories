import {
  LOAD_STORIES,
  SET_SECTION,
  CHANGE_VISIBILITY,
  SET_STORY,
} from './stories';

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

export const setStory = id => ({
  type: SET_STORY,
  id,
});

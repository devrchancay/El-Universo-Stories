import { SET_SECTION, CHANGE_VISIBILITY } from '../actions/stories';

const stories = (state = {}, action) => {
  switch (action.type) {
    case SET_SECTION:
      return Object.assign({}, state, {
        current: state.all.find(story => story.name === action.topic),
      });
    case CHANGE_VISIBILITY:
      return Object.assign({}, state, {
        visibility: action.visibility,
      });
    default:
      return state;
  }
};

export default stories;

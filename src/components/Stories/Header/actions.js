import React, { Component } from 'react';
import glamorous from 'glamorous';

import { storyAction, storyClose } from '../../../styles/stories';

const close = require('./close.svg');

const StoryAction = glamorous.div(storyAction);
const StoryClose = glamorous.a(storyClose);

class Actions extends Component {
  hideStory() {
    this.props.changeVisibility(false);
  }

  render() {
    return (
      <StoryAction>
        <StoryClose onClick={this.hideStory.bind(this)}>
          <img
            src={close}
            alt="x"
            style={{ width: '100px', height: '100px' }}
          />
        </StoryClose>
      </StoryAction>
    );
  }
}

export default Actions;

import React, { Component } from 'react';
import glamorous from 'glamorous';

import { storyAction, storyClose } from '../../../styles/stories';

import close from './cancel.svg';

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
          <img src={close} alt="x" style={{ width: '25px', height: '25px' }} />
        </StoryClose>
      </StoryAction>
    );
  }
}

export default Actions;

import React, { Component } from 'react';
import glamorous from 'glamorous';
import Avatar from './avatar';
import Information from './information';
import Actions from './actions';

import { storyHeader } from '../../../styles/stories';

const StoryHeader = glamorous.div(storyHeader);

class Header extends Component {
  hideStory() {
    this.props.changeVisibility(false);
  }

  render() {
    const { avatar } = this.props.stories.current;
    return (
      <StoryHeader>
        <Avatar img={avatar} />
        <Information {...this.props.stories.current} />
        <Actions changeVisibility={this.props.changeVisibility} />
      </StoryHeader>
    );
  }
}

export default Header;

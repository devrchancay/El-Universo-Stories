import React, { Component } from 'react';
import glamorous from 'glamorous';
import Avatar from './avatar';

import {
  storyHeader,
  storyInformation,
  storyTitle,
  storyDate,
  storyAction,
  storyClose,
} from '../../styles/stories';

const StoryHeader = glamorous.div(storyHeader);
const StoryInformation = glamorous.div(storyInformation);
const StoryTitle = glamorous.h3(storyTitle);
const StoryDate = glamorous.h4(storyDate);
const StoryAction = glamorous.div(storyAction);
const StoryClose = glamorous.a(storyClose);

class Header extends Component {
  hideStory() {
    this.props.changeVisibility(false);
  }

  render() {
    const { label, date, avatar } = this.props.stories.current;
    return (
      <StoryHeader>
        <Avatar img={avatar} />
        <StoryInformation>
          <StoryTitle>{label}</StoryTitle>
          <StoryDate>{date}</StoryDate>
        </StoryInformation>
        <StoryAction>
          <StoryClose onClick={this.hideStory.bind(this)}>
            <i className="fa fa-times" style={{ fontWeight: 300 }} />
          </StoryClose>
        </StoryAction>
      </StoryHeader>
    );
  }
}

export default Header;

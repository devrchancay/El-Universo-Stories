import React from 'react';
import glamorous from 'glamorous';

import {
  storyInformation,
  storyTitle,
  storyDate,
} from '../../../styles/stories';

const StoryInformation = glamorous.div(storyInformation);
const StoryTitle = glamorous.h3(storyTitle);
const StoryDate = glamorous.h4(storyDate);

const Information = ({ label, date }) => (
  <StoryInformation>
    <StoryTitle>{label}</StoryTitle>
    <StoryDate>{date}</StoryDate>
  </StoryInformation>
);

export default Information;

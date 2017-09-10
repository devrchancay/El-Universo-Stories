import React, { Component } from 'react';
import Header from './header';
import Body from './Body';
import Navigation from './Body/Navigation';
import { wrapperStory, stories } from '../../styles/stories';

import glamorous from 'glamorous';

const WrapperStory = glamorous.div(wrapperStory);
const Story = glamorous.div(stories);

class Index extends Component {
  render() {
    const { news } = this.props.stories.current;
    return (
      <WrapperStory>
        <Story>
          <Header {...this.props} />
          <Navigation items={news} {...this.props} />
          <Body report={news[0]} />
        </Story>
      </WrapperStory>
    );
  }
}

export default Index;

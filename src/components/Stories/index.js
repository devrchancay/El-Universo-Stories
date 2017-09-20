import React, { Component } from 'react';
import glamorous from 'glamorous';

import Hammer from 'rc-hammerjs';
import Header from './Header';
import Body from './Body';
import Navigation from './Body/Navigation';
import {
  wrapperStory,
  stories,
  gestureContainer,
  leftControl,
  centerPress,
  rightControl,
} from '../../styles/stories';

const WrapperStory = glamorous.div(wrapperStory);
const Story = glamorous.div(stories);
const GestureContainer = glamorous.div(gestureContainer);
const LeftControl = glamorous.div(leftControl);
const CenterPress = glamorous.div(centerPress);
const RightControl = glamorous.div(rightControl);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyValue: 0,
      hasNext: false,
      hasPrev: false,
    };
  }

  prevStory() {
    const { news } = this.props.stories.current;
    const { id } = this.props.stories.story;
    const index = news.findIndex(report => report.id === id);
    const prev = news[index - 1];
    if (!prev) {
      this.setState({ hasPrev: false, hasNext: true });
    } else {
      window.lines[id].set(0);
      window.lines[prev.id].set(0);
      this.storiesProgress(prev.id);
      this.props.setStory(prev.id);
      this.setState({ hasPrev: true, hasNext: true });
    }
  }

  nextStory() {
    const { news } = this.props.stories.current;
    const { id } = this.props.stories.story;
    const index = news.findIndex(report => report.id === id);
    const next = news[index + 1];
    if (!next) {
      this.setState({ hasNext: false });
    } else {
      window.lines[id].set(1);
      this.storiesProgress(next.id);
      this.props.setStory(next.id);
      this.setState({ hasNext: true, hasPrev: true });
    }
  }

  handlePress() {
    const { id } = this.props.stories.story;
    const progress = window.lines[id];
    const storyValue = progress.value();
    this.setState({ storyValue });
    progress.stop();
  }

  handlePressUp() {
    const { id } = this.props.stories.story;
    const { storyValue } = this.state;
    this.storiesProgress(id, storyValue);
  }

  storiesProgress(id) {
    const { news } = this.props.stories.current;
    const currentID = news.findIndex(report => report.id === id);
    const nextStory = news[currentID + 1];
    this.props.setStory(id);

    window.lines[id].animate(1, () => {
      if (nextStory) {
        this.storiesProgress(nextStory.id);
      } else {
        this.props.changeVisibility(false);
      }
    });
  }

  componentDidMount() {
    const { news } = this.props.stories.current;
    if (news.length > 0) {
      this.setState({ hasNext: true });
    }
  }

  render() {
    const { news } = this.props.stories.current;
    return (
      <WrapperStory>
        <Story>
          <Header {...this.props} />
          <Navigation
            items={news}
            {...this.props}
            storiesProgress={this.storiesProgress.bind(this)}
          />
          <GestureContainer>
            {this.state.hasPrev ? (
              <LeftControl onClick={this.prevStory.bind(this)} />
            ) : (
              <span />
            )}

            <Hammer
              onPress={this.handlePress.bind(this)}
              onPressUp={this.handlePressUp.bind(this)}
            >
              <CenterPress />
            </Hammer>
            {this.state.hasNext ? (
              <RightControl onClick={this.nextStory.bind(this)} />
            ) : (
              <span />
            )}
          </GestureContainer>
          <Body report={this.props.stories.story} />
        </Story>
      </WrapperStory>
    );
  }
}

export default Index;

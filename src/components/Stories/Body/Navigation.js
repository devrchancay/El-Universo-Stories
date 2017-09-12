import React, { Component } from 'react';
import ProgressBar from 'progressbar.js';
import glamorous from 'glamorous';
import { navigationWrapper, navigationItem } from '../../../styles/stories';

const lineConfig = {
  strokeWidth: 20,
  easing: 'easeInOut',
  color: '#FFFFFF',
  duration: 10000,
};

const NavigationWrapper = glamorous.div(navigationWrapper);
const NavigationItem = glamorous.div(navigationItem);

class Navigation extends Component {
  lines = {};
  initProgress(id) {
    const progressId = `#progress-${id}`;
    return new ProgressBar.Line(progressId, lineConfig);
  }

  storiesProgress(id, first = true) {
    const { news } = this.props.stories.current;
    const currentID = news.findIndex(report => report.id === id);
    const nextStory = news[currentID + 1];
    if (first) {
      this.props.setStory(id);
    }

    this.lines[id].animate(1, () => {
      if (nextStory) {
        this.storiesProgress(nextStory.id);
        if (!first) {
          this.props.setStory(id);
        }
      } else {
        this.props.changeVisibility(false);
      }
    });
  }

  componentDidMount() {
    const { news } = this.props.stories.current;
    const firstStory = news[0].id;
    this.lines = news.reduce((prev, next) => {
      prev[next.id] = this.initProgress(next.id);
      return prev;
    }, {});

    this.storiesProgress(firstStory);
  }

  render() {
    const { news } = this.props.stories.current;
    return (
      <NavigationWrapper>
        {news.map(report => {
          const progressId = `progress-${report.id}`;
          return <NavigationItem id={progressId} key={progressId} />;
        })}
      </NavigationWrapper>
    );
  }
}

export default Navigation;

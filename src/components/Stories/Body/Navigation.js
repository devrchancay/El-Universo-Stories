import React, { Component } from 'react';
import ProgressBar from 'progressbar.js';
import glamorous from 'glamorous';
import { navigationWrapper, navigationItem } from '../../../styles/stories';

const lineConfig = {
  strokeWidth: 20,
  easing: 'easeIn',
  color: '#FFFFFF',
  duration: 7000,
};

const NavigationWrapper = glamorous.div(navigationWrapper);
const NavigationItem = glamorous.div(navigationItem);

class Navigation extends Component {
  lines = {};
  initProgress(id) {
    const progressId = `#progress-${id}`;
    return new ProgressBar.Line(progressId, lineConfig);
  }

  componentDidMount() {
    const { news } = this.props.stories.current;
    const firstStory = news[0].id;
    this.lines = news.reduce((prev, next) => {
      prev[next.id] = this.initProgress(next.id);
      return prev;
    }, {});
    window.lines = this.lines;
    this.props.storiesProgress(firstStory);
  }

  componentWillUnmount() {
    const { news } = this.props.stories.current;
    this.props.setStory(news[0].id);
    news.forEach(report => {
      this.lines[report.id].destroy();
    }, this);
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

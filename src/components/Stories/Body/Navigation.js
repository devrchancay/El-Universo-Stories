import React, { Component } from 'react';
import ProgressBar from 'progressbar.js';
import glamorous from 'glamorous';
import { navigationWrapper, navigationItem } from '../../../styles/stories';

const NavigationWrapper = glamorous.div(navigationWrapper);
const NavigationItem = glamorous.div(navigationItem);

class Navigation extends Component {
  lines = [];

  initProgress(id) {
    return new ProgressBar.Line(`#progress-${id}`, {
      strokeWidth: 8,
      easing: 'easeInOut',
      color: '#FFFFFF',
      duration: 10000,
    });
  }

  nextProgress(id = 1) {
    const { news } = this.props.stories.current;
    if (news.length >= id && this.lines[id]) {
      this.lines[id].animate(1, () => {
        this.nextProgress(id + 1);
      });
      this.props.setStory(id);
    } else {
      this.props.changeVisibility(false);
    }
  }

  runProgress() {
    this.lines[0].animate(1, () => {
      this.nextProgress();
    });
  }

  componentDidMount() {
    const { news } = this.props.stories.current;
    this.lines = news.map((report, id) => this.initProgress(id));
    this.runProgress();
  }

  render() {
    const { news } = this.props.stories.current;
    return (
      <NavigationWrapper>
        {news.map((report, id) => {
          return <NavigationItem id={`progress-${id}`} key={id} />;
        })}
      </NavigationWrapper>
    );
  }
}

export default Navigation;

import React, { Component } from 'react';
import glamorous from 'glamorous';

import { navigationWrapper, navigationItem } from '../../../styles/stories';

const NavigationWrapper = glamorous.div(navigationWrapper);
const NavigationItem = glamorous.div(navigationItem);

class Navigation extends Component {
  render() {
    const { news } = this.props.stories.current;
    return (
      <NavigationWrapper>
        {news.map((report, id) => <NavigationItem key={id} />)}
      </NavigationWrapper>
    );
  }
}

export default Navigation;

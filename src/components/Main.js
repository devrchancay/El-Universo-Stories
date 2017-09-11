import React, { Component } from 'react';

import Stories from './Stories/';

class Main extends Component {
  setSection(e) {
    e.preventDefault();
    const section = e.target.getAttribute('data-section');
    this.props.setSection(section);
    this.props.setStory(0);
    this.props.changeVisibility(true);
  }

  render() {
    const { all } = this.props.stories;
    return (
      <div className="App">
        <ul>
          <li>
            {all.map((story, id) => (
              <a
                key={id}
                data-section={story.name}
                href={story.name}
                onClick={this.setSection.bind(this)}
              >
                {story.label}
              </a>
            ))}
          </li>
        </ul>
        {this.props.stories.visibility ? <Stories {...this.props} /> : <span />}
      </div>
    );
  }
}

export default Main;

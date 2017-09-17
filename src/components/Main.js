import React, { Component } from 'react';

import Stories from './Stories/';

class Main extends Component {
  setSection(e) {
    e.preventDefault();
    const section = e.target.getAttribute('data-section');
    this.props.setSection(section);
    this.props.changeVisibility(true);
  }

  render() {
    const { all } = this.props.stories;
    return (
      <div>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {all.map((story, id) => (
            <li
              key={id}
              style={{
                margin: '1rem',
              }}
            >
              <a
                data-section={story.name}
                href={story.name}
                onClick={this.setSection.bind(this)}
              >
                {story.label}
              </a>
            </li>
          ))}
        </ul>
        {this.props.stories.visibility ? <Stories {...this.props} /> : <span />}
      </div>
    );
  }
}

export default Main;

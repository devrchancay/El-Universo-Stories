import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../src/store';

import Header from '../src/components/Stories/Header';
import Avatar from '../src/components/Stories/Header/avatar';
import Information from '../src/components/Stories/Header/information';
import Actions from '../src/components/Stories/Header/actions';
import Picture from '../src/components/Stories/Body/Picture';

store.dispatch({ type: 'SET_SECTION', topic: 'loultimo' });
const { stories } = store.getState();

const img = stories.current.news[0].picture;

const Provider = ({ story }) => (
  <ReduxProvider store={store}>{story}</ReduxProvider>
);

storiesOf('Header', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Complete', () => <Header stories={stories} />)
  .add('Avatar', () => <Avatar />)
  .add('Information', () => (
    <Information label={stories.current.label} date={stories.current.date} />
  ))
  .add('Actions', () => <Actions />);

storiesOf('Body', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Picture', () => <Picture img={img} />);

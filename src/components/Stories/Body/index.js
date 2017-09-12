import React, { Component } from 'react';
import glamorous from 'glamorous';
import Picture from './Picture';

import {
  bodyDetails,
  bodyTopic,
  bodyTimeago,
  bodyRow,
  bodyTitleWrapper,
  bodyTitle,
  bodyDescription,
  bodyAction,
  bodyLink,
} from '../../../styles/stories';

const BodyDetails = glamorous.div(bodyDetails);
const BodyTopic = glamorous.h5(bodyTopic);
const BodyTimeago = glamorous.h5(bodyTimeago);
const BodyTitleWrapper = glamorous.div(bodyTitleWrapper);
const BodyRow = glamorous.div(bodyRow);
const BodyTitle = glamorous.h1(bodyTitle);
const BodyDescription = glamorous.p(bodyDescription);
const BodyAction = glamorous.div(bodyAction);
const BodyLink = glamorous.a(bodyLink);

class Body extends Component {
  renderBody() {
    const {
      picture,
      topic,
      timeago,
      title,
      description,
      url,
    } = this.props.report;
    return (
      <div>
        <Picture img={picture} />
        <BodyDetails>
          <BodyTopic>{topic}</BodyTopic>
          <BodyTimeago>{timeago}</BodyTimeago>
        </BodyDetails>
        <BodyTitleWrapper>
          <BodyTitle>{title}</BodyTitle>
        </BodyTitleWrapper>
        <BodyRow>
          <BodyDescription>{description}</BodyDescription>
        </BodyRow>
        <BodyAction>
          <BodyLink href={url}>Seguir leyendo la nota</BodyLink>
        </BodyAction>
      </div>
    );
  }

  render() {
    return this.props.report ? this.renderBody() : <span />;
  }
}

export default Body;

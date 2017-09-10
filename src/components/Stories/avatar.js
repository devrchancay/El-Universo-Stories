import React from 'react';
import glamorous from 'glamorous';

import { avatarFigure, avatarImage } from '../../styles/stories';

const AvatarFigure = glamorous.figure(avatarFigure);
const AvatarImage = glamorous.img(avatarImage);

const Avatar = ({
  img = 'http://www.eluniverso.com/files/liveblog/avatar.png',
  title,
}) => {
  return (
    <AvatarFigure>
      <AvatarImage src={img} alt={title} />
    </AvatarFigure>
  );
};

export default Avatar;

import React from 'react';
import glamorous from 'glamorous';

import { pictureFigure, pictureImg } from '../../../styles/stories';

const PictureFigure = glamorous.figure(pictureFigure);
const PictureImg = glamorous.img(pictureImg);

const Picture = ({ img }) => {
  return (
    <PictureFigure>
      <PictureImg src={img} />
    </PictureFigure>
  );
};

export default Picture;

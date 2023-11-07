import React from 'react';

const MyImage = (props) => {
   const {width = 150, height = 100, src, alt} = props;
   return (
      <img src={src} alt={alt} width={width} height={height}/>
   );
};

export default MyImage;
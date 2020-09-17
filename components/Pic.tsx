import React from 'react';

import {View, Image, ImageStyle} from 'react-native';

import COLORS from '../constants/colors';

const ROOT: ImageStyle = {
  width: 70,
  height: 70,
  borderRadius: 200,
  backgroundColor: COLORS.LIGHT_GREY,
  overflow: 'hidden',
}

interface Props {
  styling?: {};
  image: string;
}

const Pic: React.FC<Props> = ({styling, image}) => {
  return (
    <View>
      <View style={{...ROOT, ...styling}}>
        <Image
          resizeMethod="resize"
          style={{...ROOT, ...styling }}
          source={{
            uri: image,
          }}
        />
      </View>
    </View>
  );
};

export default Pic;

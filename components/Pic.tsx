import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import COLORS from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: 70,
    height: 70,
    borderRadius: 200,
    backgroundColor: COLORS.LIGHT_GREY,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
  },
});

interface Props {
  styling?: {};
  image: string;
}

const Pic: React.FC<Props> = ({styling, image}) => {
  return (
    <View>
      <View style={{...styles.wrapper, ...styling}}>
        <Image
          resizeMethod="resize"
          style={{...styles.wrapper, ...styling }}
          source={{
            uri: image,
          }}
        />
      </View>
    </View>
  );
};

export default Pic;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Pic from '../components/Pic'

import COLORS from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 16,
  },
  title__wrapper: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.DARK_GREY,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  pic: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginBottom: 15,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  title: string;
  leftButton: React.FC;
  rightButton: React.FC;
  style: {};
  headerImage: boolean;
  childName: string;
  image?: string;
}

const ChildNavHeader: React.FC<Props> = ({
  title,
  leftButton,
  rightButton,
  style,
  headerImage,
  image=""
}) => {
  return (
    <View style={{...style, ...styles.wrapper}}>
      {leftButton}
      <View style={styles.title__wrapper}>
        {headerImage ? <View style={styles.pic}>
          <Pic image={image} styling={{ width: 32, height: 32 }}/>
        </View> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightButton}
    </View>
  );
};

export default ChildNavHeader;

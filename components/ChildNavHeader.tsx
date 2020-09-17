import React from 'react';
import {View, Text, TextStyle, ViewStyle} from 'react-native';

import Pic from '../components/Pic';

import COLORS from '../constants/colors';

const ROOT: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  padding: 16,
};

const TITLE__WRAPPER: ViewStyle = {
  alignItems: 'center',
};

const PIC: ViewStyle = {
  width: 32,
  height: 32,
  borderRadius: 100,
  marginBottom: 15,
  backgroundColor: '#eee',
  alignItems: 'center',
  justifyContent: 'center',
};

const TITLE: TextStyle = {
  color: COLORS.DARK_GREY,
  fontFamily: 'Poppins-Medium',
  fontSize: 16,
}

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
  image = '',
}) => {
  return (
    <View style={{...style, ...ROOT}}>
      {leftButton}
      <View style={TITLE__WRAPPER}>
        {headerImage ? (
          <View style={PIC}>
            <Pic image={image} styling={{width: 32, height: 32}} />
          </View>
        ) : null}
        <Text style={TITLE}>{title}</Text>
      </View>
      {rightButton}
    </View>
  );
};

export default ChildNavHeader;

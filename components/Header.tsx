import React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';

const ROOT: ViewStyle = {
  width: '100%',
  padding: 16,
};

const SUBTITLE: TextStyle = {
  fontSize: 12,
  fontFamily: 'Poppins-Light',
  color: '#707070',
  opacity: 0.7,
};

const TITLE: TextStyle = {
  fontFamily: 'Poppins-Bold',
  fontSize: 30,
  color: '#2D71B5',
};

interface Props {
  title: string;
  subTitle: string;
}

const Header: React.FC<Props> = ({title, subTitle}) => {
  return (
    <View style={ROOT}>
      <Text style={SUBTITLE}>{subTitle}</Text>
      <Text style={TITLE}>{title}</Text>
    </View>
  );
};

export default Header;

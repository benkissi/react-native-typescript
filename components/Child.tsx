import React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';

import HLine from './HLine';

const ROOT: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
};

const PIC: ViewStyle = {
  width: 50,
  height: 50,
  borderRadius: 100,
  backgroundColor: '#EDEDED',
  marginRight: 16,
};

const NAME: TextStyle = {
  fontFamily: 'Poppins-Medium',
  fontSize: 14,
  color: '#707070',
};

const GRADE: TextStyle = {
  fontFamily: 'Poppins-Light',
  color: '#A8A8A8',
  fontSize: 12,
};

interface Props {
  name: string;
  grade: string;
}

const Child: React.FC<Props> = (props) => {
  return (
    <View style={ROOT}>
      <View style={PIC}></View>
      <View>
        <Text style={NAME}>{props.name}</Text>
        <Text style={GRADE}>{props.grade}</Text>
      </View>
    </View>
  );
};

export default Child;

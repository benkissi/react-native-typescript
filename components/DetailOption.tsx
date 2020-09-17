import React from 'react';
import {View, Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ArrowRight from '../assets/svg/ArrowRight';

import COLORS from '../constants/colors';

const ROOT: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
  marginVertical: 10,
  alignItems: 'center',
  justifyContent: 'space-between',
};

const TITLE: TextStyle = {
  fontFamily: 'Poppins-Medium',
  fontSize: 14,
  color: COLORS.DARK_GREY,
};

const DESCRIPTION: TextStyle = {
  fontFamily: 'Poppins-Regular',
  fontSize: 12,
  color: COLORS.MEDIUM_GREY,
};

interface Props {
  option: {id: string; title: string; description: string};
  onTap: Function;
}

const DetailOption: React.FC<Props> = ({option, onTap}) => {
  return (
    <TouchableOpacity onPress={() => onTap(option.id)}>
      <View style={ROOT}>
        <View>
          <Text style={TITLE}>{option.title}</Text>
          <Text style={DESCRIPTION}>{option.description}</Text>
        </View>
        <ArrowRight size={14} />
      </View>
    </TouchableOpacity>
  );
};

export default DetailOption;

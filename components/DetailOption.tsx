import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ArrowRight from '../assets/svg/ArrowRight';

import COLORS from '../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: COLORS.DARK_GREY,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.MEDIUM_GREY,
  },
});

interface Props {
  option: {id: string; title: string; description: string};
  onTap: Function;
}

const DetailOption: React.FC<Props> = ({option, onTap}) => {
  return (
    <TouchableOpacity onPress={() => onTap(option.id)}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>{option.title}</Text>
          <Text style={styles.description}>{option.description}</Text>
        </View>
        <ArrowRight size={14} />
      </View>
    </TouchableOpacity>
  );
};

export default DetailOption;

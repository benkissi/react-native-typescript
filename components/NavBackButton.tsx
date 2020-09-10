import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import COLORS from '../constants/colors'

const styles = StyleSheet.create({
  label: {
    color: COLORS.MAIN_BLUE,
    fontFamily: "Poppins-Regular",
    fontSize: 16
  }
})

interface Props {
  onPress: Function
}

const NavBackButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View>
        <Text style={styles.label}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavBackButton;

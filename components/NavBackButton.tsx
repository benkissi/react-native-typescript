import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextStyle,
} from 'react-native';

import COLORS from '../constants/colors';

const LABEL: TextStyle = {
  color: COLORS.MAIN_BLUE,
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
};

interface Props {
  onPress: Function;
}

const NavBackButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View>
        <Text style={LABEL}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavBackButton;

import React from 'react'

import { View, Text, TextStyle } from 'react-native'

import COLORS from '../constants/colors'

const LABEL: TextStyle = {
  color: COLORS.MAIN_BLUE,
  fontFamily: "Poppins-regular",
  fontSize: 16
}

interface Props {
  label: string
}

const NavRightButton: React.FC<Props> = ({label}) => {
  return (
    <View>
      <Text style={LABEL}>{label}</Text>
    </View>
  )
}

export default NavRightButton
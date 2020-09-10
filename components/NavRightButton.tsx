import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

import COLORS from '../constants/colors'

const styles = StyleSheet.create({
  label: {
    color: COLORS.MAIN_BLUE,
    fontFamily: "Poppins-regular",
    fontSize: 16
  }
})

interface Props {
  label: string
}

const NavRightButton: React.FC<Props> = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default NavRightButton
import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#EDEDED",
    height: 1,
    width: "100%"
  }
})

interface Props {
  color: string
}

const HLine: React.FC<Props> = ({color}) => {
  return <View style={{ ...styles.line, backgroundColor: color }}></View>
}

export default HLine
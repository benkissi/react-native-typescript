import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import HLine from './HLine'

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#EDEDED",
    marginRight: 16,
  },
  name: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#707070"
  },
  grade: {
    fontFamily: "Poppins-Light",
    color: "#A8A8A8",
    fontSize: 12
  }
})

interface Props {
  name: string,
  grade: string
}

const Child: React.FC<Props> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.pic}>

      </View>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.grade}>{props.grade}</Text>
      </View>
    </View>
  )
}

export default Child
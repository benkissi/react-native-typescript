import React from 'react'
import { View, ViewStyle } from 'react-native'

const LINE: ViewStyle = {
  backgroundColor: "#EDEDED",
    height: 1,
    width: "100%"
}

interface Props {
  color: string
}

const HLine: React.FC<Props> = ({color}) => {
  return <View style={{ ...LINE, backgroundColor: color }}></View>
}

export default HLine
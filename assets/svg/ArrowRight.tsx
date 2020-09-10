import React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
  size?: number
  color?: string
  opacity?: string
}

const ArrowRight:React.FC<Props> = ({size = 14, color = '#707070', opacity = '0.25'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 8.645 14">
      <Path
        data-name="Icon material-keyboard-arrow-right"
        d="M0 12.355L5.343 7 0 1.645 1.645 0l7 7-7 7z"
        fill={color}
        opacity={opacity}
      />
    </Svg>
  )
}

export default ArrowRight

import React from "react"
import Svg, { Path, Rect } from "react-native-svg"

interface Props {
  color: string
}

const ScheduleIcon:React.FC<Props> = ({color}) => {
  return (
    <Svg
      data-name="Group 4468"
      width={22}
      height={22}
      viewBox="0 0 22 22"
    >
      <Path
        data-name="Rectangle 2776"
        d="M1 0h8a1 1 0 011 1v9H1a1 1 0 01-1-1V1a1 1 0 011-1z"
        fill={color}
        opacity={0.4}
      />
      <Path
        data-name="Rectangle 2779"
        d="M12 12h9a1 1 0 011 1v9H12a1 1 0 01-1-1v-8a1 1 0 011-1z"
        fill={color}
        opacity={0.4}
      />
      <Rect
        data-name="Rectangle 2777"
        width={10}
        height={10}
        rx={1}
        transform="translate(0 12)"
        fill={color}
      />
      <Rect
        data-name="Rectangle 2778"
        width={11}
        height={10}
        rx={1}
        transform="translate(11)"
        fill={color}
      />
    </Svg>
  )
}

export default ScheduleIcon
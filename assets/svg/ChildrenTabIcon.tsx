import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

const ChildrenTabIcon: React.FC<Props> = (props) => {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 22 18" >
      <Path
        data-name="Path 4144"
        d="M11 0L0 6l4 2.18v6L11 18l7-3.82v-6l2-1.09V14h2V6zm6.82 6L11 9.72 4.18 6 11 2.28zM16 12.99l-5 2.73-5-2.73V9.27L11 12l5-2.73z"
        fill={props.color}
      />
    </Svg>
  );
};

export default ChildrenTabIcon;

import Svg, {Path} from 'react-native-svg';
import * as React from 'react';

export interface Data {
  width: string;
  height: string;
  d: string;
  viewBox: string;
}

const SvgIcon: React.FC<Data> = ({width, height, d, viewBox}) => {
  return (
    <Svg viewBox={viewBox} width={width} height={height}>
      <Path d={d} />
    </Svg>
  );
};

export default SvgIcon;

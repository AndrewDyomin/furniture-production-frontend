import { Stage, Layer, Text } from 'react-konva';

export default function Undefined({ dimensions }) {
  return (
    <div>
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
          <Text
            x={dimensions.width / 2.4}
            y={dimensions.height / 2.4}
            fontSize={18}
            text='Undefined'
          />
        </Layer>
      </Stage>
    </div>
  );
}

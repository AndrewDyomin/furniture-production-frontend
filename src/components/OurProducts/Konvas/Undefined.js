import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Stage, Layer, Text, Rect } from 'react-konva';

const Undefined = forwardRef(({ dimensions }, ref) => {
  const stageRef = useRef(null);
  useImperativeHandle(ref, () => ({
    getImage() {
      return stageRef.current.toDataURL({ mimeType: 'image/jpeg', quality: 1 });
    }
  }));
  return (
    <div>
      <Stage ref={stageRef} width={dimensions.width} height={dimensions.height}>
        <Layer>
        <Rect
            x={0}
            y={0}
            width={dimensions.width}
            height={dimensions.height}
            fill={'#FFF'}
          />
        </Layer>
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
})

export default Undefined;
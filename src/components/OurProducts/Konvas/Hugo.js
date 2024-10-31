import { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

const Hugo = forwardRef(({
  dimensions,
  productWidth,
  productDepth,
}, ref) => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const stageRef = useRef(null);

  const sofaTotalDepth = productDepth * scaleFactor;
  const sofaTotalWidth = productWidth * scaleFactor;

  const offsetX = dimensions.width / 2;
  const offsetY = dimensions.height / 2;

  useEffect(() => {
    const value = Math.min(
      (0.7 * dimensions.width) / productWidth,
      (0.7 * dimensions.height) / productDepth
    );
    if (value > 0) {
      setScaleFactor(value);
    }
  }, [dimensions, productWidth, productDepth]);

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
          <Rect
            x={offsetX - (sofaTotalWidth / 2)}
            y={offsetY - (sofaTotalDepth / 2)}
            width={sofaTotalWidth}
            height={20 * scaleFactor}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          <Rect
            x={offsetX - (sofaTotalWidth / 2)}
            y={offsetY - (sofaTotalDepth / 2) + (20 * scaleFactor)}
            width={sofaTotalWidth}
            height={sofaTotalDepth - (20 * scaleFactor)}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
        </Layer>
        <Layer>
          <Line
            points={[
              offsetX + 50,
              offsetY + (sofaTotalDepth / 1.4),
              offsetX + (sofaTotalWidth / 2),
              offsetY + (sofaTotalDepth / 1.4),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - 50,
              offsetY + (sofaTotalDepth / 1.4),
              offsetX - (sofaTotalWidth / 2),
              offsetY + (sofaTotalDepth / 1.4),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX - 50}
            y={offsetY + (sofaTotalDepth / 1.4) - 9}
            text={productWidth}
            width={100}
            align="center"
            fontSize={18}
          />
          <Line
            points={[
              offsetX - (sofaTotalWidth / 1.7),
              offsetY - (sofaTotalDepth / 2),
              offsetX - (sofaTotalWidth / 1.7),
              offsetY - 50,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - (sofaTotalWidth / 1.7),
              offsetY + 50,
              offsetX - (sofaTotalWidth / 1.7),
              offsetY + (sofaTotalDepth / 2),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX - (sofaTotalWidth / 1.7) - 9}
            y={offsetY + 50}
            text={productDepth}
            width={100}
            align="center"
            rotation={270}
            fontSize={18}
          />
        </Layer>
      </Stage>
    </div>
  );
})

export default Hugo;
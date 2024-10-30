import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

 const Difi = forwardRef(({
  dimensions,
  productWidth,
  productDepth,
}, ref) => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const stageRef = useRef(null);

  const sofaTotalDepth = productDepth * scaleFactor;
  const sofaTotalWidth = productWidth * scaleFactor;

  const armrestsWidth = 15 * scaleFactor
  const armrestsDepth = sofaTotalDepth - (2 * scaleFactor)

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
            {/* back */}
          <Rect
            x={offsetX - (sofaTotalWidth / 2) + armrestsWidth}
            y={offsetY - (sofaTotalDepth / 2)}
            width={sofaTotalWidth - (armrestsWidth * 2)}
            height={29 * scaleFactor}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          <Rect
            x={offsetX - (sofaTotalWidth / 2) + armrestsWidth}
            y={offsetY - (sofaTotalDepth / 2)}
            width={sofaTotalWidth - (armrestsWidth * 2)}
            height={15 * scaleFactor}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          {/* seat */}
          <Rect
            x={offsetX - (sofaTotalWidth / 2) + armrestsWidth}
            y={offsetY - (sofaTotalDepth / 2) + (29 * scaleFactor)}
            width={(sofaTotalWidth - (armrestsWidth * 2)) / 2}
            height={sofaTotalDepth - (29 * scaleFactor)}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          <Rect
            x={offsetX}
            y={offsetY - (sofaTotalDepth / 2) + (29 * scaleFactor)}
            width={(sofaTotalWidth - (armrestsWidth * 2)) / 2}
            height={sofaTotalDepth - (29 * scaleFactor)}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          {/* armrests */}
          <Rect
            x={offsetX - (sofaTotalWidth / 2)}
            y={offsetY - (sofaTotalDepth / 2)}
            width={armrestsWidth}
            height={armrestsDepth}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          <Rect
            x={offsetX + (sofaTotalWidth / 2) - armrestsWidth}
            y={offsetY - (sofaTotalDepth / 2)}
            width={armrestsWidth}
            height={armrestsDepth}
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

export default Difi;

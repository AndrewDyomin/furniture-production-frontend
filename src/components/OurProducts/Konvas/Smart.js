import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

export default function Smart({
  dimensions,
  productWidth,
  productDepth,
  angleDirection,
}) {
  const [scaleFactor, setScaleFactor] = useState(1);

  const sofaTotalDepth = productDepth * scaleFactor;
  const sofaTotalWidth = productWidth * scaleFactor;

  const sleepingWidth = sofaTotalWidth - 15;
  const sleepingDepth = sofaTotalDepth - 15;

  const cornerBack = 15 * scaleFactor;
  const cornerSeatWidth = sleepingWidth / 3;
  const cornerSeatDepth = sofaTotalDepth - 15 * scaleFactor;

  const linearSeatWidth = (sleepingWidth / 3) * 2;
  const linearSeatDepth = 70 * scaleFactor;

  const offsetX =
    dimensions.width / 2 + (cornerSeatWidth + cornerBack) - sleepingWidth / 2;
  const offsetY = dimensions.height / 2 - sleepingDepth / 2;

  useEffect(() => {
    const value = Math.min(
      (0.7 * dimensions.width) / productWidth,
      (0.7 * dimensions.height) / productDepth
    );
    if (value > 0) {
      setScaleFactor(value);
    }
  }, [dimensions, productWidth, productDepth]);

  return (
    <div>
      <Stage width={dimensions.width} height={dimensions.height}>
        {angleDirection.value === '7' && (
          <Layer>
            <Line
              points={[
                offsetX,
                offsetY,
                offsetX,
                offsetY - cornerBack,
                offsetX - (cornerBack + cornerSeatWidth),
                offsetY - cornerBack,
                offsetX - (cornerBack + cornerSeatWidth),
                offsetY + cornerSeatDepth,
                offsetX - cornerSeatWidth,
                offsetY + cornerSeatDepth,
                offsetX - cornerSeatWidth,
                offsetY,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={true}
            />
            <Rect
              x={offsetX - cornerSeatWidth}
              y={offsetY}
              width={cornerSeatWidth}
              height={cornerSeatDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX}
              y={offsetY}
              width={linearSeatWidth}
              height={linearSeatDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX}
              y={offsetY - cornerBack}
              width={linearSeatWidth}
              height={cornerBack}
              stroke="black"
              strokeWidth={1}
            />
          </Layer>
        )}
        {angleDirection.value !== '7' && (
          <Layer>
            <Line
              points={[
                offsetX + (cornerSeatWidth - cornerBack),
                offsetY,
                offsetX + (cornerSeatWidth - cornerBack),
                offsetY - cornerBack,
                2 * offsetX +
                  (cornerSeatWidth - cornerBack) -
                  (offsetX - (cornerBack + cornerSeatWidth)),
                offsetY - cornerBack,
                2 * offsetX +
                  (cornerSeatWidth - cornerBack) -
                  (offsetX - (cornerBack + cornerSeatWidth)),
                offsetY + cornerSeatDepth,
                2 * offsetX +
                  (cornerSeatWidth - cornerBack) -
                  (offsetX - cornerSeatWidth),
                offsetY + cornerSeatDepth,
                2 * offsetX +
                  (cornerSeatWidth - cornerBack) -
                  (offsetX - cornerSeatWidth),
                offsetY,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={true}
            />
            <Rect
              x={offsetX + (cornerSeatWidth - cornerBack)}
              y={offsetY}
              width={cornerSeatWidth}
              height={cornerSeatDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX - (cornerSeatWidth + cornerBack)}
              y={offsetY}
              width={linearSeatWidth}
              height={linearSeatDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX - (cornerSeatWidth + cornerBack)}
              y={offsetY - cornerBack}
              width={linearSeatWidth}
              height={cornerBack}
              stroke="black"
              strokeWidth={1}
            />
          </Layer>
        )}
        <Layer>
          <Line
            points={[
              offsetX + 100,
              offsetY + (sofaTotalDepth),
              offsetX - cornerSeatWidth - cornerBack + sofaTotalWidth,
              offsetY + (sofaTotalDepth),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX,
              offsetY + (sofaTotalDepth),
              offsetX - cornerSeatWidth - cornerBack,
              offsetY + (sofaTotalDepth),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX}
            y={(offsetY + (sofaTotalDepth)) - 9}
            text={productWidth}
            width={100}
            align='center'
            fontSize={18}
          />
          <Line
            points={[
              offsetX - (sofaTotalWidth / 2),
              offsetY - cornerBack,
              offsetX - (sofaTotalWidth / 2),
              offsetY - cornerBack + (sofaTotalDepth / 2) - 50,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - (sofaTotalWidth / 2),
              offsetY - cornerBack + (sofaTotalDepth / 2) + 50,
              offsetX - (sofaTotalWidth / 2),
              offsetY - cornerBack + sofaTotalDepth,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={(offsetX - (sofaTotalWidth / 2)) - 9}
            y={(offsetY - cornerBack) + (sofaTotalDepth / 2) + 50}
            text={productDepth}
            width={100}
            align='center'
            rotation={270}
            fontSize={18}
          />
        </Layer>
      </Stage>
    </div>
  );
}

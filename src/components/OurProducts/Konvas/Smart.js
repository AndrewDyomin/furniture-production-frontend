import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Line } from 'react-konva';

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
              offsetX + 50,
              offsetY + (sofaTotalDepth),
              offsetX + 200,
              offsetY + (sofaTotalDepth),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - 50,
              offsetY + (sofaTotalDepth),
              offsetX - 200,
              offsetY + (sofaTotalDepth),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
        </Layer>
      </Stage>
    </div>
  );
}

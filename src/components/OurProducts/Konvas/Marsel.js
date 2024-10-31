import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

const Marsel = forwardRef(({
  dimensions,
  productWidth,
  productDepth,
  angleDirection,
}, ref) => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const stageRef = useRef(null);

  const sofaTotalDepth = productDepth * scaleFactor;
  const sofaTotalWidth = productWidth * scaleFactor;

  const armrestsWidth = 20 * scaleFactor;
  const sleepingWidth = sofaTotalWidth - armrestsWidth * 2;
  const sleepingDepth = sofaTotalDepth - 15;

  const cornerBack = 15 * scaleFactor;
  const cornerSeatWidth = sleepingWidth / 3;

  const linearSeatWidth = (sleepingWidth / 3) * 2;
  const linearSeatDepth = 80 * scaleFactor;

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
        {angleDirection.value === '7' && (
          <Layer>
            <Rect
              x={offsetX - cornerSeatWidth - armrestsWidth}
              y={offsetY - cornerBack}
              width={armrestsWidth}
              height={linearSeatDepth + cornerBack}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX - cornerSeatWidth}
              y={offsetY - cornerBack}
              width={cornerSeatWidth}
              height={cornerBack}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Line
              points={[
                offsetX,
                offsetY,
                offsetX - cornerSeatWidth,
                offsetY,
                offsetX - cornerSeatWidth,
                offsetY + linearSeatDepth,
                offsetX - cornerSeatWidth - armrestsWidth + (2 * scaleFactor),
                offsetY + linearSeatDepth,
                offsetX - cornerSeatWidth - armrestsWidth + (0.5 * scaleFactor),
                offsetY + linearSeatDepth + (0.5 * scaleFactor),
                offsetX - cornerSeatWidth - armrestsWidth,
                offsetY + linearSeatDepth + (2 * scaleFactor),
                offsetX - cornerSeatWidth - armrestsWidth,
                offsetY + linearSeatDepth + (sofaTotalDepth - (linearSeatDepth + cornerBack)) - (2 * scaleFactor),
                offsetX - cornerSeatWidth - armrestsWidth + (0.5 * scaleFactor),
                offsetY + linearSeatDepth + (sofaTotalDepth - (linearSeatDepth + cornerBack)) - (0.5 * scaleFactor),
                offsetX - cornerSeatWidth - armrestsWidth + (2 * scaleFactor),
                offsetY + linearSeatDepth + (sofaTotalDepth - (linearSeatDepth + cornerBack)),
                offsetX + 3 * scaleFactor - (2 * scaleFactor),
                offsetY + linearSeatDepth + (sofaTotalDepth - (linearSeatDepth + cornerBack)),
                offsetX + 3 * scaleFactor - (0.5 * scaleFactor),
                offsetY + linearSeatDepth + (sofaTotalDepth - (linearSeatDepth + cornerBack)) - (0.5 * scaleFactor),
                offsetX + 3 * scaleFactor,
                offsetY + linearSeatDepth + (sofaTotalDepth - (linearSeatDepth + cornerBack)) - (2 * scaleFactor),
                offsetX + 3 * scaleFactor,
                offsetY + linearSeatDepth + (2 * scaleFactor),
                offsetX + 3 * scaleFactor - (0.5 * scaleFactor),
                offsetY + linearSeatDepth + (0.5 * scaleFactor),
                offsetX + 3 * scaleFactor - (2 * scaleFactor),
                offsetY + linearSeatDepth,

                offsetX,
                offsetY + linearSeatDepth,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={true}
            />
            <Rect
              x={offsetX}
              y={offsetY}
              width={linearSeatWidth / 2}
              height={linearSeatDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX + linearSeatWidth / 2}
              y={offsetY}
              width={linearSeatWidth / 2}
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
            <Rect
              x={offsetX + linearSeatWidth}
              y={offsetY - cornerBack}
              width={armrestsWidth}
              height={linearSeatDepth + cornerBack}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
          </Layer>
        )}
        {angleDirection.value !== '7' && (
          <Layer>
            <Rect
              x={offsetX - cornerSeatWidth - armrestsWidth}
              y={offsetY - cornerBack}
              width={armrestsWidth}
              height={linearSeatDepth + cornerBack}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX + (linearSeatWidth - cornerSeatWidth)}
              y={offsetY - cornerBack}
              width={cornerSeatWidth}
              height={cornerBack}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Line
              points={[
                offsetX + (linearSeatWidth - cornerSeatWidth),
                offsetY,
                offsetX + linearSeatWidth,
                offsetY,
                offsetX + linearSeatWidth,
                offsetY + linearSeatDepth,
                offsetX + linearSeatWidth + armrestsWidth - 2 * scaleFactor,
                offsetY + linearSeatDepth,
                offsetX + linearSeatWidth + armrestsWidth - 0.5 * scaleFactor,
                offsetY + linearSeatDepth + 0.5 * scaleFactor,
                offsetX + linearSeatWidth + armrestsWidth,
                offsetY + linearSeatDepth + 2 * scaleFactor,
                offsetX + linearSeatWidth + armrestsWidth,
                offsetY + (sofaTotalDepth - cornerBack) - 2 * scaleFactor,
                offsetX + linearSeatWidth + armrestsWidth - 0.5 * scaleFactor,
                offsetY + (sofaTotalDepth - cornerBack) - 0.5 * scaleFactor,
                offsetX + linearSeatWidth + armrestsWidth - 2 * scaleFactor,
                offsetY + (sofaTotalDepth - cornerBack),
                offsetX +
                  linearSeatWidth -
                  cornerSeatWidth -
                  3 * scaleFactor +
                  2 * scaleFactor,
                offsetY + (sofaTotalDepth - cornerBack),
                offsetX +
                  linearSeatWidth -
                  cornerSeatWidth -
                  3 * scaleFactor +
                  0.5 * scaleFactor,
                offsetY + (sofaTotalDepth - cornerBack) - 0.5 * scaleFactor,
                offsetX + linearSeatWidth - cornerSeatWidth - 3 * scaleFactor,
                offsetY + (sofaTotalDepth - cornerBack) - 2 * scaleFactor,
                offsetX + linearSeatWidth - cornerSeatWidth - 3 * scaleFactor,
                offsetY + linearSeatDepth + 2 * scaleFactor,
                offsetX +
                  linearSeatWidth -
                  cornerSeatWidth -
                  3 * scaleFactor +
                  0.5 * scaleFactor,
                offsetY + linearSeatDepth + 0.5 * scaleFactor,
                offsetX +
                  linearSeatWidth -
                  cornerSeatWidth -
                  3 * scaleFactor +
                  2 * scaleFactor,
                offsetY + linearSeatDepth,
                offsetX + linearSeatWidth - cornerSeatWidth,
                offsetY + linearSeatDepth,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={true}
            />
            <Rect
              x={offsetX - cornerSeatWidth}
              y={offsetY}
              width={linearSeatWidth / 2}
              height={linearSeatDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX + linearSeatWidth / 2 - cornerSeatWidth}
              y={offsetY}
              width={linearSeatWidth / 2}
              height={linearSeatDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX - cornerSeatWidth}
              y={offsetY - cornerBack}
              width={linearSeatWidth}
              height={cornerBack}
              stroke="black"
              strokeWidth={1}
            />
            <Rect
              x={offsetX + linearSeatWidth}
              y={offsetY - cornerBack}
              width={armrestsWidth}
              height={linearSeatDepth + cornerBack}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
          </Layer>
        )}
        <Layer>
          <Line
            points={[
              offsetX + 100,
              offsetY + sofaTotalDepth,
              offsetX + linearSeatWidth + armrestsWidth,
              offsetY + sofaTotalDepth,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX,
              offsetY + sofaTotalDepth,
              offsetX - cornerSeatWidth - armrestsWidth,
              offsetY + sofaTotalDepth,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX}
            y={offsetY + sofaTotalDepth - 9}
            text={productWidth}
            width={100}
            align="center"
            fontSize={18}
          />
          <Line
            points={[
              offsetX - sofaTotalWidth / 2,
              offsetY + ((sofaTotalDepth - cornerBack) / 2) - 50,
              offsetX - sofaTotalWidth / 2,
              offsetY - cornerBack,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - sofaTotalWidth / 2,
              offsetY + (sofaTotalDepth - cornerBack),
              offsetX - sofaTotalWidth / 2,
              offsetY + ((sofaTotalDepth - cornerBack) / 2) + 50,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX - sofaTotalWidth / 2 - 9}
            y={offsetY + ((sofaTotalDepth - cornerBack) / 2) + 50}
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

export default Marsel;
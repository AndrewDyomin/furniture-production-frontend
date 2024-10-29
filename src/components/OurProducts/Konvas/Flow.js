import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

export default function Flow({
  dimensions,
  productWidth,
  productDepth,
  mattressWidth,
  mattressDepth,
  headDepth,
  setHeadDepth,
  tsargWidth,
  setTsargWidth
}) {

  const [scaleFactor, setScaleFactor] = useState(1);

  const bedTotalDepth = productDepth * scaleFactor;
  const bedTotalWidth = productWidth * scaleFactor;

  const sleepingWidth = (mattressWidth + 1) * scaleFactor;
  const sleepingDepth = (mattressDepth + 2) * scaleFactor;

  const head = headDepth * scaleFactor;
  const tsarg = tsargWidth * scaleFactor;

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

  useEffect(() => {
    setHeadDepth(23);
    setTsargWidth(6);
  }, [setHeadDepth, setTsargWidth])

  return (
    <div>
      <Stage width={dimensions.width} height={dimensions.height}>
        <Layer>
            {/* Head */}
          <Rect
            x={offsetX - (bedTotalWidth / 2)}
            y={offsetY - (bedTotalDepth / 2)}
            width={bedTotalWidth / 2}
            height={head}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          <Rect
            x={offsetX}
            y={offsetY - (bedTotalDepth / 2)}
            width={bedTotalWidth / 2}
            height={head}
            stroke="black"
            strokeWidth={1}
            cornerRadius={3}
          />
          {/* Out */}
          <Rect
            x={offsetX - (sleepingWidth / 2) - tsarg}
            y={offsetY - (bedTotalDepth / 2) + (head)}
            width={sleepingWidth + (tsarg * 2)}
            height={sleepingDepth + tsarg}
            stroke="black"
            strokeWidth={1}
            cornerRadius={5}
          />
          {/* Mattress */}
          <Rect
            x={offsetX - ((mattressWidth * scaleFactor) / 2)}
            y={offsetY - (bedTotalDepth / 2) + head + scaleFactor}
            width={mattressWidth * scaleFactor}
            height={mattressDepth * scaleFactor}
            stroke="black"
            strokeWidth={1}
            cornerRadius={8}
          />
        </Layer>
        <Layer>
          <Line
            points={[
              offsetX + 50,
              offsetY + (bedTotalDepth / 2) + (17 * scaleFactor),
              offsetX + (bedTotalWidth / 2),
              offsetY + (bedTotalDepth / 2) + (17 * scaleFactor),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - 50,
              offsetY + (bedTotalDepth / 2) + (17 * scaleFactor),
              offsetX - (bedTotalWidth / 2),
              offsetY + (bedTotalDepth / 2) + (17 * scaleFactor),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX - 50}
            y={offsetY + (bedTotalDepth / 2) + (17 * scaleFactor) - 9}
            text={productWidth}
            width={100}
            align="center"
            fontSize={18}
          />
          <Line
            points={[
              offsetX - (bedTotalWidth / 1.7),
              offsetY - (bedTotalDepth / 2),
              offsetX - (bedTotalWidth / 1.7),
              offsetY - 50,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - (bedTotalWidth / 1.7),
              offsetY + 50,
              offsetX - (bedTotalWidth / 1.7),
              offsetY + (bedTotalDepth / 2),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX - (bedTotalWidth / 1.7) - 9}
            y={offsetY + 50}
            text={productDepth}
            width={100}
            align="center"
            rotation={270}
            fontSize={18}
          />
        </Layer>
        <Layer>
          <Line
            points={[
              offsetX + 50,
              offsetY + (bedTotalDepth / 2) - tsarg - (10 * scaleFactor),
              offsetX + (sleepingWidth / 2) - (10 * scaleFactor),
              offsetY + (bedTotalDepth / 2) - tsarg - (10 * scaleFactor),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - 50,
              offsetY + (bedTotalDepth / 2) - tsarg - (10 * scaleFactor),
              offsetX - (sleepingWidth / 2) + (10 * scaleFactor),
              offsetY + (bedTotalDepth / 2) - tsarg - (10 * scaleFactor),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX - 50}
            y={offsetY + (bedTotalDepth / 2) - tsarg - (10 * scaleFactor) - 9}
            text={mattressWidth}
            width={100}
            align="center"
            fontSize={18}
          />
          <Line
            points={[
              offsetX - (sleepingWidth / 2) + (10 * scaleFactor),
              offsetY - (bedTotalDepth / 2) + head + scaleFactor + (10 * scaleFactor),
              offsetX - (sleepingWidth / 2) + (10 * scaleFactor),
              offsetY - 50,
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Line
            points={[
              offsetX - (sleepingWidth / 2) + (10 * scaleFactor),
              offsetY + 50,
              offsetX - (sleepingWidth / 2) + (10 * scaleFactor),
              offsetY + (bedTotalDepth / 2) - tsarg - (10 * scaleFactor),
            ]}
            stroke="black"
            strokeWidth={1}
            closed={false}
          />
          <Text
            x={offsetX - (sleepingWidth / 2) + (10 * scaleFactor) - 9}
            y={offsetY + 50}
            text={mattressDepth}
            width={100}
            align="center"
            rotation={270}
            fontSize={18}
          />
        </Layer>
      </Stage>
    </div>
  );
}

import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

const Lolly = forwardRef(
  (
    {
      dimensions,
      productWidth,
      productDepth,
      mattressWidth,
      mattressDepth,
      headDepth,
      setHeadDepth,
      tsargWidth,
      setTsargWidth,
    },
    ref
  ) => {
    const [scaleFactor, setScaleFactor] = useState(1);
    const stageRef = useRef(null);
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
      setHeadDepth(22);
      setTsargWidth(7);
    }, [setHeadDepth, setTsargWidth]);

    useImperativeHandle(ref, () => ({
      getImage() {
        return stageRef.current.toDataURL({
          mimeType: 'image/jpeg',
          quality: 1,
        });
      },
    }));

    return (
      <div>
        <Stage
          ref={stageRef}
          width={dimensions.width}
          height={dimensions.height}
        >
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
            {/* Head */}
            <Line
              points={[
                offsetX - (sleepingWidth / 2) + 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + 6 * scaleFactor,
                offsetX - (bedTotalWidth / 2) + 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + 7 * scaleFactor,
                offsetX - bedTotalWidth / 2,
                offsetY - bedTotalDepth / 2 + head / 2,
              ]}
              stroke="black"
              strokeWidth={1}
              lineJoin="round"
              tension={0.4}
            />
            <Line
              points={[
                offsetX - bedTotalWidth / 2,
                offsetY - bedTotalDepth / 2 + head / 2,
                offsetX - (bedTotalWidth / 2) + 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + head - 3 * scaleFactor,
                offsetX - (sleepingWidth / 2) + 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + head,
              ]}
              stroke="black"
              strokeWidth={1}
              lineJoin="round"
              tension={0.4}
            />
            <Line
              points={[
                offsetX + (sleepingWidth / 2) - 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + 6 * scaleFactor,
                offsetX + (bedTotalWidth / 2) - 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + 7 * scaleFactor,
                offsetX + bedTotalWidth / 2,
                offsetY - bedTotalDepth / 2 + head / 2,
              ]}
              stroke="black"
              strokeWidth={1}
              lineJoin="round"
              tension={0.4}
            />
            <Line
              points={[
                offsetX + bedTotalWidth / 2,
                offsetY - bedTotalDepth / 2 + head / 2,
                offsetX + (bedTotalWidth / 2) - 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + head - 3 * scaleFactor,
                offsetX + (sleepingWidth / 2) - 5 * scaleFactor,
                offsetY - (bedTotalDepth / 2) + head,
              ]}
              stroke="black"
              strokeWidth={1}
              lineJoin="round"
              tension={0.4}
            />
            <Line
              points={[
                offsetX - sleepingWidth / 2.8,
                offsetY - bedTotalDepth / 2 + 6 * scaleFactor,
                offsetX - sleepingWidth / 2.8,
                offsetY - (bedTotalDepth / 2) + head,
              ]}
              stroke="black"
              strokeWidth={1}
            />
            <Line
              points={[
                offsetX - sleepingWidth / 8,
                offsetY - bedTotalDepth / 2 + 6 * scaleFactor,
                offsetX - sleepingWidth / 8,
                offsetY - (bedTotalDepth / 2) + head,
              ]}
              stroke="black"
              strokeWidth={1}
            />
            <Line
              points={[
                offsetX + sleepingWidth / 2.8,
                offsetY - bedTotalDepth / 2 + 6 * scaleFactor,
                offsetX + sleepingWidth / 2.8,
                offsetY - (bedTotalDepth / 2) + head,
              ]}
              stroke="black"
              strokeWidth={1}
            />
            <Line
              points={[
                offsetX + sleepingWidth / 8,
                offsetY - bedTotalDepth / 2 + 6 * scaleFactor,
                offsetX + sleepingWidth / 8,
                offsetY - (bedTotalDepth / 2) + head,
              ]}
              stroke="black"
              strokeWidth={1}
            />
            <Rect
              x={offsetX - bedTotalWidth / 2}
              y={offsetY - bedTotalDepth / 2}
              width={bedTotalWidth}
              height={head}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            <Rect
              x={offsetX - bedTotalWidth / 2 + 5 * scaleFactor}
              y={offsetY - bedTotalDepth / 2}
              width={bedTotalWidth - 10 * scaleFactor}
              height={6 * scaleFactor}
              stroke="black"
              strokeWidth={1}
              cornerRadius={3}
            />
            {/* Out */}
            <Rect
              x={offsetX - sleepingWidth / 2 - tsarg}
              y={offsetY - bedTotalDepth / 2 + head}
              width={sleepingWidth + tsarg * 2}
              height={sleepingDepth + tsarg}
              stroke="black"
              strokeWidth={1}
              cornerRadius={5}
            />
            {/* In */}
            <Rect
              x={offsetX - sleepingWidth / 2}
              y={offsetY - bedTotalDepth / 2 + head}
              width={sleepingWidth}
              height={sleepingDepth}
              stroke="black"
              strokeWidth={1}
            />
            {/* Mattress */}
            <Rect
              x={offsetX - (mattressWidth * scaleFactor) / 2}
              y={offsetY - bedTotalDepth / 2 + head + scaleFactor}
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
                offsetY + bedTotalDepth / 2 + 17 * scaleFactor,
                offsetX + bedTotalWidth / 2,
                offsetY + bedTotalDepth / 2 + 17 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Line
              points={[
                offsetX - 50,
                offsetY + bedTotalDepth / 2 + 17 * scaleFactor,
                offsetX - bedTotalWidth / 2,
                offsetY + bedTotalDepth / 2 + 17 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Text
              x={offsetX - 50}
              y={offsetY + bedTotalDepth / 2 + 17 * scaleFactor - 9}
              text={productWidth}
              width={100}
              align="center"
              fontSize={18}
            />
            <Line
              points={[
                offsetX - bedTotalWidth / 1.7,
                offsetY - bedTotalDepth / 2,
                offsetX - bedTotalWidth / 1.7,
                offsetY - 50,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Line
              points={[
                offsetX - bedTotalWidth / 1.7,
                offsetY + 50,
                offsetX - bedTotalWidth / 1.7,
                offsetY + bedTotalDepth / 2,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Text
              x={offsetX - bedTotalWidth / 1.7 - 9}
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
                offsetY + bedTotalDepth / 2 - tsarg - 10 * scaleFactor,
                offsetX + sleepingWidth / 2 - 10 * scaleFactor,
                offsetY + bedTotalDepth / 2 - tsarg - 10 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Line
              points={[
                offsetX - 50,
                offsetY + bedTotalDepth / 2 - tsarg - 10 * scaleFactor,
                offsetX - sleepingWidth / 2 + 10 * scaleFactor,
                offsetY + bedTotalDepth / 2 - tsarg - 10 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Text
              x={offsetX - 50}
              y={offsetY + bedTotalDepth / 2 - tsarg - 10 * scaleFactor - 9}
              text={mattressWidth}
              width={100}
              align="center"
              fontSize={18}
            />
            <Line
              points={[
                offsetX - sleepingWidth / 2 + 10 * scaleFactor,
                offsetY -
                  bedTotalDepth / 2 +
                  head +
                  scaleFactor +
                  10 * scaleFactor,
                offsetX - sleepingWidth / 2 + 10 * scaleFactor,
                offsetY - 50,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Line
              points={[
                offsetX - sleepingWidth / 2 + 10 * scaleFactor,
                offsetY + 50,
                offsetX - sleepingWidth / 2 + 10 * scaleFactor,
                offsetY + bedTotalDepth / 2 - tsarg - 10 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Text
              x={offsetX - sleepingWidth / 2 + 10 * scaleFactor - 9}
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
);

export default Lolly;

import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { Stage, Layer, Rect, Line, Text, Group } from 'react-konva';

const FayneeMini = forwardRef(
  (
    { dimensions, productWidth, productDepth, activeModules, setActiveModules },
    ref
  ) => {
    const [scaleFactor, setScaleFactor] = useState(1);

    const stageRef = useRef(null);

    const sofaTotalDepth = productDepth * scaleFactor;
    const sofaTotalWidth = productWidth * scaleFactor;

    const backHeight = 20 * scaleFactor;

    const offsetX = dimensions.width / 2;
    const offsetY = dimensions.height / 2;

    useEffect(() => {
      const standardArr = ['ARML', 'FM01', 'FM01', 'ARMR'];
      const sortedModules = standardArr
        .map(id => possibleModules.find(module => module.id === id))
        .filter(Boolean);
        console.log(sortedModules)
      setActiveModules(sortedModules);
    }, [setActiveModules]);

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
        return stageRef.current.toDataURL({
          mimeType: 'image/jpeg',
          quality: 1,
        });
      },
    }));

    let possibleModules = [
      {
        id: 'FM01',
        name: 'модуль',
        position: { x: offsetX, y: offsetY },
        height: 115,
        width: 100,
        mark: (position, height, width) => (
          <>
            <Line
              points={[
                position.x,
                position.y + 8 * scaleFactor,
                position.x + width / 2,
                position.y + 3 * scaleFactor,
                position.x + width,
                position.y + 8 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
              lineJoin="round"
              tension={0.7}
            />
            <Rect
              x={position.x}
              y={position.y + 8 * scaleFactor}
              width={width}
              height={backHeight}
              stroke="black"
              strokeWidth={1}
              cornerRadius={2}
            />
            <Rect
              x={position.x}
              y={position.y + height * 0.18}
              width={width}
              height={height - 28 * scaleFactor}
              stroke="black"
              strokeWidth={1}
              cornerRadius={4}
            />
          </>
        ),
      },
      {
        id: 'ARML',
        name: 'подлокотник левый',
        position: { x: offsetX, y: offsetY },
        height: 120,
        width: 17,
        mark: (position, height, width) => (
          <>
            <Line
              points={[
                position.x + 2.5 * scaleFactor,
                position.y,
                position.x,
                position.y + height / 2,
                position.x + 2.5 * scaleFactor,
                position.y + height,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
              lineJoin="round"
              tension={1}
            />
            <Rect
              x={position.x + 2.5 * scaleFactor}
              y={position.y}
              width={width - 2.5 * scaleFactor}
              height={height}
              stroke="black"
              strokeWidth={1}
              cornerRadius={[0, 3, 3, 0]}
            />
          </>
        ),
      },
      {
        id: 'ARMR',
        name: 'подлокотник правый',
        position: { x: offsetX, y: offsetY },
        height: 120,
        width: 17,
        mark: (position, height, width) => (
          <>
            <Line
              points={[
                position.x + width - 2.5 * scaleFactor,
                position.y,
                position.x + width,
                position.y + height / 2,
                position.x + width - 2.5 * scaleFactor,
                position.y + height,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
              lineJoin="round"
              tension={1}
            />
            <Rect
              x={position.x}
              y={position.y}
              width={width - 2.5 * scaleFactor}
              height={height}
              stroke="black"
              strokeWidth={1}
              cornerRadius={[3, 0, 0, 3]}
            />
          </>
        ),
      },
      // {
      //   id: 'BKPL',
      //   name: 'пристенок',
      //   position: { x: offsetX, y: offsetY },
      //   height: 3,
      //   width: 200,
      //   mark: (position, height, width) => (
      //     <>
      //       <Rect
      //         x={offsetX - sofaTotalWidth / 2 + armrestsWidth}
      //         y={offsetY - sofaTotalDepth / 2}
      //         width={sofaTotalWidth - armrestsWidth * 2}
      //         height={3 * scaleFactor}
      //         stroke="black"
      //         strokeWidth={1}
      //         cornerRadius={[3, 3, 0, 0]}
      //       />
      //     </>
      //   ),
      // },
    ];

    const drawModules = () => {
      let currentX = offsetX - sofaTotalWidth / 2;
      let currentY = offsetY - sofaTotalDepth / 2;
    
      return (
        <Layer>
          {activeModules.map((module, index) => {
            const updatedPosition = {
              x: currentX,
              y: currentY,
            };

            const height = module.height * scaleFactor;
            const width = module.width * scaleFactor;
    
            currentX += module.width * scaleFactor;
            currentY += 0;
    
            return (
              <Group key={index}>
                {module.mark(updatedPosition, height, width)}
              </Group>
            );
          })}
        </Layer>
      );
    };
    

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
          {drawModules()}
          <Layer>
            <Line
              points={[
                offsetX + 50,
                offsetY + sofaTotalDepth / 1.4,
                offsetX + sofaTotalWidth / 2,
                offsetY + sofaTotalDepth / 1.4,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Line
              points={[
                offsetX - 50,
                offsetY + sofaTotalDepth / 1.4,
                offsetX - sofaTotalWidth / 2,
                offsetY + sofaTotalDepth / 1.4,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Text
              x={offsetX - 50}
              y={offsetY + sofaTotalDepth / 1.4 - 9}
              text={productWidth}
              width={100}
              align="center"
              fontSize={18}
            />
            <Line
              points={[
                offsetX - sofaTotalWidth / 1.7,
                offsetY - sofaTotalDepth / 2,
                offsetX - sofaTotalWidth / 1.7,
                offsetY - 50,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Line
              points={[
                offsetX - sofaTotalWidth / 1.7,
                offsetY + 50,
                offsetX - sofaTotalWidth / 1.7,
                offsetY + sofaTotalDepth / 2,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
            />
            <Text
              x={offsetX - sofaTotalWidth / 1.7 - 9}
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
  }
);

export default FayneeMini;

import React, {
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { Stage, Layer, Rect, Line, Text, Group } from 'react-konva';

const SwipiCorner = forwardRef(
  (
    {
      dimensions,
      productWidth,
      productDepth,
      activeModules,
      setActiveModules,
      standardProportions,
      seatModules,
      setSeatModule,
      angleDirection,
    },
    ref
  ) => {
    const [scaleFactor, setScaleFactor] = useState(1);

    useEffect(() => {
      const value = Math.min(
        (0.7 * dimensions.width) / productWidth,
        (0.7 * dimensions.height) / productDepth
      );
      if (value > 0 && value !== scaleFactor) {
        setScaleFactor(value);
      }
    }, [dimensions, productWidth, productDepth, scaleFactor]);

    const stageRef = useRef(null);

    const sofaTotalDepth = productDepth * scaleFactor;
    const sofaTotalWidth = productWidth * scaleFactor;

    const offsetX = dimensions.width / 2;
    const offsetY = dimensions.height / 2;

    const isARM =
      activeModules.some(module => module.id === 'ARML') &&
      activeModules.some(module => module.id === 'ARMR');

    useImperativeHandle(ref, () => ({
      getImage() {
        return stageRef.current.toDataURL({
          mimeType: 'image/jpeg',
          quality: 1,
        });
      },
    }));

    let possibleModules = useMemo(
      () => [
        {
          id: 'SW01',
          name: 'модуль',
          position: { x: offsetX, y: offsetY },
          height: 115,
          width: 90,
          mark: (position, height, width, arm, scaleFactor) => (
            <>
              <Line
                points={[
                  position.x,
                  position.y + 6 * scaleFactor,
                  position.x + width / 2,
                  position.y + 3 * scaleFactor,
                  position.x + width,
                  position.y + 6 * scaleFactor,
                ]}
                stroke="black"
                strokeWidth={1}
                closed={false}
                lineJoin="round"
                tension={0.7}
              />
              <Rect
                x={position.x}
                y={position.y + 6 * scaleFactor}
                width={width}
                height={height / 6}
                stroke="black"
                strokeWidth={1}
                cornerRadius={2}
              />
              <Rect
                x={position.x}
                y={position.y + height / 6 + 6 * scaleFactor}
                width={width}
                height={height - (height / 6 + 6 * scaleFactor)}
                stroke="black"
                strokeWidth={1}
                cornerRadius={4}
              />
            </>
          ),
        },
        {
          id: 'SC01',
          name: 'угловой модуль',
          position: { x: offsetX, y: offsetY },
          height: 170,
          width: 90,
          mark: (position, height, width, arm, scaleFactor) => (
            <>
              <Line
                points={[
                  position.x,
                  position.y + 6 * scaleFactor,
                  position.x + width / 2,
                  position.y + 3 * scaleFactor,
                  position.x + width,
                  position.y + 6 * scaleFactor,
                ]}
                stroke="black"
                strokeWidth={1}
                closed={false}
                lineJoin="round"
                tension={0.7}
              />
              <Rect
                x={position.x}
                y={position.y + 6 * scaleFactor}
                width={width}
                height={19 * scaleFactor}
                stroke="black"
                strokeWidth={1}
                cornerRadius={2}
              />
              <Rect
                x={position.x}
                y={position.y + 3 * scaleFactor}
                width={width}
                height={height}
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
          height: 115,
          width: 25,
          mark: (position, height, width, arm, scaleFactor) => (
            <>
              <Rect
                x={position.x}
                y={position.y}
                width={width}
                height={height}
                stroke="black"
                strokeWidth={1}
                cornerRadius={[5, 3, 3, 5]}
              />
              <Rect
                x={position.x + 5 * scaleFactor}
                y={position.y}
                width={width - 5 * scaleFactor}
                height={height}
                stroke="black"
                strokeWidth={1}
                cornerRadius={[3, 3, 3, 3]}
              />
            </>
          ),
        },
        {
          id: 'ARMR',
          name: 'подлокотник правый',
          position: { x: offsetX, y: offsetY },
          height: 115,
          width: 25,
          mark: (position, height, width, arm, scaleFactor) => (
            <>
              <Rect
                x={position.x}
                y={position.y}
                width={width}
                height={height}
                stroke="black"
                strokeWidth={1}
                cornerRadius={[3, 5, 5, 3]}
              />
              <Rect
                x={position.x}
                y={position.y}
                width={width - 5 * scaleFactor}
                height={height}
                stroke="black"
                strokeWidth={1}
                cornerRadius={[3, 3, 3, 3]}
              />
            </>
          ),
        },
        {
          id: 'BKPL',
          name: 'пристенок',
          position: { x: offsetX, y: offsetY },
          height: 3,
          width: 200,
          mark: (position, height, width, arm, scaleFactor) => {
            if (arm) {
              return (
                <>
                  <Rect
                    x={position.x}
                    y={position.y}
                    width={width}
                    height={height}
                    stroke="black"
                    strokeWidth={1}
                    cornerRadius={[3, 3, 0, 0]}
                  />
                </>
              );
            } else {
              console.warn('not enough arms');
              return <></>;
            }
          },
        },
      ],
      [offsetX, offsetY]
    );

    const drawModules = () => {
      let backStrap = {};

      const seatModules = activeModules.filter(module => module.id === 'SW01' || module.id === 'SC01' || module.id === 'SC02');

      if (seatModules.length !== 0) {
        let acc = 0;
        seatModules.forEach(module => {
          acc += module.width;
        });
        backStrap.width = acc * scaleFactor;
      }

      return (
        <Layer>
          {activeModules.map((module, index) => {
            const height = module.height * scaleFactor;
            const width = module.width * scaleFactor;

            return (
              <Group key={index}>
                {module.id === 'BKPL'
                  ? module.mark(
                      module.position,
                      height,
                      backStrap.width,
                      isARM,
                      scaleFactor
                    )
                  : module.mark(
                      module.position,
                      height,
                      width,
                      isARM,
                      scaleFactor
                    )}
              </Group>
            );
          })}
        </Layer>
      );
    };

    useEffect(() => {
      if (
        activeModules.length !== 0 &&
        activeModules[0].position.x !== offsetX - sofaTotalWidth / 2 &&
        standardProportions
      ) {
        const sortedModules = activeModules
          .map(item => possibleModules.find(module => module.id === item.id))
          .filter(Boolean);
        setActiveModules(sortedModules);
      }
    }, [
      activeModules,
      offsetX,
      possibleModules,
      setActiveModules,
      sofaTotalWidth,
      standardProportions,
    ]);

    useEffect(() => {
      const standardArr = angleDirection.value === '7' ? ['ARML', 'SC01', 'SW01', 'SW01', 'ARMR', 'BKPL'] : ['ARML', 'SW01', 'SW01', 'SC02', 'ARMR', 'BKPL'];
      if (activeModules.length === 0) {
        const sortedModules = standardArr
          .map(id => possibleModules.find(module => module.id === id))
          .filter(Boolean);
        setActiveModules(sortedModules);
      }

      if (
        activeModules.length !== 0 &&
        activeModules[0].position.x === offsetX
      ) {
        let currentX = offsetX - sofaTotalWidth / 2;
        let currentY = offsetY - sofaTotalDepth / 2;

        const positionedModules = activeModules.map((module, index) => {
          if (index !== 0) {
            currentX += activeModules[index - 1].width * scaleFactor;
          }
          if (module.id === 'BKPL') {
            currentX =
              offsetX -
              sofaTotalWidth / 2 +
              activeModules[0].width * scaleFactor;
            currentY = offsetY - sofaTotalDepth / 2;
          }
          const updatedPosition = { x: currentX, y: currentY };

          return { ...module, position: updatedPosition };
        });
        setActiveModules(positionedModules);
      }
    }, [
      activeModules,
      setActiveModules,
      scaleFactor,
      possibleModules,
      offsetX,
      offsetY,
      sofaTotalDepth,
      sofaTotalWidth,
    ]);

    useEffect(() => {
      const seatModules = activeModules.filter(module => module.id === 'SW01' || module.id === 'SC01' || module.id === 'SC02');
      const seatWidth = seatModules.reduce(
        (acc, module) => acc + module.width,
        0
      );
      const armsModules = activeModules.filter(
        module => module.id === 'ARML' || module.id === 'ARMR'
      );
      const armsWidth = armsModules.reduce(
        (acc, module) => acc + module.width,
        0
      );
      const total = seatWidth + armsWidth;
      let lastSeat = 0;

      activeModules.forEach((module, index) => {
        if (module.id === 'SW01') {
          lastSeat = index;
        }
      });

      setSeatModule({ ...seatModules[0], i: lastSeat });

      if (productWidth >= 100 && standardProportions) {
        if (!(productWidth === total || total === 0)) {
          const newSeatWidth = productWidth - armsWidth;
          const resizedModules = activeModules.map(module => ({
            ...module,
            width:
              module.id === 'ARML' || module.id === 'ARMR'
                ? armsWidth / armsModules.length
                : module.id === 'SW01'
                ? newSeatWidth / seatModules.length
                : module.width,
          }));

          setActiveModules(resizedModules);
        }
      } else if (productWidth >= 100 && !standardProportions) {
        let currentX = offsetX - sofaTotalWidth / 2;
        let currentY = offsetY - sofaTotalDepth / 2;

        const resizedModules = activeModules.map((module, index) => {
          if (index > 0) {
            currentX += activeModules[index - 1].width * scaleFactor;
          }

          if (module.id === 'BKPL') {
            currentX =
              offsetX -
              sofaTotalWidth / 2 +
              activeModules[0].width * scaleFactor;
            currentY = offsetY - sofaTotalDepth / 2;
          }
          const updatedPosition = { x: currentX, y: currentY };
          return { ...module, position: updatedPosition };
        });

        let activeXCoords = activeModules.map(module =>
          Math.round(module.position.x)
        );
        let resizedXCoords = resizedModules.map(module =>
          Math.round(module.position.x)
        );

        if (JSON.stringify(resizedXCoords) !== JSON.stringify(activeXCoords)) {
          setActiveModules(resizedModules);
        }
      }
    }, [
      productWidth,
      activeModules,
      setActiveModules,
      standardProportions,
      setSeatModule,
      offsetX,
      offsetY,
      scaleFactor,
      sofaTotalDepth,
      sofaTotalWidth,
    ]);

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

export default SwipiCorner;

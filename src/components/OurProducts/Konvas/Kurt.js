import React, {
  useMemo,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { Stage, Layer, Rect, Line, Text, Group } from 'react-konva';

const Kurt = forwardRef(
  (
    {
      dimensions,
      productWidth,
      productDepth,
      activeModules,
      setActiveModules,
      standardProportions,
      seatModule,
      setSeatModule,
      cornerModule,
      setCornerModule,
      angleDirection,
    },
    ref
  ) => {
    const scaleFactor = useMemo(() => {
      return Math.min(
        (0.7 * dimensions.width) / productWidth,
        (0.7 * dimensions.height) / productDepth
      );
    }, [dimensions, productWidth, productDepth]);

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
          id: 'K01',
          name: 'модуль',
          position: { x: offsetX, y: offsetY },
          height: 100,
          width: 120,
          mark: (position, height, width, arm, scaleFactor) => (
            <>
              <Rect
                x={position.x}
                y={position.y + 4 * scaleFactor}
                width={width}
                height={22 * scaleFactor}
                stroke="black"
                strokeWidth={1}
                cornerRadius={2}
              />
              <Rect
                x={position.x}
                y={position.y + 26 * scaleFactor}
                width={width}
                height={height - 25 * scaleFactor}
                stroke="black"
                strokeWidth={1}
                cornerRadius={4}
              />
            </>
          ),
        },
        {
          id: 'KC01',
          name: 'угловой модуль',
          position: { x: offsetX, y: offsetY },
          height: 150,
          width: 80,
          mark: (position, height, width, arm, scaleFactor) => (
            <>
              <Rect
                x={position.x}
                y={position.y + 4 * scaleFactor}
                width={width}
                height={22 * scaleFactor}
                stroke="black"
                strokeWidth={1}
                cornerRadius={2}
              />
              <Rect
                x={position.x}
                y={position.y + 26 * scaleFactor}
                width={width}
                height={height - 25 * scaleFactor}
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
          height: 100,
          width: 17.5,
          mark: (position, height, width, arm, scaleFactor, angleDirection) => (
            <>
              <Rect
                x={position.x}
                y={position.y}
                width={width}
                height={101 * scaleFactor}
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
          height: 100,
          width: 17.5,
          mark: (position, height, width, arm, scaleFactor, angleDirection) => (
            <>
              <Rect
                x={position.x}
                y={position.y}
                width={width}
                height={101 * scaleFactor}
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
              return <></>;
            }
          },
        },
      ],
      [offsetX, offsetY, productDepth]
    );

    const drawModules = () => {
      let backStrap = {};

      const sleepingArea = activeModules.filter(
        module => module.id === 'K01' || module.id === 'KC01'
      );

      if (sleepingArea.length !== 0) {
        let acc = 0;
        sleepingArea.forEach(module => {
          acc += module.width;
        });
        backStrap.width = acc * scaleFactor;
      }

      return (
        <Layer>
          {activeModules.map((module, index) => {
            const height =
              module.id === 'K01' || module.id === 'BKPL'
                ? module.height * scaleFactor
                : productDepth * scaleFactor;
            const width = module.width * scaleFactor;

            return (
              <Group key={index}>
                {module.id === 'BKPL'
                  ? module.mark(
                      module.position,
                      height,
                      backStrap.width,
                      isARM,
                      scaleFactor,
                      angleDirection
                    )
                  : module.mark(
                      module.position,
                      height,
                      width,
                      isARM,
                      scaleFactor,
                      angleDirection
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
      const standardArr =
        angleDirection.value === '7'
          ? ['ARML', 'KC01', 'K01', 'ARMR', 'BKPL']
          : ['ARML', 'K01', 'KC01', 'ARMR', 'BKPL'];

      if (activeModules.length === 0) {
        const sortedModules = standardArr
          .map(id => possibleModules.find(module => module.id === id))
          .filter(Boolean);
        setActiveModules(sortedModules);
      }
    }, [activeModules, setActiveModules, possibleModules, angleDirection]);

    useEffect(() => {
      if (productWidth < 100 || activeModules.length === 0) return;

      let lastSeat = 0;

      activeModules.forEach((module, index) => {
        if (module.id === 'K01') {
          lastSeat = index;
        }
      });

      if (!seatModule.width && !cornerModule.width) {
        setSeatModule({
          ...activeModules.find(module => module.id === 'K01'),
          i: lastSeat,
        });
        setCornerModule(activeModules.find(module => module.id === 'KC01'));
      }

      const seatModules = activeModules.filter(module => module.id === 'K01');
      const armsModules = activeModules.filter(
        module => module.id === 'ARML' || module.id === 'ARMR'
      );

      const seatWidth = seatModules.reduce(
        (acc, module) => acc + module.width,
        0
      );
      const armsWidth = armsModules.reduce(
        (acc, module) => acc + module.width,
        0
      );
      const totalWidth = seatWidth + armsWidth;

      if (productWidth !== totalWidth) {
        const newSeatWidth = productWidth - armsWidth - cornerModule.width;
        const resizedModules = activeModules.map(module => ({
          ...module,
          width:
            module.id === 'ARML' || module.id === 'ARMR'
              ? armsWidth / armsModules.length
              : seatModules.includes(module)
              ? newSeatWidth / seatModules.length
              : module.width,
        }));

        if (JSON.stringify(resizedModules) !== JSON.stringify(activeModules)) {
          setActiveModules(resizedModules);
        }
      }
    }, [productWidth, activeModules, productWidth, cornerModule]);

    useEffect(() => {
      if (activeModules.length === 0) return;

      let currentX = offsetX - sofaTotalWidth / 2;
      let currentY = offsetY - sofaTotalDepth / 2;

      const positionedModules = activeModules.map((module, index) => {
        if (index > 0) {
          currentX += activeModules[index - 1].width * scaleFactor;
        }

        if (module.id === 'BKPL') {
          currentX =
            offsetX - sofaTotalWidth / 2 + activeModules[0].width * scaleFactor;
          currentY = offsetY - sofaTotalDepth / 2;
        }

        return { ...module, position: { x: currentX, y: currentY } };
      });

      if (JSON.stringify(positionedModules) !== JSON.stringify(activeModules)) {
        setActiveModules(positionedModules);
      }
    }, [
      activeModules,
      setActiveModules,
      standardProportions,
      offsetX,
      offsetY,
      sofaTotalWidth,
      sofaTotalDepth,
      scaleFactor,
    ]);

    useEffect(() => {
      if (activeModules.length === 0) return;

      const indexOfSC01 = activeModules.findIndex(
        module => module.id === 'KC01'
      );
      if (indexOfSC01 === -1) return;

      let newModules = [
        ...activeModules.filter(module => module.id !== 'KC01'),
      ];

      let firstSeat = null;
      let lastSeat = 0;

      newModules.forEach((module, index) => {
        if (module.id === 'K01') {
          if (firstSeat === null) {
            firstSeat = index;
          }
          lastSeat = index;
        }
      });

      if (firstSeat === -1 || lastSeat === -1) return;

      if (angleDirection.value !== '7') {
        newModules.splice(lastSeat + 1, 0, activeModules[indexOfSC01]);
      } else {
        newModules.splice(firstSeat, 0, activeModules[indexOfSC01]);
      }

      if (JSON.stringify(newModules) !== JSON.stringify(activeModules)) {
        setActiveModules(prevModules => {
          if (JSON.stringify(prevModules) !== JSON.stringify(newModules)) {
            return newModules;
          }
          return prevModules;
        });
      }
    }, [angleDirection]);

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

export default Kurt;

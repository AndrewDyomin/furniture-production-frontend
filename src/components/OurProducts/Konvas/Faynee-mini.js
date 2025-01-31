import React, {
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { Stage, Layer, Rect, Line, Text, Group } from 'react-konva';

const FayneeMini = forwardRef(
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
          id: 'FM01',
          name: 'модуль',
          position: { x: offsetX, y: offsetY },
          height: 120,
          width: 100,
          mark: (position, height, width, arm, scaleFactor) => (
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
                height={height / 6}
                stroke="black"
                strokeWidth={1}
                cornerRadius={2}
              />
              <Rect
                x={position.x}
                y={position.y + height / 6 + 8 * scaleFactor}
                width={width}
                height={height - (height / 6 + 8 * scaleFactor)}
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
          width: 17.5,
          mark: (position, height, width, arm, scaleFactor) => (
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
          width: 17.5,
          mark: (position, height, width, arm, scaleFactor) => (
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

      const seatModules = activeModules.filter(module => module.id === 'FM01');

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

    useEffect(() => { // если сбилась позиция
      if (
        activeModules.length !== 0 &&
        activeModules[0].position.x !== offsetX - sofaTotalWidth / 2
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
    ]);

    useEffect(() => { // первичный набор модулей и позиции
      const standardArr = ['ARML', 'FM01', 'FM01', 'ARMR', 'BKPL'];
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

    useEffect(() => { //при стандартных пропорциях пересчет размера модулей
      if (productWidth >= 100) {

        const seatModules = activeModules.filter(module => module.id === 'FM01');
        const seatWidth = seatModules.reduce((acc, module) => acc + module.width, 0);
        const armsModules = activeModules.filter(
          module => module.id === 'ARML' || module.id === 'ARMR'
        );
        const armsWidth = armsModules.reduce(
          (acc, module) => acc + module.width,
          0
        );

        const total = seatWidth + armsWidth;

        let i = 0;

        activeModules.forEach( (module, index) => {
          if (module.id === 'FM01') {
            i = index
          };
        })

        setSeatModule({ ...seatModules[0], i})

        if (!(productWidth === total || total === 0 || !standardProportions)) {
          const newSeatWidth = productWidth - armsWidth;
          const resizedModules = activeModules.map(module => ({
            ...module,
            width:
              module.id === 'ARML' || module.id === 'ARMR'
                ? armsWidth / armsModules.length
                : module.id === 'FM01'
                ? newSeatWidth / seatModules.length
                : module.width,
          }));

          setActiveModules(resizedModules);
          
        }
      }
    }, [productWidth, activeModules, setActiveModules, standardProportions, setSeatModule]);

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

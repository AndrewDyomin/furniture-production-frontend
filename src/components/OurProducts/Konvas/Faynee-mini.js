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
    { dimensions, productWidth, productDepth, activeModules, setActiveModules },
    ref
  ) => {
    const [scaleFactor, setScaleFactor] = useState(1);

    const stageRef = useRef(null);

    const sofaTotalDepth = productDepth * scaleFactor;
    const sofaTotalWidth = productWidth * scaleFactor;

    const offsetX = dimensions.width / 2;
    const offsetY = dimensions.height / 2;

    const isARM = activeModules.some(module => module.id === 'ARML') && activeModules.some(module => module.id === 'ARMR');

    useEffect(() => {
      const value = Math.min(
        (0.7 * dimensions.width) / productWidth,
        (0.7 * dimensions.height) / productDepth
      );
      if (value > 0 || value !== scaleFactor) {
        setScaleFactor(value);
      }
    }, [dimensions, productWidth, productDepth, scaleFactor]);

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
          width: 17.5,
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
        {
          id: 'BKPL',
          name: 'пристенок',
          position: { x: offsetX, y: offsetY },
          height: 3,
          width: 200,
          mark: (position, height, width, arm) => {
            if (arm) {
              return (
                <>
                  <Rect
                    x={activeModules[0] ? offsetX - sofaTotalWidth / 2 + activeModules[0].width * scaleFactor
                        : 0
                    }
                    y={position.y}
                    width={
                      activeModules[0]
                        ? sofaTotalWidth -
                          activeModules[0].width * scaleFactor +
                          activeModules[activeModules.length - 2].width *
                            scaleFactor
                        : 0
                    }
                    height={3 * scaleFactor}
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
      [offsetX, offsetY, scaleFactor, activeModules, sofaTotalWidth]
    );

    const drawModules = () => {
      let currentX = offsetX - sofaTotalWidth / 2;
      let currentY = offsetY - sofaTotalDepth / 2;
      let backStrap = {}

      const seatModules = activeModules.filter(module => module.id === 'FM01')
      if (seatModules.length !== 0) {
        backStrap.position = {x: seatModules[0].position.x, y: seatModules[0].position.y}
        backStrap.width = seatModules[0].width + seatModules[1].width
      }

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
                {module.id === 'BKPL' ? 
                  module.mark(
                    backStrap.position, 
                    height, 
                    width, 
                    isARM)
                : module.mark(updatedPosition, height, width, isARM)}
              </Group>
            );
          })}
        </Layer>
      );
    };

    useEffect(() => {
      const standardArr = ['ARML', 'FM01', 'FM01', 'ARMR', 'BKPL'];
      let currentX =  - sofaTotalWidth / 2;
      let currentY = offsetY - sofaTotalDepth / 2;

      if (activeModules.length === 0) {
        const sortedModules = standardArr
          .map(id => possibleModules.find(module => module.id === id))
          .filter(Boolean);
        setActiveModules(sortedModules);
      } else if (activeModules[0].position.x === offsetX) {
        
        const updatedPosition = { x: currentX, y: currentY};

        const positionedModules = activeModules.map((module, index) => {
        if (index !== 0) {
          currentX += module.width * scaleFactor;
        } 
          
          return { ...module, position: updatedPosition }
        })
        setActiveModules(positionedModules);
      }
    }, [activeModules, setActiveModules, scaleFactor, possibleModules, offsetX, offsetY, sofaTotalDepth, sofaTotalWidth]);

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

import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

const FayneeMini = forwardRef(
  ({ dimensions, productWidth, productDepth }, ref) => {
    const [scaleFactor, setScaleFactor] = useState(1);
    const [activeModules, setActiveModules] = useState([
      'ARML',
      'FM01',
      'FM02',
      'ARMR',
      'BKPL',
    ]);
    const [modulePositions, setModulePositions] = useState({});
    const stageRef = useRef(null);

    const sofaTotalDepth = productDepth * scaleFactor;
    const sofaTotalWidth = productWidth * scaleFactor;

    const armrestsWidth = 17.5 * scaleFactor;
    const armrestsDepth = sofaTotalDepth - 2 * scaleFactor;

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

    useImperativeHandle(ref, () => ({
      getImage() {
        return stageRef.current.toDataURL({
          mimeType: 'image/jpeg',
          quality: 1,
        });
      },
    }));

    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const handleDragMove = (id, event) => {
      const { x, y } = event.target.position();
      let snappedX = x;
      let snappedY = y;

      // Пробегаем по позициям всех модулей
      Object.keys(modulePositions).forEach(key => {
        if (key === id) return; // Пропускаем сам модуль

        const { x: otherX, y: otherY } = modulePositions[key];

        // Проверяем расстояние по X и Y
        if (calculateDistance(x, y, otherX, otherY) <= 20) {
          // Расстояние притяжения
          snappedX = otherX;
          snappedY = otherY;
        }
      });

      // Обновляем позицию модуля
      event.target.position({ x: snappedX, y: snappedY });
    };

    const handleDragEnd = (id, event) => {
      const { x, y } = event.target.position();
      setModulePositions(prev => ({
        ...prev,
        [id]: { x, y },
      }));
    };

    const possibleModules = [
      {
        id: 'FM01',
        position: { x: offsetX, y: offsetY },
        mark: (position) => (
          <Layer draggable={true}>
            <Line
              points={[
                offsetX - sofaTotalWidth / 2 + armrestsWidth,
                offsetY - sofaTotalDepth / 2 + 8 * scaleFactor,
                offsetX - (sofaTotalWidth - armrestsWidth * 2) / 4,
                offsetY - sofaTotalDepth / 2 + 3 * scaleFactor,
                offsetX,
                offsetY - sofaTotalDepth / 2 + 8 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
              lineJoin="round"
              tension={0.7}
            />
            <Rect
              x={offsetX - sofaTotalWidth / 2 + armrestsWidth}
              y={offsetY - sofaTotalDepth / 2 + 8 * scaleFactor}
              width={(sofaTotalWidth - armrestsWidth * 2) / 2}
              height={20 * scaleFactor}
              stroke="black"
              strokeWidth={1}
              cornerRadius={2}
            />
            <Rect
              x={offsetX - sofaTotalWidth / 2 + armrestsWidth}
              y={offsetY - sofaTotalDepth / 2 + 28 * scaleFactor}
              width={(sofaTotalWidth - armrestsWidth * 2) / 2}
              height={sofaTotalDepth - 28 * scaleFactor}
              stroke="black"
              strokeWidth={1}
              cornerRadius={4}
            />
          </Layer>
        ),
      },
      {
        id: 'FM02',
        position: { x: offsetX + 200, y: offsetY },
        mark: (position) => (
          <Layer draggable={true}>
            <Line
              points={[
                offsetX,
                offsetY - sofaTotalDepth / 2 + 8 * scaleFactor,
                offsetX + (sofaTotalWidth - armrestsWidth * 2) / 4,
                offsetY - sofaTotalDepth / 2 + 3 * scaleFactor,
                offsetX + (sofaTotalWidth - armrestsWidth * 2) / 2,
                offsetY - sofaTotalDepth / 2 + 8 * scaleFactor,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
              lineJoin="round"
              tension={0.7}
            />
            <Rect
              x={offsetX}
              y={offsetY - sofaTotalDepth / 2 + 8 * scaleFactor}
              width={(sofaTotalWidth - armrestsWidth * 2) / 2}
              height={20 * scaleFactor}
              stroke="black"
              strokeWidth={1}
              cornerRadius={2}
            />
            <Rect
              x={offsetX}
              y={offsetY - sofaTotalDepth / 2 + 28 * scaleFactor}
              width={(sofaTotalWidth - armrestsWidth * 2) / 2}
              height={sofaTotalDepth - 28 * scaleFactor}
              stroke="black"
              strokeWidth={1}
              cornerRadius={4}
            />
          </Layer>
        ),
      },
      {
        id: 'ARML',
        mark: (position) => (
          <Layer draggable={true}>
            <Line
              points={[
                offsetX - sofaTotalWidth / 2 + 2.5 * scaleFactor,
                offsetY - sofaTotalDepth / 2,
                offsetX - sofaTotalWidth / 2,
                offsetY,
                offsetX - sofaTotalWidth / 2 + 2.5 * scaleFactor,
                offsetY + sofaTotalDepth / 2,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
              lineJoin="round"
              tension={1}
            />
            <Rect
              x={offsetX - sofaTotalWidth / 2 + 2.5 * scaleFactor}
              y={offsetY - sofaTotalDepth / 2}
              width={armrestsWidth - 2.5 * scaleFactor}
              height={sofaTotalDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={[0, 3, 3, 0]}
            />
          </Layer>
        ),
      },
      {
        id: 'ARMR',
        mark: (position) => (
          <Layer draggable={true}>
            <Line
              points={[
                offsetX + sofaTotalWidth / 2 - 2.5 * scaleFactor,
                offsetY - sofaTotalDepth / 2,
                offsetX + sofaTotalWidth / 2,
                offsetY,
                offsetX + sofaTotalWidth / 2 - 2.5 * scaleFactor,
                offsetY + sofaTotalDepth / 2,
              ]}
              stroke="black"
              strokeWidth={1}
              closed={false}
              lineJoin="round"
              tension={1}
            />
            <Rect
              x={offsetX + sofaTotalWidth / 2 - armrestsWidth}
              y={offsetY - sofaTotalDepth / 2}
              width={armrestsWidth - 2.5 * scaleFactor}
              height={sofaTotalDepth}
              stroke="black"
              strokeWidth={1}
              cornerRadius={[3, 0, 0, 3]}
            />
          </Layer>
        ),
      },
      {
        id: 'BKPL',
        mark: (position) => (
          <Layer draggable={true}>
            <Rect
              x={offsetX - sofaTotalWidth / 2 + armrestsWidth}
              y={offsetY - sofaTotalDepth / 2}
              width={sofaTotalWidth - armrestsWidth * 2}
              height={3 * scaleFactor}
              stroke="black"
              strokeWidth={1}
              cornerRadius={[3, 3, 0, 0]}
            />
          </Layer>
        ),
      },
    ];

    // useEffect(() => {
    //   const initialPositions = {};
    //   initialModules.forEach(module => {
    //     initialPositions[module.id] = module.position;
    //   });
    //   setModulePositions(initialPositions);
    // }, []);

    // const handleModuleToggle = moduleId => {
    //   setActiveModules(prevSelected =>
    //     prevSelected.includes(moduleId)
    //       ? prevSelected.filter(id => id !== moduleId)
    //       : [...prevSelected, moduleId]
    //   );
    // };

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
          {possibleModules
            .filter(module => activeModules.includes(module.id))
            .map(module => (
              <React.Fragment key={module.id}>
                {module.mark(modulePositions[module.id])}
              </React.Fragment>
            ))}
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

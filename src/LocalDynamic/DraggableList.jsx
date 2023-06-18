import { useState } from "react";
import { motion } from "framer-motion";
import { usePositionReorder } from "./use-position-reorder";
import { useMeasurePosition } from "./use-measure-position";
import Papa from 'papaparse';


function Item({
  i,
  height,
  updatePosition,
  updateOrder,
  element
}) {
  const [isDragging, setDragging] = useState(false);

  const ref = useMeasurePosition((pos) => updatePosition(i, pos));
  return (
    <li
      style={{
        padding: '0.3em',
        height,
        // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
        zIndex: isDragging ? 3 : 1
      }}
    >
      <motion.div
        ref={ref}
        layout
        initial={false}
        style={{
          background: "white",
          height,
          borderRadius: 5,
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '0.5em',
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)"
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.1)"
        }}
        drag="y"
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(i, delta.y.translate);
        }}
      >
        {i + 1}. {element}
      </motion.div>
    </li>
  );
}

export default function DraggableList({ items }) {
  const [order, updatePosition, updateOrder] = usePositionReorder(Object.values(items));

  const exportToCSV = () => {
    // Crear el array de objetos a exportar
    const data = order.map((element, i) => ({ Name: element, Position: i + 1 }));

    // Convertir a CSV y descargar
    const csv = Papa.unparse(data);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'export.csv');
    link.click();
  };

  return (
    <>
      <ul style={{ listStyleType: 'none', width: '60%' }}>
        {order.map((element, i) => (
          <Item
            key={element}
            height={30}
            i={i}
            updatePosition={updatePosition}
            updateOrder={updateOrder}
            element={element}
          />
        ))}
      </ul>
      <button onClick={exportToCSV}>Export to CSV file</button>
    </>
  );
}

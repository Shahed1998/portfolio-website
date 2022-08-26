import { useEffect, useState } from 'react';
import Eyeball from './Eyeball';
const Eye = () => {
  // ---------------------------------------------------- Eyeball movement
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener('pointermove' || 'pointerdown', eyeControl);
  });

  const eyeControl = (e) => {
    const x = -(window.innerWidth / 2 - e.pageX) / 45;
    const y = -(window.innerHeight / 2 - e.pageY) / 270;
    setCoords({ x: x, y: y });
  };
  return (
    <div className='container'>
      {/* Eye left */}
      <Eyeball coordX={-coords.x} coordY={coords.y} />
      {/* Eye right */}
      <Eyeball coordX={coords.x} coordY={-coords.y} />
      <Eyeball coordX={coords.x} coordY={coords.y} />
    </div>
  );
};

export default Eye;

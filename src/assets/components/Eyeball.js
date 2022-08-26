const Eyeball = (prop) => {
  const coordX = prop.coordX;
  const coordY = prop.coordY;
  return (
    <div className='eyeBall'>
      <div
        className='iris'
        style={{
          transform: `rotate(-45deg) translateY(${coordY}px) translateX(${coordX}px)`,
        }}
      ></div>
    </div>
  );
};

export default Eyeball;

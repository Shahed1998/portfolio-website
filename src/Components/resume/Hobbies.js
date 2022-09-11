const Hobbies = () => {
  const hobbies = [
    'Coding',
    'Playing cricket',
    'Spending time with family and friends',
    'Watching Movies',
    'Playing games',
  ];

  return (
    <section className='lh-base' id='hobbies'>
      <h1
        className='name mt-5 mb-3 p-2 text-center shadow'
        style={{ fontSize: '24px', color: 'rgb(255, 74, 74)' }}
      >
        Interests
      </h1>
      <ul>
        {hobbies.map((hobby, i) => {
          return (
            <li key={i}>
              <h2 style={{ fontSize: '18px' }}>{hobby}</h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Hobbies;

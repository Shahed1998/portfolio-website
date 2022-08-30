const TransferSkill = () => {
  const qualities = [
    'Time management',
    'Team work',
    'Problem solving',
    'Adaptability',
    'Communication',
  ];
  return (
    <section className='lh-base' id='transferrable-skills'>
      <h1
        className='name mt-5 mb-3 p-2 text-center shadow'
        style={{ fontSize: '24px', color: 'red' }}
      >
        Transferrable skills
      </h1>
      <ul>
        {qualities.map((quality, i) => {
          return (
            <li key={i}>
              <h2 style={{ fontSize: '18px' }}>{quality}</h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TransferSkill;

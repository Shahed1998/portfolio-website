const Education = () => {
  return (
    <section className='lh-base' id='education'>
      <h1
        className='name mt-5 mb-3 p-2 text-center shadow'
        style={{ fontSize: '24px', color: 'red' }}
      >
        Education
      </h1>
      <ul>
        <li>
          <h2 style={{ fontSize: '18px' }}>
            American International University-Bangladesh
          </h2>
          <p>BSc CSE 2018 - Present</p>
        </li>
        <li>
          <h2 style={{ fontSize: '18px' }}>Methodist English Medium School</h2>
          <p>IGCSE A'level 2015 - 2017</p>
        </li>
        <li>
          <h2 style={{ fontSize: '18px' }}>Methodist English Medium School</h2>
          <p>IGCSE O'level 2014 - 2015</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;

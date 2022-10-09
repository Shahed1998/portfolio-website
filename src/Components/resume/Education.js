const Education = () => {
  return (
    <section className='lh-base' id='education'>
      <h1
        className='name mt-5 mb-3 p-2 text-center shadow'
        style={{ fontSize: '24px', color: 'rgb(255, 74, 74)' }}
      >
        Education
      </h1>
      <ul>
        <li>
          <h2 style={{ fontSize: '18px' }}>
            B.Sc in Computer Science Engineering
          </h2>
          <p>
            American International University-Bangladesh <br />
            <i className='fa-regular fa-calendar-days'></i> 2018 - Present
          </p>
        </li>
        <li>
          <h2 style={{ fontSize: '18px' }}>Edexcel International A levels</h2>
          <p>
            Methodist English Medium School <br />
            <i className='fa-regular fa-calendar-days'></i> 2015 - 2017
          </p>
        </li>
        <li>
          <h2 style={{ fontSize: '18px' }}>Edexcel IGCSE O levels</h2>
          <p>
            Methodist English Medium School <br />
            <i className='fa-regular fa-calendar-days'></i> 2014 - 2015
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Education;

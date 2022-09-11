const Skills = () => {
  return (
    <section className='lh-base' id='skills'>
      <h1
        className='name mt-3 mb-3 p-2 text-center shadow'
        style={{ fontSize: '24px', color: 'rgb(255, 74, 74)' }}
      >
        Skills
      </h1>
      <ul>
        <li>
          <p>
            Developing front-end web application using HTML5, CSS3, Bootstrap,
            JavaScript, jQuery, React
          </p>
        </li>
        <li>
          <p>
            Building back-end web application using Node.js, Express, MongoDB,
            Mongoose, PHP, Laravel, MySQL
          </p>
        </li>
        <li>
          <p>Problem solving, Data structures and Algorithms</p>
        </li>
        <li>
          <p>Using LINUX command line</p>
        </li>
        <li>
          <p>Building REST API</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;

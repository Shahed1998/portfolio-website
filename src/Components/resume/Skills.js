const Skills = () => {
  return (
    <section className='lh-base' id='skills'>
      <h1
        className='name mt-3 mb-3 p-2 text-center shadow'
        style={{ fontSize: '24px', color: 'red' }}
      >
        Skills
      </h1>
      <ul>
        <li>
          <h2 style={{ fontSize: '18px' }}>Client side</h2>
          <p>HTML5, CSS3, Bootstrap5, JavaScript, jQuery, React.js</p>
        </li>
        <li>
          <h2 style={{ fontSize: '18px' }}>Server side</h2>
          <p>PHP, Laravel, Node.js, Express</p>
        </li>
        {/* <li>Able to work with databases MongoDB and MySQL</li> */}
        <li>
          <h2 style={{ fontSize: '18px' }}>Databases</h2>
          <p>MongoDB and MySQL</p>
        </li>
        <li>
          <h2 style={{ fontSize: '18px' }}>API</h2>
          <p>REST</p>
        </li>
        <li>
          <h2 style={{ fontSize: '18px' }}>Tools</h2>
          <p>Linux terminal, Windows command line, Git, GitHub, vscode</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;

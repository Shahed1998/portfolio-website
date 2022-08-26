import SVG from './SVG';
const About = (props) => {
  return (
    <div ref={props.view} className='container min-vh-100' style={{}}>
      <div className='container'>
        <h2 className='p-5 text-center' style={{ background: '#f8f9fa' }}>
          <SVG /> About me
        </h2>
        <p className='text-justify mt-2 p-2 w-80 m-auto'>
          Hi, my name is Shahed Chowdhury Omi. I am currently a student at
          American International University-Bangladesh and I am pursuing my
          bachelor's in Computer Science and Engineering. I have completed my O'
          Levels and A' level under Edexcel from Methodist English Medium
          School. I started working with web development in May 2020 and still
          learning about it regularly. I have built several personal projects. I
          would love to collaborate on exciting ideas, so contact me if you want
          to work with me on your next project.
        </p>
      </div>
    </div>
  );
};

export default About;

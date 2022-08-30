import Skills from './resume/Skills';
import Education from './resume/Education';
const Resume = () => {
  return (
    <div className='col-sm-12 col-lg-6 mb-5'>
      <Skills />
      <Education />
    </div>
  );
};

export default Resume;

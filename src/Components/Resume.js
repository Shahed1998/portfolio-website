import Skills from './resume/Skills';
import Education from './resume/Education';
import TransferSkill from './resume/TransferSkills';
import Hobbies from './resume/Hobbies';

const Resume = () => {
  return (
    <div className='col-sm-12 col-lg-6 mb-5'>
      <Skills />
      <TransferSkill />
      <Education />
      <Hobbies />
    </div>
  );
};

export default Resume;

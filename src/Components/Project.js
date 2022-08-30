import Card from './contact/Card';
import beachView from '../assets/Images/beach-view.jpg';
import digitalClock from '../assets/Images/digital-clock.jpg';
const Project = () => {
  return (
    <div className='container mt-5'>
      <div className='row mb-5 text-center'>
        <h1>Projects</h1>
      </div>
      <div className='row'>
        {/* Beach view */}
        <Card
          image={beachView}
          title={'Beach view'}
          website={'https://github.com/Shahed1998/Beach-View'}
        />
        {/* Digital clock */}
        <Card
          image={digitalClock}
          title={'Digital clock'}
          website={'https://shaheds-digital-clock.netlify.app/'}
        />
        {/* Beach view */}
        <Card
          image={beachView}
          title={'Beach view'}
          website={'https://github.com/Shahed1998/Beach-View'}
        />
      </div>
    </div>
  );
};

export default Project;

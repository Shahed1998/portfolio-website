import Card from './contact/Card';
import beachView from '../assets/Images/beach-view.jpg';
import digitalClock from '../assets/Images/digital-clock.jpg';
import weather from '../assets/Images/weather.jpg';
import countPrime from '../assets/Images/count-primes.jpg';
import calculator from '../assets/Images/calculator.jpg';
import giveTreat from '../assets/Images/give-treat.jpg';

const Project = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row mb-5 text-sm-left text-lg-center'>
        <h1>Projects</h1>
        <h5 className='text-left'>
          You can find the code of all the projects on my{' '}
          <a
            style={{ textDecoration: 'none', color: 'red' }}
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/Shahed1998'}
          >
            GitHub
          </a>
        </h5>
      </div>
      {/* First row */}
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
        {/* Weather app */}
        <Card
          image={weather}
          title={'Weather app'}
          website={'https://shahed-weather-app.herokuapp.com/'}
        />
        {/* Count prime*/}
        <Card
          image={countPrime}
          title={'Count Prime'}
          website={'https://shahed1998.github.io/Count_Primes/'}
        />
      </div>

      {/* Second row */}
      <div className='row'>
        {/* Calculator */}
        <Card
          image={calculator}
          title={'Calculator'}
          website={'https://shahed1998.github.io/Calculator/'}
        />
        {/* Weather app */}
        <Card
          image={giveTreat}
          title={'Give treat'}
          website={'https://shahed1998.github.io/Give-Treat/'}
        />
      </div>
    </div>
  );
};

export default Project;

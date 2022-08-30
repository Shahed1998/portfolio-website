import { Link } from 'react-router-dom';
const Bio = () => {
  return (
    <div className='col-sm-12 col-lg-6 d-flex align-items-center justify-content-center'>
      <div className='inner'>
        <h1 className='name text-left mt-5' style={{ fontSize: '24px' }}>
          Hi, I am Shahed Chowdhury Omi
        </h1>
        <p className='text-left' style={{ fontSize: '18px' }}>
          A passionate software engineer{' '}
          <span style={{ color: 'red' }}> && </span>a constant learner 🚀
        </p>
        <div className='lh-base' style={{ fontSize: '16px' }}>
          <p>
            I am a curious person who have built several projects, and I would
            love to collaborate with you on your project . <br />
            If you want to work with me,{' '}
            <i>
              {' '}
              <Link
                to='/contact'
                style={{ color: 'red', textDecoration: 'none' }}
              >
                do let me know
              </Link>
            </i>
            .
          </p>
          <p className='mb-5'>
            <a
              className='me-3'
              href={'https://www.facebook.com/shahed.chowdhury.50767'}
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none', color: 'red' }}
            >
              Facebook
            </a>
            <a
              className='me-3'
              href={'https://www.linkedin.com/in/shahed-chowdhury-omi'}
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'none', color: 'red' }}
            >
              LinkedIn
            </a>
            <a
              style={{ textDecoration: 'none', color: 'red' }}
              target='_blank'
              rel='noopener noreferrer'
              href={'https://github.com/Shahed1998'}
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;

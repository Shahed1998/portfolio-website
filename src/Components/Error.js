import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div
      className='container d-flex align-items-center justify-content-center'
      style={{ minHeight: '80vh' }}
    >
      <div className='row'>
        <div className='col-12 text-center'>
          <h1 style={{ fontSize: '24px' }}>Page does not exist</h1>
        </div>
        <div className='col-12 text-center'>
          <Link to='/' style={{ color: 'red' }}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

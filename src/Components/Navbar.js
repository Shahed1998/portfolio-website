import { Link } from 'react-router-dom';
import Sidebar from './navbar/Sidebar';
import Theme from './navbar/Theme';
const Navbar = () => {
  return (
    <div
      className='container min-vw-100 shadow sticky-top py-2'
      id='nav'
      style={{ zIndex: '2', background: '#212121' }}
    >
      <div className='row'>
        <div className='col-4 d-flex align-items-center justify-content-center'>
          {' '}
          <div className='home-btn d-inline-block'>
            <Link to='/'>
              <i
                className='fa-solid fa-house ms-2'
                style={{ fontSize: '2rem', color: '#fefbf6' }}
              ></i>
            </Link>
          </div>
        </div>
        <div className='col-4 d-flex align-items-center justify-content-center'>
          <div className='theme mx-auto'>
            <Theme />
          </div>
        </div>
        <div className='col-4 d-flex align-items-center justify-content-center'>
          <div className='menu-btn '>
            <button
              className='btn'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasWithBothOptions'
              aria-controls='offcanvasWithBothOptions'
            >
              <i
                className='fa-solid fa-bars'
                style={{ fontSize: '2rem', color: '#fefbf6' }}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;

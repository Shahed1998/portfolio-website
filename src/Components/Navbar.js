import { Link } from 'react-router-dom';
import Sidebar from './navbar/Sidebar';
const Navbar = () => {
  return (
    <div
      id='Nav'
      className='d-flex align-items-center justify-content-center shadow sticky-top'
      style={{ backgroundColor: '#fff' }}
    >
      <div className='container position-relative p-2'>
        <div className='home-btn d-inline-block'>
          <Link to='/'>
            <i
              className='fa-solid fa-house ms-2'
              style={{ fontSize: '2rem' }}
            ></i>
          </Link>
        </div>
        <div className='menu-btn d-inline-block position-absolute top-2 end-0 me-3'>
          <button
            className='btn'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasWithBothOptions'
            aria-controls='offcanvasWithBothOptions'
          >
            <i className='fa-solid fa-bars' style={{ fontSize: '2rem' }}></i>
          </button>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;

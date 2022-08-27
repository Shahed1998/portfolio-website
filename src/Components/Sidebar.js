import { NavLink } from 'react-router-dom';
import SVG from './SVG';
const Sidebar = () => {
  const btnClick = () => {
    document.querySelector('.btn-close').click();
  };

  return (
    <>
      <div
        className='offcanvas offcanvas-end'
        data-bs-scroll='true'
        tabIndex='-1'
        id='offcanvasWithBothOptions'
        aria-labelledby='offcanvasWithBothOptionsLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasWithBothOptionsLabel'>
            {/* Menu */}
            <SVG />
          </h5>
          <button
            type='button'
            className='btn-close btn-close-white'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body d-flex align-items-center justify-content-center'>
          <p>
            <NavLink
              to='/'
              onClick={btnClick}
              style={({ isActive }) => ({
                color: isActive ? '#FF4A4A' : '#fff',
              })}
            >
              Bio
            </NavLink>
            <br />
            <NavLink
              to='/skill'
              onClick={btnClick}
              style={({ isActive }) => ({
                color: isActive ? '#FF4A4A' : '#fff',
              })}
            >
              Skills
            </NavLink>
            <br />
            <NavLink
              to='/project'
              onClick={btnClick}
              style={({ isActive }) => ({
                color: isActive ? '#FF4A4A' : '#fff',
              })}
            >
              Project
            </NavLink>
            <br />
            <NavLink
              to='/resume'
              onClick={btnClick}
              style={({ isActive }) => ({
                color: isActive ? '#FF4A4A' : '#fff',
              })}
            >
              Resume
            </NavLink>
            <br />
            <NavLink
              to='/contact'
              onClick={btnClick}
              style={({ isActive }) => ({
                color: isActive ? '#FF4A4A' : '#fff',
              })}
            >
              Contact
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

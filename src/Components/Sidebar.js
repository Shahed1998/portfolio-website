import { Link } from 'react-router-dom';
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
            Menu
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <p>
            <Link to='/' onClick={btnClick}>
              Bio
            </Link>
            <br />
            <Link to='/skill' onClick={btnClick}>
              Skills
            </Link>
            <br />
            <Link to='/project' onClick={btnClick}>
              Project
            </Link>
            <br />
            <Link to='/resume' onClick={btnClick}>
              Resume
            </Link>
            <br />
            <Link to='/contact' onClick={btnClick}>
              Contact
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

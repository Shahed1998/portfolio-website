import { useEffect, useState } from 'react';
import Eye from './Eye';
import nav from '../JS/navbar';
const Navbar = (props) => {
  const [activeField, setActiveField] = useState('home');
  useEffect(() => {
    nav(activeField);
  }, [activeField]);
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <div
          className='navbar-brand'
          id='home'
          onClick={() => {
            props.scrollFunc(props.refer.home);
          }}
        >
          <Eye />
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <div
                className='nav-link active'
                id='about'
                onClick={() => {
                  props.scrollFunc(props.refer.about);
                  setActiveField('about');
                }}
              >
                About
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-link'
                id='skill'
                value='skill'
                onClick={() => {
                  props.scrollFunc(props.refer.skill);
                  setActiveField('skill');
                }}
              >
                Skill
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-link'
                id='project'
                onClick={() => {
                  props.scrollFunc(props.refer.project);
                  setActiveField('project');
                }}
              >
                Project
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-link'
                id='contact'
                onClick={() => {
                  props.scrollFunc(props.refer.contact);
                  setActiveField('contact');
                }}
              >
                Contact
              </div>
            </li>
            <li className='nav-item'>
              <div className='nav-link' id='theme'>
                Theme
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

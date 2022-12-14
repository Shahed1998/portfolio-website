import { Routes, Route, useLocation } from 'react-router-dom';
import Bio from './Components/Bio';
import Project from './Components/Project';
import Navbar from './Components/Navbar';
// import Skill from './Components/Skill';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Error from './Components/Error';
import myImg from './assets/Images/my-img-3.jpg';
import Modal from './Components/Modal';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [pathName, setPathName] = useState('/');
  useEffect(() => {
    setPathName(`${location.pathname}`);
  }, [location]);

  return (
    <div id='whole-body'>
      <Navbar />
      <div className='container spa' style={{ zIndex: '1' }}>
        <Modal />
        <div className='row'>
          <div className='col-sm-12 col-lg-6 '>
            {['/', '/resume', '/contact'].includes(pathName) ? (
              <img
                className='my-img sticky-lg-top'
                src={myImg}
                alt={'Shahed'}
                style={{ zIndex: '1' }}
                width='400'
              />
            ) : null}
          </div>

          <Routes>
            <Route path='/' element={<Bio />} />
            <Route path='/project' element={<Project />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

// ---------------------------------------- Previous design
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import Error from './Error';
// import Home from './Home';
// import Error from './Error';

/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter> */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from './Components/Bio';
import Project from './Components/Project';
import Navbar from './Components/Navbar';
// import Skill from './Components/Skill';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Bio />} />
        {/* <Route path='/skill' element={<Skill />} /> */}
        <Route path='/project' element={<Project />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
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

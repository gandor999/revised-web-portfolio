import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
import NavBar from './components/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated, useSpring } from 'react-spring'

function App({ preload }) {

  const location = useLocation()

  const transitions = useTransition(location, {    //Got this from a codesandbox
    from: { opacity: 0, transform: 'scale(0.9)' },
    enter: { opacity: 1, transform: 'scale(1)'},
    leave: { opacity: 0, transform: 'scale(0.9)' },
  })


  return (
    <div>
      <NavBar />
      {
        transitions((style, item) => (
          <animated.div className="routes" key={item.key} style={style}>
            <Routes location={item}>
              <Route path="/" exact element={<Home />} />
              <Route path="/personal-web-portfolio/" element={<Home />} />
              <Route path="/personal-web-portfolio/aboutme" element={<About preload={preload} />} />
              <Route path="/personal-web-portfolio/projects" element={<Projects preload={preload} />} />
            </Routes>
          </animated.div>
        ))
        
      }
    </div>
    
  )
        
     
     

}

export default App;
 
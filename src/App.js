import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles
    className="particle-canvas"
      params={{
        particles:{
          number:{
            value: 30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"square",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
        }
      }}/>
    <Navbar/>
    <Header/>
    </>
    
  );
}

export default App;

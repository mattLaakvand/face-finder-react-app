import './app.scss';
import Logo from './components/Logo/logo';
import Navigation from './components/Navigation/navigation';
import Rank from './components/Rank/rank'
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 150,
        }
    }
}

function App() {
  return (
    <div className="App">
        <Particles
            className="particles"
            params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
        {/*<FaceRecognition/>*/}
    </div>
  );
}

export default App;

import './App.css';
import Logo from './components/Logo/logo';
import Navigation from './components/Navigation/navigation';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Logo/>
        {/*<Rank/>*/}
        <ImageLinkForm/>
        {/*<FaceRecognition/>*/}
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/Navbarr';
import MainVideo from './components/MainVideo';
import Suggestion from './components/Suggestion';

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <div className='container'>
      <MainVideo/>
      <Suggestion/>
      </div>
    </div>
  );
}

export default App;

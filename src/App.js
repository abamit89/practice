
import './App.css';
import Myuseeffect from './components/myuseeffect';
import Myusereducer from './components/myusereducer';
import Myusestate from './components/myusestate'

function App() {
  return (
    <div className="App">
      <Myusestate/>
      <Myusereducer/>
      <Myuseeffect/>
    </div>
  );
}

export default App;

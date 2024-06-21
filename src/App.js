import './App.css';
import Counter from './components/Counter';
import DataFetch from './components/DataFetcher';
import Hello from './components/Hello';
import Toggle from './components/Toggle';
import Welcome from './components/Welcome';
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <Hello />
      <Greeting name="Class" />
      <Welcome name="props"/>
      <Toggle />
      <Counter />
      <DataFetch />
    </div>
  );
}

export default App;

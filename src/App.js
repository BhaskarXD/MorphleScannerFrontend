import './App.css';
import Grid from './components/Grid/Grid'
import Heading from './components/Heading/Heading';
import Legend from './components/Legend/Legend';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Grid />
      <Legend /> 
    </div>
  );
}

export default App;

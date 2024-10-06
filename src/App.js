import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';

const trafficStates = {
  red: {
    duration: 4000,
    backgroundColor: "red",
    next:"green"
  },
  yellow: {
    duration: 4000,
    backgroundColor: "yellow",
    next:"red"
  },
  green: {
    duration: 4000,
    backgroundColor: "green",
    next:"yellow"
  }
}

function App() {
  return (
    <div className='wrapper'>
      <TrafficLight trafficStates={trafficStates} />
    </div>
  );
}

export default App;

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import TrainSchedule from './components/TrainSchedule';
import './App.css';
import IndividualTrain from './components/IndividualTrain';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/train/trains" element={<TrainSchedule />} />
    <Route exact path="/train/trains/:id" element={<IndividualTrain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

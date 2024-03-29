import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import TournamentForm from './components/TournamentForm';
import TournamentHub from './components/TournamentHub';
import Dashboard from './components/Dashboard';

function App() {
  useEffect(() => {
  axios.get("http://localhost:8000/api/tournaments")
  .then(res => console.log(res))
  .catch(err => console.log(err))
}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LandingPage/> } />
          <Route path='/create-tournament' element={ <TournamentForm/> } />
          <Route path='/dashboard' element= { <Dashboard/> }/>
          <Route path='/tournament-hub/:tournamentId' element={ <TournamentHub/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

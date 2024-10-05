import './App.css';
import {Route, Routes} from "react-router-dom";
import Library from '../Library/Library';
import LandingPage from '../LandingPage/LandingPage';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element= {<LandingPage/>}/>
        <Route path='/library' element= {<Library/>}/>
        <Route path='/profile' element= {<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;

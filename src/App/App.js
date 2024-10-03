import './App.css';
import {Route, Routes} from "react-router-dom";
import Library from '../Library/Library';
import LandingPage from '../LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element= {<LandingPage/>}/>
        <Route path='/library' element= {<Library/>}/>
      </Routes>
    </div>
  );
}

export default App;

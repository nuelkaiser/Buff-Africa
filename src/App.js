import LandingPage from './Buff Folder/LandingPage';
import WaitListPage from './Buff Folder/WaitListPage';
import { Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<WaitListPage />} />
      </Routes>
    </div>
  );
}

export default App;

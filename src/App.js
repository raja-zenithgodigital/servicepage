import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Componants/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route extact path="/" element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;

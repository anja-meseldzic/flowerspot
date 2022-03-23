import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import FlowerDetails from './modules/FlowerDetails';

import Home from './modules/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flower/:id" element={<FlowerDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

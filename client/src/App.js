import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './components/signup';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//no coded
export default App;

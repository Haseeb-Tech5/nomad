import "./App.css";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from "./Components/about/aboutt";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

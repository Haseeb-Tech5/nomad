import "./App.css";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from "./Components/about/aboutt";
import Nurses from "./Components/nurses/nurses";
import Practice from "./Components/practice/practice";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/nurse" element={<Nurses/>}/>
        <Route path="/practice" element={<Practice/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

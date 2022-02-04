import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from './About'
import Home from './Home'

function App() {
  return (
    <div className="App">
      {/* <h1 style={{color: "red"}}> Profile App </h1> */}
      {/* <p style={{color: "darkblue"}}> React Profile App </p>  */}
      <BrowserRouter>
        <nav>
          <div>
            <h2>React Profile App</h2>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li>Next</li>
            <li>
        
              <Link to="/Farjana">About</Link>
            </li>
            <li>Back</li>
          </ul>
        </nav>

   
      <Routes>
          <Route exact path="/Farjana" element={<About />} />
          <Route eaxt path="/" element={<Home/>}/>
       </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

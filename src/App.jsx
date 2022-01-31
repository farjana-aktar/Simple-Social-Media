import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* <h1 style={{color: "red"}}> Profile App </h1> */}
      {/* <p style={{color: "darkblue"}}> React Profile App </p>  */}

      <nav>
        <div>
          <h2>React Profile App</h2>
        </div>

        <ul className='nav-links'>
          <li style={{color: "red"}}>Home</li>
          <li>Add</li>
          <li>About</li>
          <li>Contrat</li>

        </ul>

      </nav>

      <h1>Profile App</h1>
      <h3>App Photo</h3>

      <h4>Email</h4>
      <p>Please, Enter your Email</p>

      <h5>PassWord</h5>
      <p>Please, Enter your Password xxx......</p>

      <h6><u>Continue🤔 Remenber me</u></h6>
  
    </div>
  );
}

export default App;

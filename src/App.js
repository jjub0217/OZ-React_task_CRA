import logo from "./logo.svg";
import "./App.css";
import Introduce from "./Introduce";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1> 오즈코딩스쿨에 오신 여러분! 환영합니다 </h1>
      <Introduce />
    </div>
  );
}

export default App;

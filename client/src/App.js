import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [apiResponse, setApiResponse] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
    console.log(apiResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
        <p>{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;

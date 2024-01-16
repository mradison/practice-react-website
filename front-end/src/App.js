import logo from './logo.svg';
import './App.css';

function App() {
  console.log('Happy Coding!');

  // const reqBody = {
  //   "username": "trevor",
  //   "password": "asdfasdf"
  // }

  // fetch('http://localhost:8080/api/auth/login', {
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   method: "post",
  //   body: JSON.stringify(reqBody)
  // }).then((response) => Promise.all([response.json(), response.headers]))
  // .then(([body, headers]) => {
  //   const authValue = headers.get("authorization");
  //     console.log(authValue);
  //     console.log(body);
  //   });

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
      </header>
    </div>
  );
}

export default App;

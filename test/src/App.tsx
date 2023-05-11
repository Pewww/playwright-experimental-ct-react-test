import React from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import tw, { styled } from 'twin.macro';

function App() {
  return (
    <div className="App">
      <Test>Hello</Test>
      <DatePicker onChange={console.log} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

const Test = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;

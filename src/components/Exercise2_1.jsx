import logo from "../logo.svg";
import "../App.css";
import React from 'react'

class Exercise2_1 extends React.Component {
    render(){
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
                Click Me
              </a>
            </header>
          </div>
        );
    }
}

export default Exercise2_1;

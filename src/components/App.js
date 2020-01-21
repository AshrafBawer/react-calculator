import React from 'react';
import Buttons from './Buttons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formula: '', currentValue: '0' };
  }

    renderInput = (formula, currentValue) => {
      this.setState({ formula, currentValue });
    }

    render() {
      const { formula: displayFormula } = this.state;
      const { currentValue } = this.state;
      return (
        <div className="container">
          <div className="content">
            <div id="display_values">
              <div id="formula">{displayFormula}</div>
              <div id="display">{currentValue}</div>
            </div>
            <Buttons renderInput={this.renderInput} handleCalc={this.handleCalc} />
          </div>
          <span className="text-center lead" id="author">
Designed and Coded by
            {' '}
            <br />
            {' '}
Ashraf Bawer
          </span>
        </div>
      );
    }
}


export default App;

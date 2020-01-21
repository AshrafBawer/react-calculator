import React from 'react';

let value = '';
let formula = '';
let preValue = '';
let evaluated = false;

class Buttons extends React.Component {
    getInput = (e) => {
      if (evaluated) {
        value = 0;
        formula = '';
        evaluated = false;
      }
      preValue = value;
      value += e.target.dataset.value;
      const regex = /[.]\d*[.]+/g;
      if (regex.test(value)) {
        value = preValue;
      } else {
        formula += e.target.dataset.value;
      }


      value = value.replace(/^0+/, '0');
      value = value.replace(/^0(?=\d)/, '');
      formula = formula.replace(/^0+/, '0');
      formula = formula.replace(/^[.]/, '0.');
      formula = formula.replace(/^0(?=\d)/, '');
      formula = formula.replace(/(?<=[+*/-])0+(?=\d)/, '');
      this.props.renderInput(formula, value);
    }

    getOperation = (e) => {
      if (evaluated) {
        const finalResult = eval(formula);
        formula = finalResult;
        evaluated = false;
      } else {

      }
      value = 0;
      formula += e.target.dataset.value;
      formula = formula.replace(/^[+*-/]+/, '');
      formula = formula.replace(/[+]+/, '+');
      formula = formula.replace(/[-]+/, '-');
      formula = formula.replace(/[+*-/]+\*/, '*');
      formula = formula.replace(/[+]+\-/, '-');
      formula = formula.replace(/[*/+-]+\+/, '+');
      formula = formula.replace(/[+*-/]+\//, '/');
      this.props.renderInput(formula, value);
    }

    calculate = () => {
      if (formula === '') {
        alert('Please add some numbers to calculate');
      } else {
        formula = formula.replace(/[+*/-]$/, '');
        const result = `${formula}=${eval(formula)}`;
        this.props.renderInput(result, eval(formula));
        evaluated = true;
      }
    }

    clearAll = () => {
      value = 0;
      formula = '';
      evaluated = false;
      this.props.renderInput(formula, value);
    }

    render() {
      return (
        <div>
          <div id="buttons">

            <div className="numbers">

              <button type="button" className="num btn" onClick={this.getInput} data-value={1} id="one">1</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={2} id="two">2</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={3} id="three">3</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={4} id="four">4</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={5} id="five">5</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={6} id="six">6</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={7} id="seven">7</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={8} id="eight">8</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={9} id="nine">9</button>
              <button type="button" className="num btn" onClick={this.getInput} data-value={0} id="zero">0</button>
            </div>
            <div className="calculations">
              <button type="button" className="cal btn" id="add" onClick={this.getOperation} data-value="+">+</button>
              <button type="button" className="cal btn" id="subtract" onClick={this.getOperation} data-value="-">-</button>
              <button type="button" className="cal btn" id="multiply" onClick={this.getOperation} data-value="*">x</button>
              <button type="button" className="cal btn" id="divide" onClick={this.getOperation} data-value="/">/</button>
              <button type="button" className="cal btn" id="decimal" onClick={this.getInput} data-value=".">.</button>
              <button type="button" className="cal btn" id="clear" onClick={this.clearAll} data-value="AC">AC</button>
              <button type="button" className="cal btn" id="equals" onClick={this.calculate}>=</button>
            </div>
          </div>
        </div>
      );
    }
}


export default Buttons;

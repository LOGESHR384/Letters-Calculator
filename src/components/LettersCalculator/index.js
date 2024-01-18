// Write your code here.
import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPharse = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <div className="input-pharse-container">
              <label className="label" htmlFor="phraseText">
                Enter the Phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onChangeInputPharse}
                placeholder="Enter the Phrase"
                type="text"
                value={inputPhrase}
              />
            </div>
            <p className="letters-count">
              No.of letters: 0{inputPhrase.length}
            </p>
          </div>
          <img
            alt="letters calculator"
            className="letter-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LetterCalculator

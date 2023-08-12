import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    counter: 0,
  }

  onIncrementCounter = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {counter} = this.state

    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The Button has been clicked
          <br /> <span className="counter-value">{counter}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCounter}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onRandomIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onRandomIncrement}
          >
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

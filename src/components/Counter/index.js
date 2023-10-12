import Component from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onincrement = () => {
    this.setState(prevState => {
      console.log(`previousstate ${prevState.count}`)
      return {count: prevState + 1}
    })
  }
  ondecrement = () => {
    this.setState(prevState => {
      return {count: prevState - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onincrement}>
            Increase
          </button>
          <button className="button" onClick={this.decrement}>
            decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="heading">Count {count}</h1>
            <p className="paragraph">Count is Even</p>
          </div>
          <div>
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

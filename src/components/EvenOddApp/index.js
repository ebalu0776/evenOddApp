import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: !prevState.count}))
  }

  render() {
    const {count} = this.state

    const headText = count
      ? Math.ceil(Math.random() * 100)
      : Math.ceil(Math.random() * 100)
    const paragraphText = count ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <div>
            <h1 className="heading">Count {headText}</h1>
            <p className="paragraph">Count is {paragraphText}</p>
          </div>
          <div>
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="paragraph">
            *Increased By Random Number Between 0 to 100{' '}
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

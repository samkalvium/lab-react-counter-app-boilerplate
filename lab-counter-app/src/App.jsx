import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }
  increase = () => {
    this.setState(() => {
      return {
        counter: this.state.counter + 1
      }
    })
  }
  decrease = () => {
    this.setState(() => {
      return {
        counter: this.state.counter - 1
      }
    })
  }
  reset = () => {
    this.setState(() => {
      return {
        counter: 0
      }
    })
  }
  render() {
    return (
      <>
        <div className='body'>
          <h1>Counter App</h1>
          <div className='count'>
            {this.state.counter}
          </div>
          <br />
          <div className='button'>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
            <button className='reset' onClick={this.reset}>Reset</button>
          </div>
        </div>
      </>
    )
  }
}

export default App

import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {text: 'Please Login', btn: 'Login'}

  changeBtn = () => {
    const {text, btn} = this.state
    if (btn === 'Login') {
      this.setState(prevState => ({text: 'Welcome User', btn: 'Logout'}))
    } else {
      this.setState(prevState => ({text: 'Please Login', btn: 'Login'}))
    }
  }

  render() {
    const {text, btn} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="header">{text}</h1>
          <button className="button" type="button" onClick={this.changeBtn}>
            {btn}
          </button>
        </div>
      </div>
    )
  }
}
export default Home

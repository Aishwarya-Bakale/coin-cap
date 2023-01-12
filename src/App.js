import {Component} from 'react'
import CoinCapItem from './components/CoinCapItem'

import './App.css'

class App extends Component {
  state = {coinCapData: []}

  componentDidMount() {
    this.getCoinCapData()
  }

  getCoinCapData = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets')
    const fetchedData = await response.json()
    this.setState({coinCapData: fetchedData.data})
  }

  render() {
    const {coinCapData} = this.state
    console.log(coinCapData)

    return (
      <div className="app-container">
        <div className="head-section">
          <h1 className="heading">
            MARKET CAP
            <br />
            $1.01T
          </h1>
          <h1 className="heading">
            EXCHANGE VOL
            <br />
            $28.75B
          </h1>
          <h1 className="heading">
            ASSETS
            <br />
            2,295
          </h1>
          <h1 className="heading">
            EXCHANGES
            <br />
            73
          </h1>
          <h1 className="heading">
            MARKETs
            <br />
            12,563
          </h1>
          <h1 className="heading">
            BTC DOM INDEX
            <br />
            33.3%
          </h1>
        </div>
        <div className="list-section">
          <div className="list">
            <p className="sub-head">Rank</p>
            <p className="sub-head">Name</p>
            <p className="sub-head">Price</p>
            <p className="sub-head">Market Cap</p>
            <p className="sub-head">VWAP(24Hr)</p>
            <p className="sub-head">Supply</p>
            <p className="sub-head">Volume(24Hr)</p>
            <p className="sub-head">Change(24Hr)</p>
          </div>
          <hr className="line" />
          <ul className="list">
            {coinCapData.data.map(item => (
              <CoinCapItem key={item.id} coinCapDetails={item} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default App

import './index.css'

const CoinCapItem = props => {
  const {coinCapDetails} = props
  const {
    rank,
    symbol,
    name,
    supply,
    marketCapUsd,
    volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
    explorer,
  } = coinCapDetails
  const sliceName = name.slice(0, 3)
  return (
    <li className="list">
      <p className="list-item">{rank}</p>
      <img
        src={`https://assets.coincap.io/assets/icons/${sliceName}@2x.png`}
        alt={name}
        className="icon"
      />
      <div>
        <p className="list-item">{name}</p>
        <p className="sub-list-item">{symbol}</p>
      </div>
      <p className="list-item">{priceUsd.splice(0, 9)}</p>
      <p className="list-item">{`$${marketCapUsd / 1000000000}b`}</p>
      <p className="list-item">{`$${vwap24Hr.splice(0, 9)}`}</p>
      <p className="list-item">{`$${supply / 1000000}m`}</p>
      <p className="list-item">{`$${volumeUsd24Hr / 1000000000}b`}</p>
      <p className="list-item">{`${changePercent24Hr.splice(0, 3)}%`}</p>
      <hr className="line" />
    </li>
  )
}

export default CoinCapItem

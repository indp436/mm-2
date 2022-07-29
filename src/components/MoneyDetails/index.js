import './index.css'

const CreateCard = props => {
  const {details} = props
  const {imgUrl, moneyType, alt, initialBalance, bgColor} = details

  return (
    <li className={`money-card ${bgColor}`}>
      <div className="money-card-container">
        <img src={imgUrl} alt={alt} className="money-card-image" />
      </div>
      <div className="money-card-details">
        <p className="money-card-type">{moneyType}</p>
        <p className="money-card-balance">Rs. {initialBalance}</p>
      </div>
    </li>
  )
}

export default CreateCard

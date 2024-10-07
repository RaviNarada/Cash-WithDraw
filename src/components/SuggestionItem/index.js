// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsItem, placeHold} = props
  const {suggestion} = suggestionsItem
  //console.log(suggestion)
  const placeHolder = () => {
    console.log('ghfghf')
    placeHold(suggestion)
  }

  return (
    <li className="list">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="img"
        onClick={placeHolder}
      />
    </li>
  )
}

export default SuggestionItem

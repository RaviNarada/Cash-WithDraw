// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    placeholderr: 'Search Google',
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  placeHold = mess => {
    this.setState({
      searchInput: mess,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="Googgle-home-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="g-logo"
          alt="google logo"
        />
        <div className="searchCard">
          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-logo"
              alt="search icon"
            />
            <input
              type="search"
              className="input-box"
              onChange={this.onChangeInput}
              value={searchInput}
              placeholder="Search Google"
            />
          </div>
          <ul>
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionsItem={eachSuggestion}
                key={eachSuggestion.id}
                placeHold={this.placeHold}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

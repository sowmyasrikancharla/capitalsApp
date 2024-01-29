import React, {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedCapitalId: 'NEW_DELHI', selectedCountry: 'India'}

  handleSelectChange = e => {
    const selectedCapitalId = e.target.value
    const selectedCountry = countryAndCapitalsList.find(
      item => item.id === selectedCapitalId,
    ).country
    this.setState({selectedCapitalId, selectedCountry})
  }

  render() {
    const {selectedCapitalId, selectedCountry} = this.state

    return (
      <div className="main-con">
        <div className="sub-con">
          <h1 className="head">Countries And Capitals</h1>
          <p className="que">
            {' '}
            <select
              name="capital"
              onChange={this.handleSelectChange}
              className="opt"
              value={selectedCapitalId}
            >
              {countryAndCapitalsList.map(item => (
                <option key={item.id} value={item.id}>
                  {item.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </p>
          <p className="answer">{selectedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

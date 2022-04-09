import {Component} from 'react'
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

// Write your code here

class Capitals extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1>Countries And Capitals</h1>
        <div>
          <select id="capital">
            {countryAndCapitalsList.map(eachCapital => (
              <option key={eachCapital.id} value={eachCapital.id}>
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capital">is capital of which country?</label>
        </div>
      </div>
    )
  }
}
export default Capitals

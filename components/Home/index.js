import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeamDetails = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamDetails: updatedTeamDetails, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state

    const displayCardsComponent = (
      <div className="main-home-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-home-heading">IPL DASHBOARD</h1>
        </div>
        <ul className="team-card-container">
          {teamDetails.map(eachItem => (
            <TeamCard key={eachItem.id} teamInfo={eachItem} />
          ))}
        </ul>
      </div>
    )

    return isLoading ? (
      <div className="align-loader">
        <div testid="loader">
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </div>
      </div>
    ) : (
      displayCardsComponent
    )
  }
}

export default Home

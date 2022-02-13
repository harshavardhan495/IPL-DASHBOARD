import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBanner: '',
    backgroundColorStyle: '',
    isCardLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getBackgroundColor = id => {
    let styleValue
    switch (id) {
      case 'MI':
        styleValue = 'background-color-mi'
        break
      case 'RCB':
        styleValue = 'background-color-rcb'
        break
      case 'CSK':
        styleValue = 'background-color-csk'
        break
      case 'DC':
        styleValue = 'background-color-dc'
        break
      case 'SH':
        styleValue = 'background-color-srh'
        break
      case 'RR':
        styleValue = 'background-color-rr'
        break
      case 'KKR':
        styleValue = 'background-color-kkr'
        break
      case 'KXP':
        styleValue = 'background-color-pk'
        break
      default:
        break
    }
    return styleValue
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchObj = data.latest_match_details
    const recentMatchesObjArr = data.recent_matches
    const teamBannerUrl = data.team_banner_url
    const latestMatchRevisedObj = {
      competingTeam: latestMatchObj.competing_team,
      competingTeamLogo: latestMatchObj.competing_team_logo,
      date: latestMatchObj.date,
      firstInnings: latestMatchObj.first_innings,
      id: latestMatchObj.id,
      manOfTheMatch: latestMatchObj.man_of_the_match,
      matchStatus: latestMatchObj.match_status,
      result: latestMatchObj.result,
      secondInnings: latestMatchObj.second_innings,
      umpires: latestMatchObj.umpires,
      venue: latestMatchObj.venue,
    }

    const recentMatchesArray = recentMatchesObjArr.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.secondInnings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    const backgroundStyle = this.getBackgroundColor(id)

    this.setState({
      latestMatchDetails: latestMatchRevisedObj,
      recentMatches: recentMatchesArray,
      teamBanner: teamBannerUrl,
      backgroundColorStyle: backgroundStyle,
      isCardLoading: false,
    })
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBanner,
      backgroundColorStyle,
      isCardLoading,
    } = this.state

    const mainbackgroundStyle = `team-matches-container ${backgroundColorStyle}`
    const teamMatchesDispComp = (
      <div className={mainbackgroundStyle}>
        <img src={teamBanner} alt="team banner" className="team-banner-props" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-card-container">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
    return isCardLoading ? (
      <div className="align-team-card-loader">
        <div testid="loader">
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        </div>
      </div>
    ) : (
      teamMatchesDispComp
    )
  }
}

export default TeamMatches

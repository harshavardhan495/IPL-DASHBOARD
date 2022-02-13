import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails

  let matchStatusStyling

  if (matchStatus === 'Lost') {
    matchStatusStyling = 'lost-match-status'
  } else {
    matchStatusStyling = 'won-match-status'
  }

  return (
    <li className="match-display-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-icon"
      />
      <p className="mini-heading">{competingTeam}</p>
      <p className="sub-heading-values">{result}</p>
      <p className={matchStatusStyling}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

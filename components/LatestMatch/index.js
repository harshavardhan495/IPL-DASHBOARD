import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="title-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="first-second-container">
          <div className="first-block">
            <p className="main-team-heading">{competingTeam}</p>
            <p className="mini-heading">{date}</p>
            <p className="sub-heading-values">{venue}</p>
            <p className="sub-heading-values">{result}</p>
          </div>
          <div className="second-img-bock">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="opponent-team"
            />
          </div>
        </div>
        <div className="third-block-details">
          <p className="mini-heading">First Innings</p>
          <p className="sub-heading-values">{firstInnings}</p>
          <p className="mini-heading">Second Innings</p>
          <p className="sub-heading-values">{secondInnings}</p>
          <p className="mini-heading">Man of the Match</p>
          <p className="sub-heading-values">{manOfTheMatch}</p>
          <p className="mini-heading">Umpires</p>
          <p className="sub-heading-values">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamInfo} = props
  const {id, name, teamImageUrl} = teamInfo

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="team-nav-link">
        <div className="team-card">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard

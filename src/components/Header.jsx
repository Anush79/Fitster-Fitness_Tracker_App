import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
export default function Header() {
  return <header>
    <div className="logo">Fitster</div>
    <div className="nav">
      <nav>
        <NavLink to='https://github.com/Anush79/Fitster-Fitness_Tracker_App' target='_blank'><GitHubIcon/></NavLink>
        <NavLink to='https://replit.com/@AnushkaJaiswal7/fitnesstracker' target='_blank'><StorageIcon/></NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/exercises'>Exercises</NavLink>
        <NavLink to='/goals'>Goals</NavLink>
        <NavLink to='/calories-intake'>Calories</NavLink>
      </nav>
    </div>
  </header>
}
import { Link, Outlet } from "react-router-dom"
import './App.css';

const Root = () => {
  return (
    <>
    <header className="header">
      <div className='navBar'>
        <Link to="/"><h1>Billy Coleman</h1></Link>
        <ul>
          <li><Link to='/women'>Women</Link></li>
          <li><Link to='/men'>Men</Link></li>
          <li><Link to='/beauty'>Beauty</Link></li>
          <li><Link to='/advertising'>Advertising</Link></li>
        </ul>
        <ul>
          <li><a href="https://www.instagram.com/billycoleman_photographer/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </header>

    <Outlet/>
    </>
  )
}

export default Root

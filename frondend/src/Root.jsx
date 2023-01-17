import { Link, Outlet } from "react-router-dom"
import { useState } from "react";
import './App.css';

const Root = () => {
  const [activeNav, setActiveNav] = useState(false)
  const changeNav = () =>{
    let boolean  = activeNav ? false: true
    setActiveNav(boolean)
  }
  return (
    <>
    <header className="header">
      <div className={`burger ${activeNav ? "burgerActive":""}`} 
      onClick={changeNav}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              <div className="drag" onTouchMove={changeNav}></div>
          </div>
      <div className={`navBar ${activeNav ? "navBarActive":""}`}>
        <Link to="/"><h1>Billy Coleman</h1></Link>
        <ul>
          <li><Link to='/women' onClick={changeNav}>Women</Link></li>
          <li><Link to='/men' onClick={changeNav}>Men</Link></li>
          <li><Link to='/beauty' onClick={changeNav}>Beauty</Link></li>
          <li><Link to='/advertising' onClick={changeNav}>Advertising</Link></li>
        </ul>
        <ul>
          <li><a href="https://www.instagram.com/billycoleman_photographer/" target="_blank" rel="noopener noreferrer" onClick={changeNav}>Instagram</a></li>
          <li><Link to='/contact' onClick={changeNav}>Contact</Link></li>
        </ul>
      </div>
    </header>

    <Outlet context={{activeNav}}/>
    </>
  )
}

export default Root

import { Link, Outlet} from "react-router-dom"
import { useState,  useEffect} from "react";
import React from "react"
import './App.css';

const Root = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState(false)
  const changeNav = () =>{
    let boolean  = activeNav ? false: true
    setActiveNav(boolean)
  }
const handleScroll = () => {
  if (Math.round((document.documentElement.scrollTop + window.innerHeight))
    < document.documentElement.scrollHeight - 50){
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <>
    <header className="header">
      <div className={`burger ${activeNav ? "burgerActive":""}`} 
      onClick={changeNav}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              <div className="drag" onTouchMove={changeNav}
              ></div>
          </div>
      <div className={`navBar ${activeNav ? "navBarActive":""}`}
        style={{height: window.innerHeight+scrollPosition, 
        paddingTop: window.innerHeight > 700 ? scrollPosition: 45 + scrollPosition}}>
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

    <Outlet context={{activeNav}} />
    </>
  )
}

export default Root

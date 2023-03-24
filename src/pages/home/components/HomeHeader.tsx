import React from "react"
import { Link } from "react-router-dom"

const HomeHeader = () => {
  return (
    <header className="header w">
      <div className="logo">
        <h1>
          <Link to="/home" title="YARA's metaverse">
            YARA
          </Link>
        </h1>
      </div>

      <div className="search">
        <input
          type="search"
          name=""
          className="search-input"
          placeholder="Music"
        />
      </div>
      <div className="hotwords">
        <Link to="/home">I</Link>
        <Link to="/home">BLINK</Link>
        <Link to="/home">MY</Link>
        <Link to="/home">EYES</Link>
        <Link to="/home">TO</Link>
        <Link to="/home">KEEP</Link>
        <Link to="/home">THE</Link>
        <Link to="/home">TIME</Link>
      </div>
      <div className="shopcar">
        My list
        <i className="count">7</i>
      </div>
    </header>
  )
}

export default HomeHeader

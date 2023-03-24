import React from "react"
import { Link } from "react-router-dom"

const list = [
  "MUSIC",
  "FILM",
  "BOOK",
  "ICON",
  "ART",
  "LE MOI",
  "JOMO",
  "CORP SLAVE",
  "CAKES&ALE",
  "NATURE",
  "PUNK ROCKER",
  "HOME",
  "DYNAMICS",
  "WALL FLOWER",
  "CONTACT",
  "PUNK"
]
const nav = [
  "WET WARE",
  "CYBORG",
  "RED NECK",
  "CORP SLAVE",
  "HOOLIGAN",
  "IMBECILE",
  "NF"
]
const HomeNav = () => {
  return (
    <nav className="nav">
      <div className="w">
        <div className="dropdown">
          <div className="dt" id="yincang">
            All categories
          </div>
          <div className="dd" id="xianshi">
            <ul>
              {list.map((item, idx) => (
                <li key={item + idx}>
                  <Link to="/home">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navitems">
          <ul>
            {nav.map((item, idx) => (
              <li key={item + idx}>
                <div className="boxxxx1">
                  <div className="front"> {item}</div>
                  <div className="back"> {item}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HomeNav

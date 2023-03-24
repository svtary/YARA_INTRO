import React from "react"
import mai from "@/assets/images/mai.jpg"
import lemoi from "@/assets/images/lemoi.jpg"
import { Link } from "react-router-dom"

const HomeMain = () => {
  return (
    <main className="main">
      <div className="focus">
        <section>
          <div>
            <img src={mai} id="jsc1" alt="" />
          </div>
          <div>
            <img src={mai} id="jsc2" alt="" />
          </div>
          <div>
            <img src={mai} id="jsc3" alt="" />
          </div>
          <div>
            <img src={mai} id="jsc4" alt="" />
          </div>
        </section>
      </div>
      <div className="newflash">
        <div className="news">
          <div className="news-hd">
            <h5>Report</h5>
            <Link to="/home" className="more">
              more
            </Link>
          </div>
          <div className="news-bd">
            <ul>
              <li>
                <Link to="/home">new Albumn</Link>
              </li>
              <li>
                <Link to="/home">Time schedule</Link>
              </li>
              <li>
                <Link to="/home">Mood</Link>
              </li>
              <li>
                <Link to="/home">Activity</Link>
              </li>
              <li>
                <Link to="/home">JOMO</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lifeservice">
          <ul>
            <li>
              <i className="sad"></i>
              <p>sad</p>
            </li>
            <li>
              <i className="flashed"></i>
              <p>flashed</p>
            </li>
            <li>
              <i className="winking"></i>
              <p>winking</p>
            </li>
            <li>
              <i className="stubborn"></i>
              <p>stubborn</p>
            </li>
            <li>
              <i className="neutral"></i>
              <p>neutral</p>
            </li>
            <li>
              <i className="stuck-out"></i>
              <p>stuck-out</p>
            </li>
            <li>
              <i className="grinning"></i>
              <p>grinning</p>
            </li>
            <li>
              <i className="smiling"></i>
              <p>smiling</p>
            </li>
            <li>
              <i className="astonished"></i>
              <p>astonished</p>
            </li>
            <li>
              <i className="evil"></i>
              <p>evil</p>
            </li>
            <li>
              <i className="sun"></i>
              <p>sun</p>
            </li>
            <li>
              <i className="numb"></i>
              <p>numb</p>
            </li>
          </ul>
        </div>
        <div className="bargin">
          <img src={lemoi} alt="" />
        </div>
      </div>
    </main>
  )
}

export default HomeMain

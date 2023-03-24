import React from "react"
import { Link } from "react-router-dom"
import "./index.modules.less"

const Footer = () => {
  return (
    <footer className="footer clearfix">
      <div className="w">
        <div className="mod_service">
          <ul>
            <li>
              <h5 className="c"></h5>
              <div className="service_txt">
                <h4>YARA</h4>
                <p>CYBORG</p>
              </div>
            </li>
            <li>
              <h5 className="i"></h5>
              <div className="service_txt">
                <h4>YARA</h4>
                <p>IMBECILE</p>
              </div>
            </li>
            <li>
              <h5 className="sl"></h5>
              <div className="service_txt">
                <h4>YARA</h4>
                <p>CORP SLAVE</p>
              </div>
            </li>
            <li>
              <h5 className="n"></h5>
              <div className="service_txt">
                <h4>YARA</h4>
                <p>NF</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mod_help">
          <dl>
            <dt>ABOUT YARA</dt>

            <dd>
              <Link to="/home">introduction</Link>
            </dd>
            <dd>
              <Link to="/home">questions</Link>
            </dd>
            <dd>
              <Link to="/home">YARA cloud</Link>
            </dd>
            <dd>
              <Link to="/home">YARA podcast</Link>
            </dd>
          </dl>
          <dl>
            <dt>YARA VALUE</dt>

            <dd>
              <Link to="/home">past</Link>
            </dd>
            <dd>
              <Link to="/home">present</Link>
            </dd>
            <dd>
              <Link to="/home">future</Link>
            </dd>
          </dl>
          <dl>
            <dt>YARA MODE</dt>

            <dd>
              <Link to="/home">wet ware</Link>
            </dd>
            <dd>
              <Link to="/home">cyborg</Link>
            </dd>
            <dd>
              <Link to="/home">corp slave</Link>
            </dd>
          </dl>
          <dl>
            <dt>YARA STATUS</dt>

            <dd>
              <Link to="/home">zoning out</Link>
            </dd>
            <dd>
              <Link to="/home">vixen</Link>
            </dd>
            <dd>
              <Link to="/home">NF</Link>
            </dd>
            <dd>
              <Link to="/home">low mood</Link>
            </dd>
            <dd>
              <Link to="/home">none to her</Link>
            </dd>
          </dl>
          <dl>
            <dt>FIND YARA</dt>

            <dd>
              <Link to="/home">E-mail</Link>
            </dd>
            <dd>
              <Link to="/home">Text</Link>
            </dd>
            <dd>
              <Link to="/home">404 not found</Link>
            </dd>
          </dl>

          <dl>
            <dt>COUNT DOWN</dt>
            <button className="begin">begin</button>
            <button className="end">stop</button>
            <br />
            <span className="day"></span>
            <span className="hour"></span>
            <span className="minute"></span>
            <span className="second"></span>
          </dl>
        </div>

        <div className="mod_copyright">
          <div className="links">
            Copyright © 2022 Yara Inc. All rights reserved.{" "}
            <Link to="/home">Privacy Policy </Link> |{" "}
            <Link to="/home">Terms of Use</Link> |{" "}
            <Link to="/home">Sales and Refunds</Link> |{" "}
            <Link to="/home">Legal</Link> | <Link to="/home">Site Map</Link>
          </div>
          <div className="copyright">Address:Mars</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

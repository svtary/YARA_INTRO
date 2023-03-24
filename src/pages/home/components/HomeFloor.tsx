import React from "react"
import { Link } from "react-router-dom"
import kanye from "@/assets/resources/kanye.jpg"
import kendricklamer from "@/assets/resources/kendricklamer.jpg"
import frankocean from "@/assets/resources/frankocean.jpg"
import TwoNe1 from "@/assets/resources/2ne1.jpg"
import lilpeep from "@/assets/resources/lilpeep.jpg"
import Two1sav from "@/assets/resources/21sav.jpg"
import posy from "@/assets/resources/posy.jpg"
import thewe from "@/assets/resources/thewe.jpg"
import mac from "@/assets/resources/posy.jpg"
import keshi from "@/assets/resources/posy.jpg"

const list = [
  kanye,
  kendricklamer,
  frankocean,
  TwoNe1,
  lilpeep,
  Two1sav,
  posy,
  thewe,
  mac,
  keshi
]

const HomeFloor = () => {
  return (
    <div className="floor">
      <div className="w MU">
        <div className="box_hd">
          <h3>
            <Link to="/home">MUSIC</Link>
          </h3>
          <div className="tab_list">
            <ul>
              <li>
                <Link to="/home">Recent</Link>
              </li>
              <li>
                <Link to="/home" className="singer">
                  Singer
                </Link>
              </li>
              <li>
                <Link to="/home">Albumn</Link>
              </li>
              <li>
                <Link to="/home">Podcast</Link>
              </li>
              <li>
                <Link to="/home">Hip-Hop</Link>
              </li>
              <li>
                <Link to="/home">Rock</Link>
              </li>
              <li>
                <Link to="/home">R&B</Link>
              </li>
              <li>
                <Link to="/home">Country</Link>
              </li>
              <li>
                <Link to="/home">Pop</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_bd clearfix">
          <div className="tab_content">
            <div className="singer">
              <ul>
                {list.map((item, idx) => (
                  <li key={idx}>
                    <div className="mask"></div>
                    <img src={item} alt="" />
                    <h4>
                      <Link to="/home">KANYE WEST</Link>
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w BO">
        <div className="box_hd">
          <h3>
            <Link to="/homeook">BOOK</Link>
          </h3>
          <div className="tab_list">
            <ul>
              <li>
                <Link to="/home">Recent</Link>
              </li>
              <li>
                <Link to="/home">Writer</Link>
              </li>
              <li>
                <Link to="/home">CyberPunk</Link>
              </li>
              <li>
                <Link to="/home" className="novel">
                  Novel
                </Link>
              </li>
              <li>
                <Link to="/home">Poem</Link>
              </li>
              <li>
                <Link to="/home">Philosophy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_bd clearfix">
          <div className="tab_content">
            <div className="novel">
              <ul>
                <li>
                  <div className="mask"></div>
                  <img src="upload/shenj.jpg" alt="" />
                  <h4>
                    NEUROMANCER
                    <br />
                    <Link to="/home">WILLIAM FORD GIBSON</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/JIAM.png" alt="" />
                  <h4>
                    LA CHUTE <br />
                    <Link to="/home">ALBERT CAMUS</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/chang.png" alt="" />
                  <h4>
                    THE REMAINS OF THE DAY
                    <br />
                    <Link to="/home">KAZUO ISHIGURO</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/zal.png" alt="" />
                  <h4>
                    倾城之恋
                    <br />
                    <Link to="/home">张爱玲</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/BN.png" alt="" />
                  <h4>
                    ONE HUNDRED YEARS OF SOLITUDE
                    <br />
                    <Link to="/home">加西亚·马尔克斯</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/zhui1.jpg" alt="" />
                  <h4>
                    THE KITE RUNNER <br />
                    <Link to="/home">KHALED HOSSEINI</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/GUO1.jpg" alt="" />
                  <h4>
                    国境の南、太阳の西
                    <br />
                    <Link to="/home">村上春树</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/cha1.jpg" alt="" />
                  <h4>
                    THE DIFFERENCE ENGINE
                    <br />
                    <Link to="/home">威廉·吉布森&布鲁斯·斯特林</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/shu.jpg" alt="" />
                  <h4>
                    晚熟的人
                    <br />
                    <Link to="/home">莫言</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/fang.jpg" alt="" />
                  <h4>
                    房思琪的初恋乐园
                    <br />
                    <Link to="/home">林奕含</Link>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w IC">
        <div className="box_hd">
          <h3>
            <Link to="/homecon">ICON</Link>
          </h3>
          <div className="tab_list">
            <ul>
              <li>
                <Link to="/home">Recent</Link>
              </li>
              <li>
                <Link to="/home">Model</Link>
              </li>
              <li>
                <Link to="/home" className="actor">
                  Actor
                </Link>
              </li>
              <li>
                <Link to="/home">Tantalisingly out of reach</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_bd clearfix">
          <div className="tab_content">
            <div className="actor">
              <ul>
                <li>
                  <div className="mask"></div>
                  <img src="upload/jcw.png" alt="" />
                  <h4>
                    <Link to="/home">Takeshi Kaneshiro</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/jn.png" alt="" />
                  <h4>
                    <Link to="/home">Keanu Reeves</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/dp.png" alt="" />
                  <h4>
                    <Link to="/home">Johnny Depp</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/bp.png" alt="" />
                  <h4>
                    <Link to="/home">Brad Pitt</Link>
                  </h4>
                </li>
                <li>
                  <div className="mask"></div>
                  <img src="upload/lb.png" alt="" />
                  <h4>
                    <Link to="/home">Robert Pattinson</Link>
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFloor

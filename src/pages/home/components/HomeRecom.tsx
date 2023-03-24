import React from "react"
import vibe from "@/assets/images/vibe.png"
import musi from "@/assets/images/musi.jpg"
import charg from "@/assets/images/charg.jpg"
import sho from "@/assets/images/sho.jpg"
import slee from "@/assets/images/slee.jpg"

const HomeRecom = () => {
  return (
    <div className=" w recom">
      <div className="recom_hd">
        <img src={vibe} alt="" />
      </div>
      <div className="recom_bd">
        <ul>
          <li>
            <div className="mask"></div>
            <img src={musi} alt="" />
          </li>
          <li>
            <div className="mask"></div>
            <img src={charg} alt="" />
          </li>
          <li>
            <div className="mask"></div>
            <img src={sho} alt="" />
          </li>
          <li>
            <div className="mask"></div>
            <img src={slee} alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeRecom

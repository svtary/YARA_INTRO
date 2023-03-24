import BackToTop from "@/components/BackToTop"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"
import HomeHeader from "./components/HomeHeader"
import HomeMain from "./components/HomeMain"
import HomeNav from "./components/HomeNav"
import HomeRecom from "./components/HomeRecom"
import HomeFloor from "./components/HomeFloor"
import "./components/common.modules.less"
import "./index.modules.less"

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <HomeHeader />
        <HomeNav />
        <HomeMain />
        <HomeRecom />
        <HomeFloor />
      </div>
      <Footer />
      <BackToTop />
    </>
  )
}

export default Home

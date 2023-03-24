import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import "./index.modules.less"

const Header = () => {
  const nav = useRef<HTMLElement | null>(null)
  const [isNavShowing, setIsNavShowing] = useState<boolean>(true)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const onFocusChange = () => setIsFocus((prve) => !prve)
  const transitionNavBar = () => {
    // console.log(nav);
    if (nav.current !== undefined) {
      const y = window.scrollY
      console.log(isNavShowing)
      if (y < 200) {
        setIsNavShowing(true)

        // return nav.current!.style.marginTop = "0"
      } else {
        setIsNavShowing(false)
        // return nav.current!.style.marginTop = "-60px"
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    // <nav className={`nav-container${isFocus ? " wide" : ""}`} ref={nav}>
    //   <div className="nav-logo">
    //     <Link to="/home"></Link>
    //   </div>
    //   <div className="nav-wrapper"></div>
    //   <div className="nav-search">
    //     <input
    //       className="search-input"
    //       type="search"
    //       placeholder="Search"
    //       onFocus={onFocusChange}
    //       onBlur={onFocusChange}
    //     />
    //   </div>
    // </nav>
    <section className="shortcut">
      <div className="fl">
        <ul>
          <li>Welcome to YARA's metaverse</li>
          <li>
            <Link to="/home">log in &nbsp; </Link>
          </li>
          <li>
            <Link to="/register" className="style_black" target="_blank">
              sign up
            </Link>
          </li>
        </ul>
      </div>
      <div className="fr">
        <ul>
          <li className="arrow-icon"> My status </li>
          <li className="arrow-icon"> Premium </li>
          <li> Trending </li>
          <li> News & Politics </li>
          <li> About </li>
          <li> Support </li>
          <li> Download </li>
        </ul>
      </div>
    </section>
  )
}

export default Header

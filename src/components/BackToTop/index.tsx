import { useEffect, useRef } from "react"
import "./index.css"

const BackToTop = () => {
  const toTop = useRef<HTMLDivElement | null>(null)
  const transitionBackToTop = () => {
    if (toTop.current !== undefined) {
      if (window.scrollY < 200) {
        return (toTop.current!.style.opacity = "0")
      } else {
        return (toTop.current!.style.opacity = "1")
      }
    }
  }
  const forBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  // const HashChange = (a, b, c) => {
  //   console.log(a, b, c)
  // }

  window.addEventListener("scroll", transitionBackToTop)
  // window.addEventListener("hashchange", HashChange, false)
  useEffect(() => () => window.removeEventListener("scroll", transitionBackToTop))

  return (
    <div className="back-to-top" ref={toTop} onClick={forBackToTop}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M1.73734 0.5V1.75H14.2373V0.5H1.73734Z" />
        <path
          fill="currentColor"
          d="M15.0669 8.86364L14.1831 9.74752L8.62087 4.18534V15.5426H7.37087V4.18534L1.80869 9.74752L0.924805 8.86364L7.99587 1.79257L15.0669 8.86364Z"
        />
      </svg>
    </div>
  )
}

export default BackToTop

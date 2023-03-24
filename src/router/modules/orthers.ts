import { lazy } from "react"
import { IRouter } from "../index"
import home from "./home"
import search from "./search"
import login from "./login" 
// import three from "./three"


const otherRoutes: IRouter[] = [
  {
    path: "/403",
    Component: lazy(() => import("@/pages/Result/403"))
  },
  {
    path: "/500",
    Component: lazy(() => import("@/pages/Result/500"))
  },
  {
    path: "*",
    Component: lazy(() => import("@/pages/Result/404"))
  },
  ...home,
  ...search,
  ...login,
  // ...three
]

export default otherRoutes

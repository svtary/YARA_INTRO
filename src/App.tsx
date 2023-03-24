import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"

import Detail from "./pages/detail"
import Home from "./pages/home"
import Search from "./pages/search"
import NotFound from "./pages/Result/404"

import "./App.less"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App

import { Route, Router } from "react-router"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes } from "react-router"
import About from "./components/about/About"

function App() {


  return (
    <div className="container">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>


  )
}

export default App

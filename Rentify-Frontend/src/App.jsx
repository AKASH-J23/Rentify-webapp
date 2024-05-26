import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.component"
import Login from "./pages/login"
import Register from "./pages/register"
import CreateProperty from "./pages/createProperty"

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/create" exact element={<CreateProperty/>} />
      </Routes>
    </div>
  )
}

export default App

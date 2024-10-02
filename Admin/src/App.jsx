import React from "react"
import Navbar from "./component/Navbar"
import Admin from "./pages/Admin"

export default function App() {
  return (
   <main className="bg-primary text-tertiary">
    <Navbar />
    <Admin />
   </main>
  )
}
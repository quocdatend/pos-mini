import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Cart from "./components/Cart"
import { useState } from "react"

function App() {
  const [displayCart, setDisplayCart] = useState(false)
  return (
    <div className="min-h-screen bg-slate-100 text-black overflow-hidden">
      <Navbar  setDisplayCart={setDisplayCart}/>
      <div className="fixed top-16 w-full md:top-20 md:px-4 lg:px-0 lg:top-24 max-w-7xl mx-auto px-2 py-4">
        {displayCart ? <Cart /> : <Content />}
      </div>
    </div>
  )
}

export default App

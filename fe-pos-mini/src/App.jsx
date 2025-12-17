import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Order from "./components/Order"
import { useState } from "react"

function App() {
  const [displayOrder, setDisplayOrder] = useState(false)
  return (
    <div className="min-h-screen bg-slate-100 text-black overflow-hidden">
      <Navbar  setDisplayOrder={setDisplayOrder}/>
      <div className="fixed top-16 w-full md:top-20 md:px-4 lg:px-0 lg:top-20 mx-auto">
        {displayOrder ? <Order /> : <Content />}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  )
}

export default App

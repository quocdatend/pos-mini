import { MenuIcon, XIcon } from "lucide-react";
// import { useState } from "react";

export default function Navbar({ setDisplayCart }) {
    // const [menuIsOpen, setMenuIsOpen] = useState(false)
    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-blue-950 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <a href="" className="flex items-center space-x-1 group cursor-pointer">
                    <div>
                        <img src="./src/assets/pos.png" alt="pos" className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="text-white">Mini</span>
                        <span className="text-blue-500">POS</span>
                    </span>
                </a>

                <div>
                    <a onClick={() => setDisplayCart(true)} className="text-white font-medium hover:cursor-pointer hover:text-blue-500">Giỏ Hàng</a>
                </div>
                {/* <div className="hidden md:flex items-center space-w-6 lg:space-x-8">
                    
                </div> */}
                {/* <button className="md:hidden items-centerp-2 text-gray-300 hover:text-white" onClick={() => setMenuIsOpen((prev) => !prev)}>
                    {menuIsOpen ? (<XIcon className="w-5 h-5 sm:w-6 sm:h-6"/>) : (<MenuIcon className="w-5 h-5 sm:w-6 sm:h-6"/>)}
                </button> */}
            </div>
        </div>
            {/* {menuIsOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top duration-300">
                    <div>
                        <a href="#" className="block text-gray-300 hover:text-white text-sm lg:text-base">Giỏ Hàng</a>
                    </div>
                </div>
            )} */}
    </nav>
}
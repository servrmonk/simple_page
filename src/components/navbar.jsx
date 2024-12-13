import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex justify-between items-center w-full h-16 px-6 shadow-lg">
        
        
        <div className="text-2xl font-semibold">Accounting</div>

        
        <div className="flex items-center space-x-6">
          
          <input
            className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="🔍 Search"
          />
          
          
          <p className="text-sm">Help |</p>
          
          
          <div className="relative">
            <FaBell className="text-xl hover:text-yellow-400 cursor-pointer transition duration-300" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>

          
          <FaRegUserCircle className="text-2xl hover:text-blue-400 cursor-pointer transition duration-300" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

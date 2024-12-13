import { useState } from "react";
import Popupform from "./form";

function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mt-5 border border-slate-200">
      <div className="w-full inline-block">
        🔍
        <input type="text" placeholder="Search" />
        <div className="w-[29%] px-3 border inline-block border-slate-400">
          <select name="Filter by Fields" id=""></select>
        </div>
        <div className="w-[29%] px-3 border inline-block border-slate-400">
          <input type="text" />
        </div>
        
        {/* Colorful Buttons */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 px-6 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none rounded-md shadow-md mx-2 transition-all"
        >
          Create Product
        </button>
        <button className="p-2 px-6 bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none rounded-md shadow-md mx-2 transition-all">
          Show Chart
        </button>
        <button className="p-2 px-6 bg-green-500 text-white hover:bg-green-600 focus:outline-none rounded-md shadow-md mx-2 transition-all">
          ...
        </button>
      </div>

      {open && <Popupform closeModal={() => setOpen(false)} />}
      
      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs border border-slate-200 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-2 border border-slate-200 "></th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">CreatedAt</th>
            <th scope="col" className="px-6 py-3">UpdatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-1 py-1 border border-slate-200 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">Bag</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">11/11/2023</td>
            <td className="px-6 py-4">11/11/2023</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-1 border border-slate-200 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2
            </th>
            <td className="px-6 py-4">Formal Shirt</td>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">11/11/2023</td>
            <td className="px-6 py-4">11/11/2023</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-1 py-1 border border-slate-200 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              3
            </th>
            <td className="px-6 py-4">Water Bottle</td>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">11/11/2023</td>
            <td className="px-6 py-4">11/11/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HeroSection;

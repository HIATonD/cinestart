import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center mx-4 md:mx-8 lg:mx-28 h-20 z-[100] absolute right-0 left-0">
      <h1 className="text-indigo-600 text-2xl font-semibold cursor-pointer uppercase">
        HIA<span className="text-red-600">TonD</span>
      </h1>
      <div className="sm:flex items-center hidden  text-white px-4 py-2 w-[30%] bg-gray-500/40 rounded-3xl">
        <FaSearch className="mr-2" />
        <input
          type="text"
          className="bg-transparent border-none outline-0 w-full"
          placeholder="Find Movies & TV"
        />
      </div>
      <div>
        <button className="bg-transparent border-2 border-red-600 text-white items-center rounded-3xl text-[14px] font-medium px-8 py-2 cursor-pointer hover:bg-red-600/80">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;

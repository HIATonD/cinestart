// import { Fa } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center mx-4 sm:mx-8 h-20 z-[100] absolute right-0 left-0">
      <h1 className="text-indigo-600 text-2xl font-semibold cursor-pointer uppercase">
        Cinestar
      </h1>
      <div>
        <button className="bg-red-600 text-white items-center rounded text-[14px] font-medium px-4 py-1 cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;

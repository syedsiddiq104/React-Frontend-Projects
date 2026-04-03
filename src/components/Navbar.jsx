import { NavLink } from "react-router-dom";

const Navbar = ({ open, setOpen }) => {
  

  return (
    <div
      className={`h-screen ${
        open ? "w-64" : "w-20"
      } bg-slate-200 border-r border-gray-200 p-4 fixed transition-all duration-300`}
    >
     
      <button
        onClick={() => setOpen(!open)}
        className="mb-6 bg-blue-500 text-white px-3 py-1 rounded"
      >
        ☰
      </button>

      <nav className="flex flex-col gap-4 text-center text-lg text-gray-700">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-black hover:text-white"
            }`
          }
        >
          {open ? "Home" : "🏠"}
        </NavLink>

        <NavLink
          to="/otpvalidation"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-black hover:text-white"
            }`
          }
        >
          {open ? "OTP Validation" : "🔑"}
        </NavLink>

        <NavLink
          to="/movie"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-black hover:text-white"
            }`
          }
        >
          {open ? "Movies" : "🎬"}
        </NavLink>

        <NavLink
          to="/todo"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-black hover:text-white"
            }`
          }
        >
          {open ? "Todo" : "📋"}
        </NavLink>

        <NavLink
          to="/Index"
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-black hover:text-white"
            }`
          }
        >
          {open ? "Bikes Hub" : "🏍️"}
        </NavLink>

      </nav>
    </div>
  );
};

export default Navbar;
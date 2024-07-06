import { NavLink } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const isActive = ({ isActive }) =>
    `${
      isActive ? "bg-gray-700" : ""
    } text-white hover:bg-gray-800 hover:text-white rounded-md px-3 py-2`;

  return (
    <nav className="bg-sky-700 border-b border-sky-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center md:items-stretch justify-between">
            <NavLink
              className="flex flex-shrink-0 items-center justify-between"
              to="/"
            >
              <AdjustmentsHorizontalIcon className="size-6 text-white" />

              <span className="block text-white text-2xl font-bold ml-2">
                React
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={isActive}>
                  Home
                </NavLink>
                <NavLink to="/posts" className={isActive}>
                  Posts
                </NavLink>
                <NavLink to="/new-post" className={isActive}>
                  New Post
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

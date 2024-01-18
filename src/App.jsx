import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="drawer">
      <input id="side-drawer" type="checkbox" className="drawer-toggle"></input>
      <div className="drawer-content">
        <div className="flex items-center fixed w-full px-2 bg-base-100">
          <label
            htmlFor="side-drawer"
            aria-label="open sdebar"
            className="btn btn-ghost md:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </label>
          {/* Navbar */}
          <div className="navbar ml-auto md:px-24 lg:px-36 justify-center ">
            <h1 className="text-lg">ZMdev</h1>
            <ul className="menu menu-horizontal ml-auto hidden md:flex">
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Projects</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Main Content */}
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="side-drawer"
          aria-label="close sdebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 h-full p-4 w-2/5 pt-24 flex flex-col gap-4">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Projects</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

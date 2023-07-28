import Link from "next/link";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link className="mr-1" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="mr-1" href="/pcBuild">
          PC Builder
        </Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li>
              <a>CPU / Processor</a>
            </li>
            <li>
              <a>Motherboard</a>
            </li>
            <li>
              <a>RAM</a>
            </li>
            <li>
              <a>Power Supply Unit</a>
            </li>
            <li>
              <a>Storage Device</a>
            </li>
            <li>
              <a>Monitor</a>
            </li>
            <li>
              <a>Others</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-base"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">AB Tech</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-base">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-neutral">Login</a>
      </div>
    </div>
  );
};

export default Navbar;

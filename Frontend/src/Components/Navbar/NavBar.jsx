import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
<div className="navbar bg-gray-200 text-gray-900 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Blog Page</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink> </li>
      <li><NavLink to="/post">Add Post</NavLink> </li>
    </ul>
  </div>
</div>
    )
}

export default NavBar

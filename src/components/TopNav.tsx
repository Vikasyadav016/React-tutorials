import { NavLink } from 'react-router-dom'

function TopNav() {
  return (
    <header className="topnav">
      <div className="brand">
        <span>React Redux Tutorial</span>
      </div>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/counter" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Counter
        </NavLink>
        <NavLink to="/todo" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Todo
        </NavLink>
        <NavLink to="/redux-guide/toolkit" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Redux Guide
        </NavLink>
      </nav>
    </header>
  )
}

export default TopNav

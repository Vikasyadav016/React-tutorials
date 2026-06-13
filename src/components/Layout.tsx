import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

function Layout() {
  return (
    <div className="app-shell">
      <TopNav />
      <div className="layout-grid">
        <Sidebar />
        <main className="main-outlet">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout

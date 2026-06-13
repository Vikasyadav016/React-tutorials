import { NavLink, useLocation } from 'react-router-dom'
import { appMenu, AppMenuItem } from '../menu'
import { useMemo, useState } from 'react'

function Sidebar() {
  const location = useLocation()
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const activePath = location.pathname

  const activeKeys = useMemo(() => {
    const keys: string[] = []

    function findPath(item: AppMenuItem, parents: string[]): boolean {
      if (item.path === activePath) {
        keys.push(...parents)
        return true
      }
      if (item.children) {
        return item.children.some((child) => findPath(child, [...parents, item.id]))
      }
      return false
    }

    appMenu.forEach((item) => findPath(item, []))
    return keys
  }, [activePath])

  const handleToggle = (id: string) => {
    setOpenKeys((current) =>
      current.includes(id) ? current.filter((key) => key !== id) : [...current, id]
    )
  }

  const isOpen = (id: string) => openKeys.includes(id) || activeKeys.includes(id)

  const renderMenu = (items: AppMenuItem[], level = 0) => (
    <ul className={`menu-list level-${level}`}>
      {items.map((item) => (
        <li key={item.id}>
          {item.children ? (
            <>
              <button className="menu-toggle" onClick={() => handleToggle(item.id)}>
                <span>{item.label}</span>
                <span>{isOpen(item.id) ? '▾' : '▸'}</span>
              </button>
              {isOpen(item.id) && renderMenu(item.children, level + 1)}
            </>
          ) : (
            <NavLink to={item.path!} className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
        <p>Navigate tutorials, examples, and guides.</p>
      </div>
      <nav>{renderMenu(appMenu)}</nav>
    </aside>
  )
}

export default Sidebar

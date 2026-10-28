
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../../assets/images/logo.png'

const departments = [
  { name: 'Technology & Digital', path: '/departments/technology' },
  { name: 'Health & Nutrition', path: '/departments/health' },
  { name: 'Agriculture & Food', path: '/departments/agriculture' },
  { name: 'Education & Skills', path: '/departments/education' },
  { name: 'Business & Enterprise', path: '/departments/business' },
  { name: 'Research, Data & Intelligence', path: '/departments/research' },
  { name: 'Finance & Investment', path: '/departments/finance' },
  { name: 'Media & Communication', path: '/departments/media' },
  { name: 'Logistics & Distribution', path: '/departments/logistics' },
  { name: 'Community Development', path: '/departments/community' },
  { name: 'Real Estate & Infrastructure', path: '/departments/real-estate' },
  { name: 'Innovation & Strategy', path: '/departments/innovation' },
]

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'News', path: '/news' },
  { name: 'Opportunities', path: '/opportunities' },
  { name: 'Contact', path: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [departmentsOpen, setDepartmentsOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setDepartmentsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Golden Bridge Concept logo"
            className="brand-logo"
          />
          <span className="brand-copy">
            <strong>GOLDEN BRIDGE</strong>
            <small>CONCEPT</small>
          </span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.slice(0, 2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="department-nav">
            <button
              className="nav-link department-toggle"
              type="button"
              aria-expanded={departmentsOpen}
              onClick={() => setDepartmentsOpen(!departmentsOpen)}
            >
              Departments <ChevronDown size={16} />
            </button>

            <div
              className={`department-dropdown ${
                departmentsOpen ? 'is-open' : ''
              }`}
            >
              {departments.map((department) => (
                <Link
                  key={department.path}
                  to={department.path}
                  onClick={closeMenu}
                >
                  {department.name}
                </Link>
              ))}
            </div>
          </div>

          {links.slice(2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

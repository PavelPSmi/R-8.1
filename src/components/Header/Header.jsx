import { Outlet, Link, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

// import styles from './Header.module.css'
import styles from './Header.css'
import Container from "@mui/material/Container";
export const navigate = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  }, {
    id: 4,
    name: 'About',
    to: '/About'
  }, {
    id: 5,
    name: 'Rick and Morty',
    to: '/rickandmorty'
  }, {
    id: 6,
    name: 'Sign In',
    to: '/signIn'
  }, {
    id: 7,
    name: 'Sign Un',
    to: '/signUp'
  },
]

export function Header() {

  const name = useSelector((store) => store.name)

  return (
    <Container  className='container-style'>
      <nav className={styles.header}>
        <ul className='header'>
          {navigate.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? '#d72472' : '#eaaa09'
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <p>{name}</p>
      </nav>
      <main>
        <Outlet />
      </main>
    </ Container>
  )
}
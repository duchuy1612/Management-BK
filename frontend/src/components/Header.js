import './Header.css'
// import avatar from '../../assets/avatar.svg'
import { useSelector } from 'react-redux'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userCred } = userLogin
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars' aria-hidden='true'></i>
      </div>
      <p>Teaching Center Management</p>
      <div className='navbar__right'>
        <span className='loggedinas'>
          <img src={userCred && userCred.image} alt='sdf' />
          {/* <p>{userCred && userCred.name}</p> */}
        </span>
      </div>
    </nav>
  )
}

export default Navbar

import { MenuItems } from "./MenuItems"
import { Button } from '../Button'
import { toggleActive } from "../../redux/actions/navbarActions"
import { logoutAction } from "../../redux/actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {    
    const dispatch = useDispatch()

    function handleClick() {
       dispatch(toggleActive())
    }

    function handleLogOut() {
        dispatch(logoutAction())
    }

    const active = useSelector(state => state.navbar.active)
    const user = useSelector(state => state.user)
    
    function renderContent() {
        if (user.isLoggedIn === false) {
            return (
                <>
                <li>
                    <Link className="nav-links" to="/students">
                        Students
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/teachers">
                        Teachers
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/contact">
                        Contact Us
                    </Link>
                </li> 
                <li>
                    <Link className="nav-links-mobile" to="/signup">
                        Sign Up
                    </Link>
                </li>
                </>
            )
        } else if (user.isLoggedIn && user.userInfo.teacher === null) {
            return (
                <>
                <li>
                    <Link className="nav-links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/create-lesson">
                        Create Lesson
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/grades">
                        Grades
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/studio">
                        Studio Info
                    </Link>
                </li>
                <li>
                    <Link className="nav-links-mobile" to="/" onClick={() => handleLogOut()}>
                        Log Out
                    </Link>
                </li>
                </>
            )
        } else {
            return (
                <>
                <li>
                    <Link className="nav-links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/practice">
                        Practice Journal
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/grades">
                        Grades
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="/past-lessons">
                        Past Lessons
                    </Link>
                </li>
                <li>
                    <Link className="nav-links-mobile" to="/" onClick={() => handleLogOut()}>
                        Log Out
                    </Link>
                </li>
                </>
            )
        }
    }
    
    
    return (
        <nav className="NavbarItems">
            <Link className='navbar-logo-big' to="/">
                <h1 className='navbar-logo'>Lessons App</h1>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
            {renderContent()}
            </ul>
            {user.isLoggedIn 
            ?   <Button onClick={handleLogOut}>Log Out</Button>
            :   <Link to="/signup">
                    <Button>
                        Sign Up
                    </Button>
                </Link>
            }
        </nav>
    )
}

export default Navbar

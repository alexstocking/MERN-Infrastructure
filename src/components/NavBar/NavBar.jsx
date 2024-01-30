import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut()

        setUser(null)
    }

    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/New">New Order</Link>
            <h3>Welcome {user.name}</h3> 
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav>
        )
}
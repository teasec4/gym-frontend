import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";


const Nav = () => {

    const {logout} = useLogout()
    const {user} = useAuthContext()
    const handleClick= () => {
        logout()
    }

    return(
        <div>

            {user && (
                    <div className="nav-background shadow text-light d-flex justify-content-between align-items-center container-fluid p-2">
                        <Link to='/achive' className="nolink">
                            <p className="p-0 m-0 d-flex align-items-center nolink">{user.email}</p>
                        </Link>
                        <button className="btn-logout" onClick={handleClick}>
                            LOGOUT
                        </button>
                    </div>
            )}

                {!user && (
                    <div className="nav-background shadow text-light align-items-center d-flex justify-content-between m-auto container-fluid p-2">
                        <Link to='/signup'>
                            <button className="btn-signup">SIGN UP</button>
                        </Link>
                        <Link to='/login'>
                            <button className="btn-signup">LOGIN</button>
                        </Link>
                    </div>
                )}
</div>
    )
}

export default Nav
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
                    <div className="bg-dark text-light d-flex justify-content-between align-items-center container-fluid p-2">
                        <p className="p-0 m-0 d-flex align-items-center">{user.email}</p>
                        <button className="btn btn-outline-danger" onClick={handleClick}>logout</button>
                    </div>
            )}

                {!user && (
                    <div className="bg-dark text-light align-items-center d-flex justify-content-between m-auto container-fluid p-2">
                        <Link to='/signup'>
                            <button className="btn btn-outline-success">SIGN UP</button>
                        </Link>
                        <Link to='/login'>
                            <button className="btn btn-success">LOGIN</button>
                        </Link>
                    </div>
                )}
</div>
    )
}

export default Nav
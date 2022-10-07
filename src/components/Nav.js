import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'


const Nav = ({click, setClick}) => {

    const {logout} = useLogout()
    const {user} = useAuthContext()
    const handleClick= () => {
        logout()
    }

    const handleChange = () => {
        setClick(!click)
    }

    console.log(click)

    return(
        <div>

            {user && (
                    <div className="nav-background shadow d-flex justify-content-between align-items-center container-fluid p-2">
                        <Link to={click ? '/' : '/achive'} className="nolink">
                            <motion.p 
                            initial={{ transform: "scale(1.08)", color:'white'}}
                            animate={{ transform: "scale(1)" , color: 'gold'}}
                            transition={{duration: 1, yoyo: Infinity, ease:"easeOut"}}
                            className="p-0 m-0 d-flex align-items-center nolink" onClick={handleChange}>
                                {click ? "home" : `achive`}
                            </motion.p>
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
import { useState, CSSProperties } from "react";
import Loader from "../components/Loader";
import Modal from "../components/Modal/Modal";
import {useSignup} from '../hooks/useSignup'
import SquareLoader from 'react-spinners/SquareLoader'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#4B2D9F",
  };

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const {signup, error, isLoading} = useSignup()
    let [color, setColor] = useState('#4B2D9F')
    const [modalActive, setModalActive] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password, password2)
    }
    
    
    return(
        <div className="container d-flex justify-content-center align-item-cneter m-auto">
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
                <h3 className="mt-2 fw-bold">Sign Up</h3>
                <label>Email:</label>
                <input type={'email'} placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type='password' placeholder="make me stronger" onChange={(e) => setPassword(e.target.value)}/>
                <label>Confirm Password:</label>
                <input type='password' placeholder="do not hurry up" onChange={(e) => setPassword2(e.target.value)}/>
                <button  disabled={isLoading} type='submit' className="mt-2 btn-login">
                    Sign Up
                </button>
                {error && <div className="text-danger mt-3">
                            {error}
                        </div>}
            </form>
            <Modal active={isLoading} setActive={setModalActive}>
                <div className="d-flex justify-content-center">
                    <SquareLoader color={color} loading={isLoading} cssOverride={override} size={80}/>
                </div>
            </Modal>
        </div>
    )
}

export default Signup;
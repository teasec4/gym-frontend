import { useState } from "react";
import Loader from "../components/Loader";
import Modal from "../components/Modal/Modal";
import {useSignup} from '../hooks/useSignup'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const {signup, error, isLoading} = useSignup()
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
                <input type={'email'} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)}/>
                <label>Confirm Password:</label>
                <input type='password' onChange={(e) => setPassword2(e.target.value)}/>
                <button  disabled={isLoading} type='submit' className="btn btn-success mt-2">
                    Sign Up
                </button>
                {error && <div className="text-danger">
                            {error}
                        </div>}
            </form>
            <Modal active={isLoading} setActive={setModalActive}>
                <div className="d-flex justify-content-center">
                    <Loader/>
                </div>
            </Modal>
        </div>
    )
}

export default Signup;
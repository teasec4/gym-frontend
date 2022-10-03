import React, {useState, CSSProperties} from 'react'
import {useLogin} from '../hooks/useLogin'
import Modal from '../components/Modal/Modal'
import Loader from '../components/Loader'
import SquareLoader from 'react-spinners/SquareLoader'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#4B2D9F",
  };

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    let [color, setColor] = useState('#4B2D9F')
    const [modalActive, setModalActive] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
        
    }
    return(
        <div className='container d-flex justify-content-center align-item-cneter m-auto'>
            <form className={'d-flex flex-column m-auto'} onSubmit={handleSubmit}>
                <h3 className='mt-2 fw-bold'>Log in</h3>
                <label>Email:</label>
                <input
                    type={'email'}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type={'password'}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={isLoading ? 'btn-signup mt-2' : 'btn-login mt-2'} disabled={isLoading} type={'submit'}>
                    Log in
                </button>
                {error && <div className={'text-danger mt-3'}>
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

export default Login;
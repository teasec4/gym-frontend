import React, {useState} from 'react'
import {useLogin} from '../hooks/useLogin'
import Modal from '../components/Modal/Modal'
import Loader from '../components/Loader'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
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
                <button className={isLoading ? 'btn btn-secondary mt-2' : 'btn btn-success mt-2'} disabled={isLoading} type={'submit'}>
                    Log in
                </button>
                {error && <div className={'text-danger'}>
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

export default Login;
import { useReducer } from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Loader from '../components/Loader'
import Description from '../components/Description'
import Modal from '../components/Modal/Modal'
import { useAuthContext } from '../hooks/useAuthContext'
import {useContentContext} from '../hooks/useContentContext'


const Home = () => {
    const {user} = useAuthContext()
    const {info, loading, error, dispatch} = useContentContext()
    const [banchpress, setBanch] = useState('')
    const [squad, setSquad] = useState('')
    const [deadlift, setDeadlift] = useState('')

    
    const [moodalActive, setModalActive] = useState(false)
    const [modalActive2, setModalActive2] = useState(false)
    const [modalActive3, setModalActive3] = useState(false)
    const [modalLoading, setModalLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const banch1 = {banchpress}
        console.log(banch1)
        setModalLoading(true)

        const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/update/banch', {
            method: "PATCH",
            body: JSON.stringify(banch1),
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            setBanch('')
            setModalLoading(false)
            fetchInfo()
            setModalActive(false)
        }
    }
    const handleSubmit2 = async (e) => {
        e.preventDefault()

        const squad1 = {squad}
        console.log(squad)

        const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/update/squad', {
            method: "PATCH",
            body: JSON.stringify(squad1),
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            setSquad('')
            fetchInfo()
            setModalActive2(false)
        }
    }
    const handleSubmit3 = async (e) => {
        e.preventDefault()

        const deadlift1 = {deadlift}
        console.log(deadlift1)

        const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/update/deadlift', {
            method: "PATCH",
            body: JSON.stringify(deadlift1),
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            setDeadlift('')
            fetchInfo()
            setModalActive3(false)
        }
    }

    const fetchInfo = async () => {
        dispatch({type:"FETCH_REQUEST"})
        try{
            const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/get', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(response.ok){
                dispatch({type:"FETCH_SUCCESS", payload:json})
                console.log(json)
            }


        } catch (error) {
            dispatch({type:"FETCH_FAIL", payload:error.message})
        }
     }


    useEffect(() => {
        fetchInfo()
    }, [])

    return(
        <div>
            {loading && (
                <div className='d-flex justify-content-center mt-5'>
                    <Loader/>
                </div>
            )}
            {!loading && (
                <>
                    <Description setActive={setModalActive} info={info.banchpress} title={'BENCHPRESS'}/>
                <Modal active={moodalActive} setActive={setModalActive}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fw-bold fs-1'>BENCHPRESS</p>
                        <input type='number' className='fs-2' style={{width:'100px'}} value={banchpress} onChange={(e) => setBanch(e.target.value)} />
                        <button disabled={(banchpress.toString().length < 1 ? true : false)} onClick={handleSubmit} className={(banchpress.toString().length < 1 ? 'btn-add nonactive mt-2' : 'btn-add mt-2')}>ADD</button>
                    </div>
                </Modal>
                <Description setActive={setModalActive2} info={info.squad} title={'SQUAD'}/>
                <Modal active={modalActive2} setActive={setModalActive2}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fw-bold fs-1'>SQUAD</p>
                        <input type='number' className='fs-2' style={{width:'100px'}} value={squad} onChange={(e) => setSquad(e.target.value)} />
                        <button  disabled={(squad.toString().length < 1 ? true : false)} onClick={handleSubmit2} className={(squad.toString().length < 1 ? 'btn-add nonactive mt-2' : 'btn-add mt-2')}>ADD</button>
                    </div>
                </Modal>
                <Description setActive={setModalActive3} info={info.deadlift} title={'DEADLIFT'}/> 
                <Modal active={modalActive3} setActive={setModalActive3}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fw-bold fs-1'>DEADLIFT</p>
                        <input type='number' className='fs-2' style={{width:'100px'}} value={deadlift} onChange={(e) => setDeadlift(e.target.value)} />
                        <button disabled={(deadlift.toString().length < 1 ? true : false)} onClick={handleSubmit3} className={(deadlift.toString().length < 1 ? 'btn-add nonactive mt-2' : 'btn-add mt-2')}>ADD</button>
                    </div>
                </Modal>
                
                </>
            )}
            
        </div>
    )
}

export default Home
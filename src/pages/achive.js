import Modal from "../components/Modal/Modal"
import ProgressBar from "../components/ProgressBar"
import { useState, useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useContentContext } from "../hooks/useContentContext"



const Achive = () => {
    const {info, loading, error} = useContentContext()
    const {user} = useAuthContext()


    const [achive, setAchive] = useState([])

    const fetchInfo = async () => {
        try{
            const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/get/achive', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(response.ok){
                setAchive(json)
            }


        } catch (error) {
            console.log(error)
        }
     }

    useEffect(() => {
        
        fetchInfo()
    }, [])

    const achiveBanch = Number(achive.banchpress)
    const achiveSquad = Number(achive.squad)
    const achiveDeadlift = Number(achive.deadlift)
    console.log(achive)
    const bench150 = (Math.round((Number(info.banchpress)/achiveBanch*100)))
    const squad200 = (Math.round((Number(info.squad)/achiveSquad*100)))
    const deadlift200 = (Math.round((Number(info.deadlift)/achiveDeadlift*100)))

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

        const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/update/achive/banch', {
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
            // window.location.reload()
            fetchInfo()
            setModalActive(false)
            
        }
    }
    const handleSubmit2 = async (e) => {
        e.preventDefault()

        const squad1 = {squad}
        console.log(squad)

        const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/update/achive/squad', {
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

        const response = await fetch('https://gym-backend-1.herokuapp.com/api/user/update/achive/deadlift', {
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


    return (
        <div> 
            <div className="content fs-3 text-center">
              {user.email} 
            </div>
            <div className="mt-2 container fw-bold">
                Bench:
            </div>
            <div className="container mt-2" onClick={() => setModalActive(true)}>
                <ProgressBar done={bench150} text={info.banchpress} goal={achiveBanch}/>
            </div>
            <div className="mt-2 container fw-bold">
                squad:
            </div>
            <div className="container mt-2" onClick={() => setModalActive2(true)}>
                <ProgressBar done={squad200} text={info.squad} goal={achiveSquad}/>
            </div>
            <div className="mt-2 container fw-bold">
                DEADLIFT:
            </div>
            <div className="container mt-2" onClick={() => setModalActive3(true)}>
                <ProgressBar done={deadlift200} text={info.deadlift} goal={achiveDeadlift}/>
            </div>

            <Modal active={moodalActive} setActive={setModalActive}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fw-bold fs-3'>BENCHPRESS GOAL</p>
                        <input type='number' className='fs-2' style={{width:'100px'}} value={banchpress} onChange={(e) => setBanch(e.target.value)} />
                        <button disabled={(banchpress.toString().length < 1 ? true : false)} onClick={handleSubmit} className={(banchpress.toString().length < 1 ? 'btn-add nonactive mt-2' : 'btn-add mt-2')}>ADD</button>
                    </div>
            </Modal>
            <Modal active={modalActive2} setActive={setModalActive2}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fw-bold fs-3'>SQUAD GOAL</p>
                        <input type='number' className='fs-2' style={{width:'100px'}} value={squad} onChange={(e) => setSquad(e.target.value)} />
                        <button  disabled={(squad.toString().length < 1 ? true : false)} onClick={handleSubmit2} className={(squad.toString().length < 1 ? 'btn-add nonactive mt-2' : 'btn-add mt-2')}>ADD</button>
                    </div>
                </Modal>
                <Modal active={modalActive3} setActive={setModalActive3}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='fw-bold fs-3'>DEADLIFT GOAL</p>
                        <input type='number' className='fs-2' style={{width:'100px'}} value={deadlift} onChange={(e) => setDeadlift(e.target.value)} />
                        <button disabled={(deadlift.toString().length < 1 ? true : false)} onClick={handleSubmit3} className={(deadlift.toString().length < 1 ? 'btn-add nonactive mt-2' : 'btn-add mt-2')}>ADD</button>
                    </div>
                </Modal>
        </div>
    )
}

export default Achive
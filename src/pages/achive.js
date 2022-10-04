import ProgressBar from "../components/ProgressBar"
import { useContentContext } from "../hooks/useContentContext"



const Achive = () => {
    const {info, loading, error} = useContentContext()
    const bench150 = (Math.round((Number(info.banchpress)/150*100)))
    const squad200 = (Math.round((Number(info.squad)/200*100)))
    const deadlift200 = (Math.round((Number(info.deadlift)/200*100)))
    return (
        <div> 
            <div className="content fs-3 text-center">
                Achive page
            </div>
            <div className="mt-2 container fw-bold">
                Bench:
            </div>
            <div className="container mt-2">
                <ProgressBar done={bench150} text={info.banchpress} goal={150}/>
            </div>
            <div className="mt-2 container fw-bold">
                squad:
            </div>
            <div className="container mt-2">
                <ProgressBar done={squad200} text={info.squad} goal={200}/>
            </div>
            <div className="mt-2 container fw-bold">
                DEADLIFT:
            </div>
            <div className="container mt-2">
                <ProgressBar done={deadlift200} text={info.deadlift} goal={200}/>
            </div>
           
        </div>
    )
}

export default Achive
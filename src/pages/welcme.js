import { Link } from "react-router-dom"

const Welcome = () => {
    return(
        <div>
            <div>
                <div className="text-center fs-1 mt-2">
                    Welcome
                </div> 
                <div className='container'>
                    <p>
                        For effective workout and full recovery. it is best to train at <b>70-80</b> percent of the maximum possible weight lifting at one time. 
                    </p>
                    <p>
                        Basic Strength Exercises: <b>BENCHPRESS</b>, <b>SQUAT</b>, <b>DEADLIFT</b>
                    </p>
                    <p>
                        Please <span><Link to='/signup'>
                            Sign up
                        </Link> </span>
                        
                        for creating a dashboard
                    </p>
                    <p>
                        Fill out your <b>max lead</b>

                    </p>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Link to='/dashboard'>
                        <button className="btn btn-lg btn-outline-success">GENERATE YOUR WORKOUT LOAD</button>
                    </Link>
                </div>
            </div>
           
        </div>
    )
}

export default Welcome
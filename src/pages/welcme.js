import { Link } from "react-router-dom"


const Welcome = () => {
    return(
        <div>
            <div>
                
                <div className='container mt-2'>
                    <p className="fw-bold fs-2">
                        IF YOU WANNA
                    </p>
                    <p className="mt-2">
                        Build your <span style={{color:'#4B2D9F'}}>muscle</span> and increase your <span style={{color:'#4B2D9F'}}>strength</span>
                    </p>
                    <p>
                         maximize your <span style={{color:'#4B2D9F'}}>results</span> and your own personal potential
                    </p>
                    <p className="fw-bold fs-2">
                        YOU CAN
                    </p>
                    <p>
                        using <span style={{color:'#4B2D9F'}}>your one rep max</span> as a metric we can measure from and optimize for either muscle growth or increasing strengt
                    </p>
                    <p className="fw-bold fs-2">
                        if you
                    </p>
                    <p>
                         were put on this earth to lift progressively heavier sh*t
                    </p>
                    <p>
                        you have to spend as much time as possible lifting weight that's <span style={{color:'#4B2D9F'}}>80</span> to  <span style={{color:'#4B2D9F'}}>100 </span> percent of your one rep
                    </p>
                    <p className="fw-bold fs-2">
                        if your
                    </p>
                    <p>
                       goal is to get so overly muscular
                    </p>
                    <p>
                        you can just training anywere from <span style={{color:'#4B2D9F'}}>30</span> to <span style={{color:'#4B2D9F'}}>80</span> percent of your one rep max 
                    </p>
                   
                    <p className="fw-bold fs-2">
                        and Last one
                    </p>
                    
                </div>
                <div className="d-flex justify-content-center mt-4 mb-5">
                    <Link to='/dashboard'>
                        <button className="btn-login">
                        
                        how much do you bench?
                        </button>
                    </Link>
                </div>
            </div>
           
        </div>
    )
}

export default Welcome
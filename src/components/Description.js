const Description = ({title, info, setActive}) => {
    const recomended8 = (info * 0.8).toFixed(1)
    const recomended7 = (info * 0.7).toFixed(1)
    const recomended6 = (info * 0.6).toFixed(1)
    return(
        <div className='d-flex shadow m-4 justify-content-center' onClick={() => setActive(true)}>
                <div className='d-flex justify-content-center align-items-center flex-column m-auto'>
                    <p className='fs-2 fw-bold'>{title}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-center align-items-center flex-column p-2 m-1 bg-secondary rounded'>
                            <p className='text-light'>60%</p>
                            <p className='fs-3 fw-bold'> {recomended6}</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column p-2 m-1 bg-success rounded'>
                            <p className='text-light'>70%</p>
                            <p className='fs-3 fw-bold'> {recomended7}</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column p-2 m-1 bg-success rounded'>
                            <p className='text-light'>80%</p>
                            <p className='fs-3 fw-bold'> {recomended8}</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column p-2 m-1 bg-warning rounded'>
                            <p className='text-light'>100%</p>
                            <p className='fs-3 fw-bold'> {info}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Description
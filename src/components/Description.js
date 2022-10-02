const Description = ({title, info, setActive}) => {
    const recomended8 = (info * 0.8).toFixed(0)
    const recomended7 = (info * 0.7).toFixed(0)
    const recomended6 = (info * 0.6).toFixed(0)
    return(
        <div className='description-background d-flex rounded shadow m-4 justify-content-center' onClick={() => setActive(true)} >
                <div className='d-flex justify-content-center align-items-center flex-column m-auto'>
                    <p className='fs-2  fw-bold'>{title}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex justify-content-center align-items-center flex-column bg-body p-2 m-1 rounded'>
                            <p className=''>60%</p>
                            <p className='fs-3 '> {recomended6}</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column bg-body p-2 m-1  rounded'>
                            <p className=''>70%</p>
                            <p className='fs-3'> {recomended7}</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column bg-body p-2 m-1  rounded'>
                            <p className=''>80%</p>
                            <p className='fs-3'> {recomended8}</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-column p-2 m-1 rounded' style={{background:'gold'}}>
                            <p className=''>100%</p>
                            <p className='fs-2 fw-bold'> {info}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Description
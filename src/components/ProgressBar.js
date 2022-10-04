import { useState } from "react"

const ProgressBar = ({done, goal, text}) => {
    const [style, setStyle] = useState({})
    setTimeout(() => {
        const newStyle = {
            "opacity" : 1,
            "width": `${done}%`
        }
        setStyle(newStyle)
    }, 500)
    return (
        <div className="progress">
            <div className="progress-done" style={style}>    
                {text}/<span style={{color:'gold'}}>{goal}</span>
            </div>
        </div>
    )
}

export default ProgressBar
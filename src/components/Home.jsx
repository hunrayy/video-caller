import React, { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const [value, setValue] = useState()

    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)

    }, [navigate, value])

    return(
        <div className="home">
        <div className="div">
            <span>
                <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text" 
                placeholder="Enter Room Code" />
                <button onClick={handleJoinRoom}>Create</button>
            </span>
        </div>
        </div>
    )
}

export default Home
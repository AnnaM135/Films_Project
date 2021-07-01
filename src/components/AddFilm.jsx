import React, {useState} from 'react'
import { useDispatch } from "react-redux"

function AddFilm() {
    const dispatch = useDispatch()

    const [addFilm, setAddFilm] = useState({
        id: Date.now(),
        name: "",
        year: ""
    })
    const change = (e) =>{
        let value = e.target.value
        let data= e.target.getAttribute("data-id")
        setAddFilm(prev => {
            return{
                ...prev, [data]: value
            }
        })
    
    }
    const addFilmFunc = () => {
        dispatch({type: "add", value: addFilm})
    }
    
    return (
        <div>
            <h1>Add Film</h1>
            <div>
                <div>
                    <label>Add Name: </label>
                    <input value={addFilm.name} data-id="name" type = "text" onChange = {change} />
                </div>
                <div>
                    <label>Add Year: </label>
                    <input value={addFilm.year} data-id="year" type = "text" onChange = {change}/>
                </div>
                <button onClick = {addFilmFunc}>Add Film</button>
            </div>
        </div>
    )
}

export default AddFilm

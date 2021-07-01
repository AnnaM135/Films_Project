import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux" 

function EditFilm({data, setEdit}) {

    const [editFilm, setEditFilm] = useState(data)

    const dispatch = useDispatch();

    const stateData = useSelector(state => state.FilmReducer.myFilms)

    const change = (e) => {
        let value = e.target.value
        let data= e.target.getAttribute("data-id")
        setEditFilm(prev => {
            return{
                ...prev, [data]: value
            }
        })
    }

    const editData = () => {
        stateData.find(item => {
            if(item.id == editFilm.id){
                return(
                    item.name = editFilm.name,
                    item.year = editFilm.year
                )
            }
        })
        //dispatch({type: "change", edit: editFilm})
        setEdit(null)
    }

    return (
        <div>
           <div>
                <input type = "text" data-id="name" value = {editFilm.name} onChange = {change}/>
                <input type = "text" data-id = "year" value = {editFilm.year} onChange={change}/>
                <button onClick = {editData}>Save</button>
           </div>
           <button onClick = {() => dispatch({type: "isOpen"})}>Close</button>
        </div>
    )
}

export default EditFilm

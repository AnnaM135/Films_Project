import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import EditFilm from "./EditFilm"

function Films() {

    const [edit, setEdit] = useState(null)

    const filmsData = useSelector(state => state.FilmReducer.myFilms)

    const show = useSelector(state => state.FilmReducer.show)
    
    const dispatch = useDispatch()
    
    const removeItem = (id) => {
        dispatch({type: "delete", id: id})
    }

    const showEdit = (id) => {
        setEdit(id)
        dispatch({type: "isOpen"})
    }

    return (
        <div>
            <h1>All Films</h1>
            {
                filmsData.map(item => (
                    <div>
                        {
                            edit  == item.id ?
                            <div style ={{display: show ? "block" : "none"}}>
                                <EditFilm  data = {item} setEdit = {setEdit}/>
                            </div>
                            :
    
                            <div key = {item.id} >
                                <h5>{item.name}</h5>
                                <p>{item.year}</p>
                                <p>{item.gener}</p>
                                <button onClick = {() => removeItem(item.id)}>Delete</button>
                                <button onClick = {() => showEdit(item.id)}>Edit</button>
                            </div>
                        }
                        {
                            edit  == item.id ?
                            <div key = {item.id} >
                                <h5>{item.name}</h5>
                                <p>{item.year}</p>
                                <p>{item.gener}</p>
                                <button onClick = {() => removeItem(item.id)}>Delete</button>
                                <button onClick = {() => showEdit(item.id)}>Edit</button>
                            </div>
                            :
                            null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Films

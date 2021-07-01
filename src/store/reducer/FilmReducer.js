const globalState = {
    myFilms: [
        {
          id: 1,
          name: "The Shawshank Redemption",
          year: 2011
        },
        {
          id: 2,
          name: "1+1",
          year: 2011
        },
        {
          id: 3,
          name: "La vita è bella",
          year: 1997
        }
    ],
    show: false
}

const FilmReducer = (state = globalState, action) => {
  //      localStorage.setItem("films", JSON.stringify(state.myFilms))

        switch(action.type){
          case "delete": return {
             ...state, 
             myFilms: state.myFilms.filter(item => item.id != action.id)
          }
          case "add": return {
            ...state,
            myFilms: [...state.myFilms, action.value]
          }
          case "isOpen": return {
            ...state,
            show: !state.show
          }
          case "change": return {
            ...state,
            myFilms: state.myFilms.find(item => {
              if(item.id == action.edit.id){
                return(
                  item.name = action.edit.name,
                  item.year = action.edit.year
                )
              }
            })
          }
          default: return state
        }
}

export default FilmReducer
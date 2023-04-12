

const { createContext, useReducer } = require("react");
 


export const WorkoutsContext=createContext();

export const AppReducer=(state,{type,payload})=>{
   
    switch (type) {
        case "SET_WORKOUTS":
            
           return {
            workouts:payload
           }
       case "CREATE_WORKOUT" :
        return {
            workouts:[payload,...state.workouts]
        }
        case "DELETE_WORKOUT" :
            return {
                workouts:[...state.workouts.filter(w=>w._id!==payload._id)]
            }
        default:
            return state ;
    }

}

export const WorkoutsContextProvider=({children})=>{

    const [state,dispatch]=useReducer(AppReducer,{
        workouts:null
    })
    return (
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}
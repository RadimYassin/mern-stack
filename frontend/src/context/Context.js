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
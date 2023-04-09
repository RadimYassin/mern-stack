import { useContext } from "react";
import { WorkoutsContext } from "../context/Context";

export const useWorkoutsContext=()=>{
    const context=useContext(WorkoutsContext)

    if (!context) {
        throw Error("error ")
    }

    return context;
}
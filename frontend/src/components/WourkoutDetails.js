import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import {AiOutlineDelete} from "react-icons/ai"

export default function WourkoutDetails({workout}) {
  const {dispatch}=useWorkoutsContext()
const handelDelete=async()=>{

const response=await fetch("http://localhost:4000/api/workouts/"+workout._id,{
  method:"DELETE"
})
   
  const json = await response.json()
  if (response.ok) {
    dispatch({type:"DELETE_WORKOUT",payload:json})

  }

}

  return (
    <div className='workout-details'>
         <h4>{workout.title}</h4>
         <p><strong>Load (kg) : </strong>{workout.load}</p>
         <p><strong>Reps  : </strong>{workout.reps}</p>
         <p>{workout.createAd}</p>
         <span className="icon-delete" onClick={handelDelete}><AiOutlineDelete/></span>

       
    </div>
  )
}

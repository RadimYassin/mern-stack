import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export default function WourkOutForm() {
    const {dispatch}=useWorkoutsContext()
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState("")
    const [emptyInput, setEmptyInput] = useState([])
    const handlSubmit=async(e)=>{
        e.preventDefault()
        const workout={title,load,reps}
        const response=await fetch("http://localhost:4000/api/workouts",
         {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
              'Content-Type': 'application/json'
            }
         })

         const json =await response.json()
         if (!response.ok) {
            setError(json.error)
            setEmptyInput(json.EmptyInput)
         }
         if (response.ok) {
            setLoad("")
            setReps("")
            setTitle("")
            setError(null)
            setEmptyInput([])
            dispatch({type:"CREATE_WORKOUT",payload:json})
         }
    }


    return (
        <form onSubmit={handlSubmit} className='create'>
            <h3>add new </h3>
            <label>
                title:
            </label>
            <input
                type='text'
                value={title}

                onChange={e => setTitle(e.target.value)}
                 className={emptyInput.includes("title") ? "error":""}

            />
            <label>
                load (kg):
            </label>
            <input
                type='number'
                value={load}

                onChange={e => setLoad(e.target.value)}
                className={emptyInput.includes("load") ? "error":""}

            />


            <label>
                reps:
            </label>
            <input
                type='number'
                value={reps}

                onChange={e => setReps(e.target.value)}
                className={emptyInput.includes("reps") ? "error":""}

            />



            <button> add </button>
                  {error && <div className='error'>{error}</div>}
        </form>
    )
}

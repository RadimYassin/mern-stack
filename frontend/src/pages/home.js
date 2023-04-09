
import { useEffect } from 'react';
import WourkoutDetails from '../components/WourkoutDetails';
import WourkOutForm from '../components/WourkOutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export default function Home() {

  const {workouts,dispatch}=useWorkoutsContext()
    useEffect(() => {

        const fetchData = async () => {


            const response = await fetch("http://localhost:4000/api/workouts")
            const json = await response.json()
               if (response.ok) {
                dispatch({type:"SET_WORKOUTS",payload:json})
               }

               console.log(json);
        }

        fetchData();

    }, [])

    return (
        <div className='home'>
            <div className='workouts'>
                {
                    workouts && workouts.map((w) => (
                       <WourkoutDetails key={w._id} workout={w} />
                    ))
                }
            </div>
            <WourkOutForm/>
        </div>
    )
}

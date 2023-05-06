import React, { useCallback, useEffect, useState } from 'react'
import './index.css'

export default function Index() {

  let [trips, setTrips] = useState([]);
  let [url, setUrl] = useState('http://localhost:3001/trips');

  let fetchTrips = useCallback(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setTrips(data);   
    })
  },[url])

  useEffect(()=>{
    fetchTrips()
  }, [fetchTrips])

  console.log(trips)
  return (
    <div className='container'>
        <div className="flex-container">
          <h1>Ready to go ?</h1>

          <div>
            <button onClick={()=>setUrl('http://localhost:3001/trips')}>all</button>
            <button onClick={()=>setUrl('http://localhost:3001/trips?location=Myanmar')}>filter in myanmar</button>
          </div>

          <ul className='trips-list'>{trips.map(trip => (
            <li key={trip.id} className='trip'> 
            <h3>{trip.name}</h3>
            <p>price - {trip.price} mmk</p>
          </li>
          ))}
              
          </ul>
        </div>
    </div>
  )
}

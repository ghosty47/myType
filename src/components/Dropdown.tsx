import React from 'react'

export const Dropdown = ({ setTimeLeft }: { setTimeLeft: Function })=> {
  return (
    <>
    <label htmlFor="time">Select a Time:</label>
    <select 
    onChange={(e) => setTimeLeft(e.target.value)}  
    defaultValue={'Select'} 
    className="mt-6 w-50 ml-3 bg-slate-700 p-2 rounded-md">
      <option
        value="30"
      >30
      </option>
      <option
        value="60"
      >60
      </option>
      <option
        value="120"
      >120
      </option>
      <option
        value="300"
      >240
      </option>
      <option
        value="300"
      >300
      </option>
      <option
        value="300"
      >360
      </option>
    </select>
    </>
  )
}

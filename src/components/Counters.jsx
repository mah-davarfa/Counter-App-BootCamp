import React from 'react'
import CounterCard from "./CounterCard.jsx";

export default function Counters({counters,deleteCardById,incrementById,decrementById,resetById}){

    if(counters.length===0){
        return <h2 className="text-lg opacity-80 mt-4">No counters yet. Add one above!</h2>
    }
    return(
       <>
    <h2 id="counters-heading" className="text-xl font-semibold mb-3">To Do Counters</h2>

    <div className="flex flex-wrap gap-4">
      {counters.map((c) => (
        <div key={c.id} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.666rem)]">
          <CounterCard
            id={c.id}
            name={c.name}
            value={c.value}
            increment={c.increment}
            incrementById={incrementById}
            decrementById={decrementById}
            resetById={resetById}
            deleteCardById={deleteCardById}
          />
        </div>
      ))}
    </div>
        </>
    )
}
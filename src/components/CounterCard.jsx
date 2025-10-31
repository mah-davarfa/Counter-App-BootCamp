import React from 'react'
import CounterLabel from "./CounterLabel.jsx";

export default function CounterCard(
    { id, name, value, increment,deleteCardById,incrementById,decrementById,resetById}
){
 // CounterCard.jsx (add classNames)
return (
  <article className="grid gap-3 bg-white/5 border border-white/10 rounded-3xl p-4 ">
    <CounterLabel name={name} value={value} />

    <p className="text-sm opacity-80">Step: {increment}</p>

    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => incrementById(id)}
        className="rounded-lg bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 text-sm font-medium"
      >
        +
      </button>
      <button
        onClick={() => decrementById(id)} disabled={value === 0}
        className="rounded-lg bg-amber-600 hover:bg-amber-700 px-3 py-1.5 text-sm font-medium"
      >
        –
      </button>
      <button
        onClick={() => resetById(id)}
        className="rounded-lg bg-slate-600 hover:bg-slate-700 px-3 py-1.5 text-sm font-medium"
      >
        Reset
      </button>
      <button
        onClick={() => deleteCardById(id)}
        className="rounded-lg bg-rose-600 hover:bg-rose-700 px-3 py-1.5 text-sm font-medium ml-auto"
      >
        Delete
      </button>
    </div>
  </article>
);

}




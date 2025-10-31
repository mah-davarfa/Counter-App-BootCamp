import React from 'react'

export default function CounterLabel({ name, value }) {
 
 
    return <h3 className="text-lg font-semibold">{name} — <span span className="font-mono">{value}</span></h3>;
}

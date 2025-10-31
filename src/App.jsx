import { useState,useEffect } from 'react'
import Counters from './components/Counters'
import CounterForm from './components/counterForm'
import './App.css'
function App() {
  const STORAGE_KEY = 'multi-counter';

 const [counters, setCounters] = useState(()=>{
  try{
const raw = localStorage.getItem(STORAGE_KEY ); return raw? JSON.parse(raw) :[];
  }catch{
return [];
  }
 }); // counters state reades from storage each counters is like: [{id,name,value,increment},{...},...]
/// when counters changes save to storage 
 useEffect(()=>{
  localStorage.setItem(STORAGE_KEY , JSON.stringify(counters));
 },[counters]);


 const addCounter =({name,increment})=>{
  setCounters((pre)=>([
    ...pre, {id:Date.now(),name:name.trim() ,value:0 ,increment:increment}
  ]))
 }
  //delete card
  const deleteCardById=(id)=>{setCounters(per=>per.filter((card)=>(card.id !==id)))}
 //increment by id
 const incrementById =(id)=>{setCounters(per=>per.map(c=> c.id===id ? {...c,value:c.increment+c.value} : c))}
 //Decrement by id
 const decrementById = (id)=>{setCounters(per=>per.map(c=>c.id===id ? {...c,value:Math.max(0,c.value-c.increment)} : c)) }
 //reset by id
 const resetById =(id)=>{setCounters(per=>per.map(c=>c.id===id ? {...c,value:0} : c))}
 
 return (
  <main className="mx-auto max-w-6xl p-4 md:p-6 lg:p-8 grid gap-6">
    <h1 className="text-3xl font-bold tracking-tight">Counter App</h1>

    <section aria-labelledby="info-heading" className="order-1">
      <CounterForm addCounter={addCounter} />
    </section>

    <section aria-labelledby="counters-heading" className="order-2">
      <Counters
        counters={counters}
        deleteCardById={deleteCardById}
        incrementById={incrementById}
        decrementById={decrementById}
        resetById={resetById}
      />
    </section>
  </main>
);
}

export default App

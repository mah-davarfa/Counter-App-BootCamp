import React,{useState} from 'react'

export default function CounterForm ({addCounter}){
const [name,setName]=useState('')
const [increment, setIncrement] = useState(1);

const handleSubmit = (e)=>{
    e.preventDefault();
    addCounter({name,increment});
    setName('');
    setIncrement(1);
}

return(
    <div className="bg-white/7 border border-white/10 rounded-2xl p-4 md:p-6 shadow-sm">
        <h2 id="info-heading" className="text-3xl font-bold mb-6">Information form</h2>
        <section aria-labelledby='info-heading'> 
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-center items-center  gap-4">
                <div className="flex flex-wrap justify-center items-center  gap-2">
                <label htmlFor='counter-name'>Please Enter What to do: </label>
                <input
                 className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-2 shadow-sm"
                type='text'
                id='counter-name'
                required
                placeholder='Enter What To Do..'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                ></input>
               </div>               
               <div className="flex flex-wrap justify-center items-center  gap-2">
                <label htmlFor='increment'>Count By:</label>
                <input
                 className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-2 shadow-sm"
                id="increment"
                value={increment}
                onChange={(e) => setIncrement(e.target.valueAsNumber ?? Number(e.target.value))}
                type="number"
                step="1"
                min="1"
                required
                ></input>
               </div>
               <div>
                <button
                type='submit'
                 className="rounded-lg bg-slate-600 hover:bg-slate-700 px-5 py-2.5 text-sm font-medium"
                 >Submit</button>
               </div>
            </form>

        </section>

    </div>

)
}
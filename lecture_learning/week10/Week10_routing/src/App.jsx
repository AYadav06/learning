import { useState } from 'react';

function App(){
return <div>
    hello ther
    <Counter />
</div>
}

function Counter(){
    const [count ,setCounter]=useState(0);
    return <div>
        <h2>Counter : {count}</h2>]
        <button onClick={()=>setCounter(count +1)}>Increament</button>
    </div>
}
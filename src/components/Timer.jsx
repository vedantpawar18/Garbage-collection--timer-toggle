import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(()=> {
       const id= setInterval(() => {
            console.log(Date.now());
            setCount((prev)=> prev+1);
        },1000);

        const cleanup = () => {
            clearInterval(id);
        };

        return cleanup;
    },[]);


  return (
    <div>
        <h1>Counter : {count}</h1>
    </div>
  )
}

export default Timer
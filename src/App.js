import { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);
  const [first, setfirst] = useState(0);
}
  useEffect(() => {
    setTimeout(() => {
      console.log("first called");
    },1000);
  },[count]);

  console.log(count);

  useEffect(() => {
    console.log("second effect called");
  }, [first]);

  return(
    <div>
      <div>
        <button onClick={()=>setCount(count+1)}>plus</button>
      </div>
    </div>
  )


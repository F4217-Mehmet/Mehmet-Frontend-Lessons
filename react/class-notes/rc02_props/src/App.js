import React, {useState, useEffect} from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";
import data from "./data";

function App() {
  
const [timer, setTimer] = useState(5);
  useEffect(()=>{
    if (timer !== 0) {
      
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }

  },[timer])

  

  return (
    <div className="App">
      <div style={{height: "250px", width: "250px", backgroundColor:"green", borderRadius: "50%", color:"white", fontSize: "60px", margin:"10px, auto", lineHeight:"250px", textAlign:"center"}} >{timer}
      </div>
      {/* <div>
        {data.map((person) => (
          <Person
            key={person.name}
            name={person.name}
            img={person.img}
            tel={person.tel}
          />
        ))}
      </div> */}
    </div>
  );
}

export default App;

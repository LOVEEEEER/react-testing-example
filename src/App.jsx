// import {useEffect, useState} from "react"
//
// function App() {
//     const [data, setData] = useState(null)
//     const [toggle, setToggle] = useState(false)
//     const [value, setValue] = useState("")
//
//     const handleClick = () => {
//         setToggle(prevState => (!prevState))
//     }
//
//     useEffect(() => {
//         setTimeout(() => {
//             setData({})
//         }, 100)
//     }, [])
//   return (
//     <div className="App">
//         <h1 data-testid="value-elem">{value}</h1>
//         {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//         {data && <div style={{color:"red"}}>data</div>}
//         <h1>Hello World</h1>
//         <button data-testid="toggle-btn" onClick={handleClick}>click me</button>
//         <input type="text" placeholder="input value...." onChange={(e) => setValue(e.target.value)} />
//     </div>
//   );
// }
//
// export default App;


import React from 'react';
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;

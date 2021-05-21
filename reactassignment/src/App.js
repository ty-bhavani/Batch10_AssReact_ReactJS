// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';

const App = () =>{
  const [num, setNum] = useState(0)

  const incNum = () =>{
    setNum(num+1);
  };
  const setZero = () =>{
    setNum(0);
  };
  const decNum = () =>{
    if(num>0){
    setNum(num-1);
  }else{
    setNum(0)
  }
};
    return(
        <div className='main_div'>
        <div className='center-div'>
            <h1>{num}</h1>
            <div className='btn_div'>
                <button onClick={incNum}><h1>+</h1></button>
                <button onClick={setZero}><h1>0</h1></button>
                <button onClick={decNum}><h1>-</h1></button>
            </div>
        </div>
        </div>
    )
}
export default App;
import React, { useState } from 'react';
import './Num.css';

const Num = () =>{
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
export default Num;
import Button from "./Button";
import Dice from "./Dice";
import { useState } from 'react';

const numbers=[12,24,36,48]
const sum = numbers.reduce((acc,elem,index)=>{
  console.log(`${index}:번째값${elem}`);
  console.log(`${index}:번째값까지의 합=${acc+elem}`);
  return acc+elem
},0) 





 function App() {
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
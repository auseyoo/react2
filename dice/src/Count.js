import {useState} from "react";
// import DiceText from 'first'

export default function Count(){
    // let num = 0
    // const [state, setstate] = useState(initialState); // 앞에는 값, 뒤에는 함수
    // const useValue = useState(0);
    const [count, setCount] = useState(0);
    // console.log(useValue);
    return (
        <div className="count">
            <h2>Counter</h2>
            <p className="number">{num}</p>
            <button onClick={()=>{
                setCount(count+1)
                // num ++;
                // console.log(num);
            }}>Add++</button> 
        </div>
    );
}
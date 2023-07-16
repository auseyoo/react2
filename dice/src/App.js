import Button from "./Button";
import Dice from "./Dice";
import { useState } from 'react';
import Board from "./Board";
import './App.css'

const randomNumber = () => {
  return Math.ceil(Math.random()*6)
}



 function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [gameYourHistory, setGameYourHistory] = useState([]);


  const handleRollClick = (params) => {
    const nextNum = randomNumber()
    const nextYourNum = randomNumber()


    setNum(nextNum)
    // console.log(num);
    setSum(sum + nextNum)
    // gameHistory.push(nextNum)
    // console.log(gameHistory);
    // setGameHistory(gameHistory)
    setGameHistory([...gameHistory,nextNum]) // ...이 비워라 라는뜻.
    setGameYourHistory([...gameYourHistory,nextYourNum])


  };
  const handleClearClick = (params) => {
    // setSum(1);    
    // setNum(0);
    setGameHistory([])     
    setGameYourHistory([])     

  }

  return (
    <div className="App">
      <div>
        <Button onClick={handleRollClick} color='blue' className='App-button'>던지기</Button>
        <Button onClick={handleClearClick} color='red' className='App-button'>처음부터</Button>
      </div>
      {/* <Dice color='blue' num={num}/>
      <Dice color='red' num={num2}/> */}
    <div className="App-boards">
      <Board name='나'
      color='blue'
      gameHistory={gameHistory} />
      <Board name='상대'
      color='red'
      gameHistory={gameYourHistory}/>
  </div>
    </div>
  );
}

export default App;
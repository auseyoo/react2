import React from 'react'

export default function DiceText() {
  return (
    <div className="dicetext">
         <h2>총점:</h2>
         <p>{sum}</p>
         <h2>기록</h2>
         {gameHistory2.join(', ')} 
    </div>
  )
}

import { useState } from 'react'
import { Button } from '../../components/button'
import { GameOver } from '../../components/gameOver'
import { Board } from '../board'
import './Game.css'


const Game = ({register, score, setScore, loss, setLoss}) => {

    const [play, setPlay] = useState(false)
    
    return <div>
    <div className='title'>
      <h1 >SNAKE GAME</h1>
      <h2>{register}</h2>
      <h2 >Your Score : {score}</h2>
    </div>
    
    {loss? <GameOver/> : <Board setLoss={setLoss} setScore={setScore} score={score}
    setPlay={setPlay} play={play}/>}
    <div className='footer__btns'>
      {loss? '' : <Button onClickBtn={()=> setPlay(!play)}>{play ? 'Pause' : 'Play'}</Button> }
    </div>
    </div>
}

export default Game
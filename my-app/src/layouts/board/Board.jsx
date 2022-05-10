import { useEffect, useState } from 'react'
import { Cell } from '../../components/cell'
import { BOARD_SIZE, FOOD, SNAKE } from '../../utils/constants'
import { changeLevel, generateFood } from '../../utils/helpers'
import './Board.css'

    let speed = 500
    let scoreLevel = 1

const Board = ({setLoss, setScore, score, play}) => {
    const [snake, setSnake] = useState([{x: 1, y: 1}])
    const [food, setFood] = useState({x:5, y: 3})
    const [direction, setDirection] = useState('ArrowDown')
    const directions = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft']
    let sliceSize = 1 
    
    if(score === 5 || score === 15){
        const levelUp = changeLevel(score)
        speed = levelUp.speed
        scoreLevel = levelUp.scoreLevel
    }

   const cheackAvalibleCell = (position) => {
       if(position >= BOARD_SIZE || position < 0){
           setLoss(true)
       }
       return position
   }

  const arrowKeyDownClick = (event) => {
     if(directions.includes(event.key)){
        setDirection(event.key)
     }
}

   useEffect(() => {
       document.addEventListener('keydown', arrowKeyDownClick)
   })

    useEffect(()=> {
        if(play){
            const interval = gameLoop()
            return ()=> clearInterval(interval)
        }
    }, [snake, play])

    const gameLoop = () => {
        const timer = setTimeout(() => {
            const newSnake = snake
            let move = []

            switch(direction){
                case 'ArrowDown':
                    move = [1,0]
                    break
                case 'ArrowUp':
                    move = [-1, 0]
                    break
                case 'ArrowRight':
                    move = [0, 1]
                    break
                case 'ArrowLeft':
                    move = [0, -1]
                    break
                default:
                    move = [1,0]
            }
            
                const head = {
                    x: cheackAvalibleCell( newSnake[newSnake.length - 1].x + move[0]),
                    y: cheackAvalibleCell(newSnake[newSnake.length - 1].y + move[1])
                }

                if(snake.some(elem => elem.x === head.x && elem.y === head.y)){
                    setLoss(true)
                }
                
                newSnake.push(head)
                if(head.x === food.x && head.y === food.y){
                    sliceSize = 0
                    setScore(score + scoreLevel)
                    generateFood(setFood)
                }
                    setSnake(newSnake.slice(sliceSize))
                    cheackAvalibleCell(head)
        }, speed)
        return timer
    }

    const BOARD_MARRIX = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill('*'))
    return <div className="board">
        {BOARD_MARRIX.map((row, indexRow) => {
            return <div key={indexRow} className='board_row'>
                {row.map((column, indexColumn) => {
                    let type = ''
                    if(snake.some(elem => elem.x === indexRow && elem.y === indexColumn)){
                        type = SNAKE
                    }
                    if( type !== SNAKE && food.x === indexRow && food.y === indexColumn){
                        type = FOOD
                    }
                    return <Cell key={indexColumn} type={type}/>
                })}
            </div>
        })}
    </div>
}

export default Board
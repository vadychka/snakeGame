import { BOARD_SIZE } from "./constants"

export const  generateFood = (setFood) => {
    let newFood= {x: Math.floor(Math.random() * BOARD_SIZE), 
        y: Math.floor(Math.random() * BOARD_SIZE)}
    setFood(newFood)
}

export const changeLevel = (score) => {
    if(score === 5){
        return {
        scoreLevel: 5,
        speed: 400
        }
    }
    else if(score === 15){
        return {scoreLevel: 10,
        speed: 300}
    }
}


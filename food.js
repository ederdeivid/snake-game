import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { createElement } from './element.js'

let food = randomGridPosition()
const EXPANSION_RATE = 1


export const update = () => {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = randomGridPosition()
  }
}

export const draw = (gameBoard) => {
  createElement(gameBoard, food, 'food')
}

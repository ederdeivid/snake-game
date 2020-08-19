import { getInputDirection } from './input.js'
import { createElement } from './element.js'

export const SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export const update = () => {
  addSegments()
  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export const draw = (gameBoard) => {
  snakeBody.map(position => {
    createElement(gameBoard, position, 'snake')
  })
}

export const getSnakeHead = () => snakeBody[0]

export const snakeIntersecion = () => onSnake(snakeBody[0], { ignoreHead: true })

export const expandSnake = (amount) => (newSegments += amount)

export const onSnake = (position, { ignoreHead = false } = {}) => {
  return snakeBody.some((segment, idx) => {
    if (ignoreHead && idx === 0) return false
    return equalPositions(segment, position)
  })
}

const equalPositions = (snakePosition, foodPosition) => (snakePosition.x === foodPosition.x && snakePosition.y === foodPosition.y)

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}

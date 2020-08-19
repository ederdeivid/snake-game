import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersecion } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

const gameBoard = document.querySelector('#game-board')
let lastRenderTime = 0
let gameOver = false

const main = (currentTime) => {
  if (gameOver) {
    window.location = '/'
    alert('Game over')
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

const update = () => {
  updateSnake()
  updateFood()
  checkDeath()
}

const draw = () => {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

const checkDeath = () => gameOver = outsideGrid(getSnakeHead()) || snakeIntersecion()

window.requestAnimationFrame(main)
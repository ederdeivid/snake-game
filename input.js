let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

window.addEventListener('keydown', e => {
  if (!keys.includes(e.key)) return
  directions[e.key]()
})

const directions = {
  ArrowUp () {
    if (lastInputDirection.y !== 0) return
    inputDirection = { x: 0, y: -1 }
  },

  ArrowDown () {
    if (lastInputDirection.y !== 0) return
    inputDirection = { x: 0, y: 1 }
  },

  ArrowLeft () {
    if (lastInputDirection.x !== 0) return
    inputDirection = { x: -1, y: 0 }
  },

  ArrowRight () {
    if (lastInputDirection.x !== 0) return
    inputDirection = { x: 1, y: 0 }
  }
}

export function getInputDirection () {
  lastInputDirection = inputDirection
  return inputDirection
}
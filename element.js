export const createElement = (gameBoard, position, className) => {  
  const element = document.createElement('div')
  element.style.gridRowStart = position.y
  element.style.gridColumnStart = position.x
  element.classList.add(className)
  gameBoard.appendChild(element)
}

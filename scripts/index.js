import { object } from './store.js'

const root = document.getElementById('root')
const arrayOfNumbers = []

main()
addMaxMinElements()

function main() {
  for (const key in object) {
    for (const key1 in object[key]) {
      const tableCell = createElement('div')
      const content = createElement('span')

      tableCell.className = 'block'
      tableCell.addEventListener('click', clickOnCell)
      tableCell.addEventListener('mouseenter', hoverOnCell)

      addValueToCell(content, object[key][key1])

      addContentToElement(tableCell, content)
      addContentToElement(root, tableCell)
    }
  }
}

function addMaxMinElements() {
  const tableCell = createElement('div')
  const maxNumberElement = createElement('span')
  const minNumberElement = createElement('span')

  tableCell.className = 'numbers'
  maxNumberElement.innerHTML = `Max value: ${Math.max(...arrayOfNumbers)}`
  minNumberElement.innerHTML = `Min value: ${Math.min(...arrayOfNumbers)}`

  addContentToElement(tableCell, maxNumberElement)
  addContentToElement(tableCell, minNumberElement)
  addContentToElement(root, tableCell)
}

function createElement(tagName) {
  return document.createElement(tagName)
}

function clickOnCell(event) {
  const span = event.target.children[0]
  span ? span.style.opacity = 1 : null
}

function hoverOnCell(event) {
  event.target.children[0].style.opacity = 0
}

function addValueToCell(element, value) {
  if (typeof value === 'object') {
    addValueOfObject(value)
    element.innerHTML = Object.values(value).join(', ')
  } else {
    addValueOfInt(value)
    element.innerHTML = JSON.stringify(value)
  }
}

function addValueOfObject(value) {
  Object.values(value).map(item => arrayOfNumbers.push(parseInt(item)))
}

function addValueOfInt(value) {
  arrayOfNumbers.push(parseInt(value))
}

function addContentToElement(element, content) {
  element.append(content)
}

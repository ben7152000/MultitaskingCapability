/**
 * 常數
 */
const FLEX = 'flex'
const NONE = 'none'
const VISIBLE = 'visible'
const HIDDEN = 'hidden'
const CIRCLE = 'circle'
const DIAMOND = 'diamond'
const TRIANGLE = 'triangle'
const CROSS = 'cross'
const STAR = 'star'
const LEFT = 'left'
const RIGHT = 'right'
const CIRCLE1 = 'circle-1'
const CIRCLE2 = 'circle-2'
const CIRCLE3 = 'circle-3'
const DIAMOND1 = 'diamond-1'
const POLYGON1 = 'polygon-1'
const POLYGON2 = 'polygon-2'
const POLYGON3 = 'polygon-3'
const POLYGON4 = 'polygon-4'
const POLYGON5 = 'polygon-5'
const POLYGON6 = 'polygon-6'
const POLYGON7 = 'polygon-7'
const POLYGON8 = 'polygon-8'
const POLYGON9 = 'polygon-9'
const POLYGON10 = 'polygon-10'
const POLYGON11 = 'polygon-11'
const POLYGON12 = 'polygon-12'
const POLYGON13 = 'polygon-13'
const STAR1 = 'star-1'
const STAR2 = 'star-2'
const SQUARE = 'square'
const SEMICIRCLE = 'SEMICIRCLE'

/**
 * Dom
 */
const mainInfo = document.querySelector('.main-info')
const gameInfo = document.querySelector('.game-info')
const resultInfo = document.querySelector('.result-info')
const start = document.querySelector('.start')
const restart = document.querySelector('.restart')
const time = document.querySelector('.time')
const timerBar = document.querySelector('.timer-bar')

/**
 * Game 1
 */
const triangle = document.querySelector('#triangle')
const game1TimerBar = document.querySelector('.game-1-timer-bar')
const symbol1 = document.querySelector('#symbol-1')
const symbol2 = document.querySelector('#symbol-2')
const symbol3 = document.querySelector('#symbol-3')
const symbol4 = document.querySelector('#symbol-4')
const symbol5 = document.querySelector('#symbol-5')
const symbol6 = document.querySelector('#symbol-6')
const symbol7 = document.querySelector('#symbol-7')
const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')
const game1CheckTrue = document.querySelector('#game-1-check-true')
const game1CheckFail = document.querySelector('#game-1-check-fail')

/**
 * Game 2
 */
const math = document.querySelector('#math')
const game2Number = document.querySelector('#game-2-number')
const correct = document.querySelector('#correct')
const wrong = document.querySelector('#wrong')
const game2Buttons = document.querySelector('#game-2-buttons')
const game2CheckTrue = document.querySelector('#game-2-check-true')
const game2CheckFail = document.querySelector('#game-2-check-fail')

/**
 * Game 3
 */
const duplicated = document.querySelector('#duplicated')
const game3Number = document.querySelector('#game-3-number')
const duplicate = document.querySelector('#duplicate')
const noDuplicate = document.querySelector('#no-duplicate')
const game3Buttons = document.querySelector('#game-3-buttons')
const game3CheckTrue = document.querySelector('#game-3-check-true')
const game3CheckFail = document.querySelector('#game-3-check-fail')

const performance = document.querySelector('#performance')

/**
 * 變數
 */
const symbols = [DIAMOND, TRIANGLE, CROSS, STAR, CIRCLE, CIRCLE1, CIRCLE2, CIRCLE3, DIAMOND1, POLYGON1, POLYGON2, POLYGON3, POLYGON4, POLYGON5, POLYGON6, POLYGON7, POLYGON8, POLYGON9, POLYGON10, POLYGON11, POLYGON12, POLYGON13, STAR1, STAR2, SQUARE ,SEMICIRCLE]
const arrowSymbols = [LEFT, RIGHT]
const game2Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
let game1Correct = 0
let game1Wrong = 0
let game2Correct = 0
let game2Wrong = 0
let game3Correct = 0
let game3Wrong = 0
let game1Result = '' // game 1 結果
let game2Result = 0 // game 2 結果
let game2TestResult = 0 // game 2 結果
let game3Result = false // game 3 結果
let performanceRate = 0
const gameTime = 5 // 分鐘
const game1Time = 10 // 秒
const delayCheckTime = 2 // 秒
let randomInterval // 隨機倒數定時器
const imgSymbol1 = document.createElement("img")
const imgSymbol2 = document.createElement("img")
const imgSymbol3 = document.createElement("img")
const imgSymbol4 = document.createElement("img")
const imgSymbol5 = document.createElement("img")
const imgSymbol6 = document.createElement("img")
const imgSymbol7 = document.createElement("img")

/**
 * 監聽
 */
start.addEventListener('click', startClickHandler)
restart.addEventListener('click', restartClickHandler)
arrowLeft.addEventListener('click', arrowLeftClickHandler)
arrowRight.addEventListener('click', arrowRightClickHandler)
correct.addEventListener('click', correctClickHandler)
wrong.addEventListener('click', wrongClickHandler)
duplicate.addEventListener('click', duplicateClickHandler)
noDuplicate.addEventListener('click', noDuplicateClickHandler)

/**
 * 進到介紹介面
 */
function goToInstructionPage() {
  resultInfo.style.display = NONE
  mainInfo.style.display = FLEX
}

/**
 * 進到遊戲介面
 */
function goToGamePage() {
  mainInfo.style.display = NONE
  gameInfo.style.display = FLEX
}

/**
 * 進到結果介面
 */
function goToResultPage() {
  gameInfo.style.display = NONE
  resultInfo.style.display = FLEX
}

/**
    重新開始
 */
function restartClickHandler() {
  goToInstructionPage()
  resetResult()
}

/**
 * 輸出結果
 */
function outputResult() {
  performanceRate = Math.floor((game1Correct / (game1Correct + game1Wrong)) * 0.23 * 100 + game2Correct + game3Correct)
  triangle.innerHTML = `${game1Correct}/${game1Correct + game1Wrong}`
  math.innerHTML = `${game2Correct}/${game2Correct + game2Wrong}`
  duplicated.innerHTML = `${game3Correct}/${game3Correct + game3Wrong}`
  performance.innerHTML = `${performanceRate.toString()}%`
}

/**
    重置結果數據
 */
function resetResult() {
  game1Result = ''
  game1Correct = 0
  game1Wrong = 0
  game2Correct = 0
  game2Wrong = 0
  game3Correct = 0
  game3Wrong = 0
  game3Result = false
  performanceRate = 0
  timerBar.style.width = '0'
  game1TimerBar.style.height = '0'
}

/**
 * 開始遊戲
 */
function startClickHandler () {
  goToGamePage()
  startCountdown(gameTime)
  game1RandomSymbols()
  game2RandomNumber()
  game3RandomNumber()
  if (Math.floor(gameTime) === 1) {
    time.innerHTML = `${Math.floor(gameTime)} minute to go`
  } else {
    time.innerHTML = `${Math.floor(gameTime)} minutes to go`
  }
}

/**
 * 隨機取值
 */
function randomSymbol(array) {
  return Math.floor(Math.random() * array.length)
}

/**
 * 隱藏圖片
 */
function hiddenSymbols(object) {
  object.style.visibility = HIDDEN
}

/**
 * 顯示圖片
 */
function visibleSymbols(object) {
  object.style.visibility = VISIBLE
}

/**
 *  Game 1
 */
function game1StartCountdown(duration) {
  let timer = duration
  let timeHeight = 100

  function updateCountdown() {
    if (timeHeight >= 0) {
      game1TimerBar.style.height = `${timeHeight}%`
      timeHeight -= 100 / game1Time
    }

    if (timer < 0) {
      clearInterval(randomInterval)
      visibleSymbols(game1CheckFail)
      game1Wrong++
      setTimeout(() => {
        game1TimerBar.style.transition = 'height 0s linear'
        hiddenSymbols(game1CheckTrue)
        hiddenSymbols(game1CheckFail)
        game1Result = ''
        game1TimerBar.style.height = '0'
        game1RandomSymbols()
      }, delayCheckTime * 1000)

      setTimeout(() => {
        game1TimerBar.style.transition = 'height 1s linear'
      }, delayCheckTime * 1.02 * 1000)
    } else {
      timer--
    }
  }

  updateCountdown()
  clearInterval(randomInterval)
  randomInterval = setInterval(updateCountdown, 1000)
}

function arrowLeftClickHandler() {
  if (game1CheckTrue.style.visibility === VISIBLE || game1CheckFail.style.visibility === VISIBLE) return
  if (game1Result === LEFT) {
    visibleSymbols(game1CheckTrue)
    game1Correct++
  } else {
    visibleSymbols(game1CheckFail)
    game1Wrong++
  }
  clearInterval(randomInterval)
  setTimeout(() => {
    game1TimerBar.style.transition = 'height 0s linear'
    hiddenSymbols(game1CheckTrue)
    hiddenSymbols(game1CheckFail)
    game1RandomSymbols()
  }, delayCheckTime * 1000)

  setTimeout(() => {
    game1TimerBar.style.transition = 'height 1s linear'
  }, delayCheckTime * 1.02 * 1000)
}

function arrowRightClickHandler() {
  if (game1CheckTrue.style.visibility === VISIBLE || game1CheckFail.style.visibility === VISIBLE) return
  if (game1Result === RIGHT) {
    visibleSymbols(game1CheckTrue)
    game1Correct++
  } else {
    visibleSymbols(game1CheckFail)
    game1Wrong++
  }
  clearInterval(randomInterval)
  setTimeout(() => {
    game1TimerBar.style.transition = 'height 0s linear'
    hiddenSymbols(game1CheckTrue)
    hiddenSymbols(game1CheckFail)
    game1RandomSymbols()
  }, delayCheckTime * 1000)

  setTimeout(() => {
    game1TimerBar.style.transition = 'height 1s linear'
  }, delayCheckTime * 1.02 * 1000)
}

function game1RandomSymbols() {
  const randomSymbolIndex = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7]
  game1Result = ''
  game1StartCountdown(game1Time)
  const symbol1Src = arrowSymbols[randomSymbol(arrowSymbols)]
  const symbol2Src = symbols[randomSymbol(symbols)]
  const symbol3Src = symbols[randomSymbol(symbols)]
  const symbol4Src = symbols[randomSymbol(symbols)]
  const symbol5Src = symbols[randomSymbol(symbols)]
  const symbol6Src = symbols[randomSymbol(symbols)]
  const symbol7Src = symbols[randomSymbol(symbols)]
  game1Result = symbol1Src
  imgSymbol1.src = `./assets/${symbol1Src}.png`
  imgSymbol2.src = `./assets/${symbol2Src}.png`
  imgSymbol3.src = `./assets/${symbol3Src}.png`
  imgSymbol4.src = `./assets/${symbol4Src}.png`
  imgSymbol5.src = `./assets/${symbol5Src}.png`
  imgSymbol6.src = `./assets/${symbol6Src}.png`
  imgSymbol7.src = `./assets/${symbol7Src}.png`
  const symbolIndex1 = randomSymbol(randomSymbolIndex)
  randomSymbolIndex[symbolIndex1].appendChild(imgSymbol1)
  randomSymbolIndex.splice(symbolIndex1, 1)
  const symbolIndex2 = randomSymbol(randomSymbolIndex)
  randomSymbolIndex[symbolIndex2].appendChild(imgSymbol2)
  randomSymbolIndex.splice(symbolIndex2, 1)
  const symbolIndex3 = randomSymbol(randomSymbolIndex)
  randomSymbolIndex[symbolIndex3].appendChild(imgSymbol3)
  randomSymbolIndex.splice(symbolIndex3, 1)
  const symbolIndex4 = randomSymbol(randomSymbolIndex)
  randomSymbolIndex[symbolIndex4].appendChild(imgSymbol4)
  randomSymbolIndex.splice(symbolIndex4, 1)
  const symbolIndex5 = randomSymbol(randomSymbolIndex)
  randomSymbolIndex[symbolIndex5].appendChild(imgSymbol5)
  randomSymbolIndex.splice(symbolIndex5, 1)
  const symbolIndex6 = randomSymbol(randomSymbolIndex)
  randomSymbolIndex[symbolIndex6].appendChild(imgSymbol6)
  randomSymbolIndex.splice(symbolIndex6, 1)
  const symbolIndex7 = randomSymbol(randomSymbolIndex)
  randomSymbolIndex[symbolIndex7].appendChild(imgSymbol7)
  randomSymbolIndex.splice(symbolIndex7, 1)
}

/**
 *  Game 2
 */
function correctClickHandler() {
  if (game2Result === game2TestResult) {
    visibleSymbols(game2CheckTrue)
    hiddenSymbols(game2Buttons)
    game2Correct++
  } else {
    visibleSymbols(game2CheckFail)
    hiddenSymbols(game2Buttons)
    game2Wrong++
  }
  setTimeout(() => {
    hiddenSymbols(game2CheckTrue)
    hiddenSymbols(game2CheckFail)
    visibleSymbols(game2Buttons)
    game2RandomNumber()
  }, delayCheckTime * 1000)
}

function wrongClickHandler() {
  if (game2Result !== game2TestResult) {
    visibleSymbols(game2CheckTrue)
    hiddenSymbols(game2Buttons)
    game2Correct++
  } else {
    visibleSymbols(game2CheckFail)
    hiddenSymbols(game2Buttons)
    game2Wrong++
  }
  setTimeout(() => {
    hiddenSymbols(game2CheckTrue)
    hiddenSymbols(game2CheckFail)
    visibleSymbols(game2Buttons)
    game2RandomNumber()
  }, delayCheckTime * 1000)
}

function game2RandomNumber() {
  const range = [0, 0, 1, -1, 2, -2, 3, -3]
  const number1 = game2Numbers[randomSymbol(game2Numbers)]
  let number2 = game2Numbers[randomSymbol(game2Numbers)]
  let number3 = game2Numbers[randomSymbol(game2Numbers)]
  let number4 = game2Numbers[randomSymbol(game2Numbers)]
  game2Result = number1 + number2 + number3 + number4
  game2TestResult = game2Result + range[randomSymbol(range)]
  if (number2 > 0) {
    number2 = `+${number2}`
  }
  if (number3 > 0) {
    number3 = `+${number3}`
  }
  if (number4 > 0) {
    number4 = `+${number4}`
  }
  game2Number.innerHTML = `${number1}${number2}${number3}${number4} = ${game2TestResult}`
}

/**
 *  Game 3
 */
function duplicateClickHandler() {
  if (game3Result) {
    visibleSymbols(game3CheckTrue)
    hiddenSymbols(game3Buttons)
    game3Correct++
  } else {
    visibleSymbols(game3CheckFail)
    hiddenSymbols(game3Buttons)
    game3Wrong++
  }
  setTimeout(() => {
    hiddenSymbols(game3CheckTrue)
    hiddenSymbols(game3CheckFail)
    visibleSymbols(game3Buttons)
    game3RandomNumber()
  }, delayCheckTime * 1000)
}

function noDuplicateClickHandler() {
  if (!game3Result) {
    visibleSymbols(game3CheckTrue)
    hiddenSymbols(game3Buttons)
    game3Correct++
  } else {
    visibleSymbols(game3CheckFail)
    hiddenSymbols(game3Buttons)
    game3Wrong++
  }
  setTimeout(() => {
    hiddenSymbols(game3CheckTrue)
    hiddenSymbols(game3CheckFail)
    visibleSymbols(game3Buttons)
    game3RandomNumber()
  }, delayCheckTime * 1000)
}

function game3RandomNumber() {
  game3Result = false
  const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const selectedNumbers = [];
  const randomValue = Math.random()

  for (let i = 0; i < 6; i++) {
    const index = randomSymbol(range)
    selectedNumbers.push(range.splice(index, 1)[0]);
  }

  if (randomValue < 0.5) {
    const randomIndex1 = randomSymbol(selectedNumbers)
    const randomIndex2 = randomSymbol(selectedNumbers)
    if (randomIndex1 === randomIndex2) return
    selectedNumbers[randomIndex1] = selectedNumbers[randomIndex2]
    game3Result = true
  }

  game3Number.innerHTML = selectedNumbers.join(' ');
}

/**
 *  倒數計時
 */
function startCountdown(duration) {
  let timer = duration * 60
  let timeWidth = 100

  function updateCountdown() {
    const minutes = Math.floor(timer / 60)

    if ((minutes + 1) === 1) {
      time.innerHTML = `${(minutes + 1).toString()} minute to go`
    } else {
      time.innerHTML = `${(minutes + 1).toString()} minutes to go`
    }

    if (timeWidth >= 0) {
      timerBar.style.width = `${timeWidth}%`
      timeWidth -= 100 / (gameTime * 60)
    }

    if (timer === 0) {
      goToResultPage()
      outputResult()
      clearInterval(interval)
    } else {
      timer--
    }
  }

  updateCountdown()
  const interval = setInterval(updateCountdown, 1000)
}


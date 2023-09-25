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
const SYMBOL1 = 'symbol-1'
const SYMBOL2 = 'symbol-2'
const SYMBOL3 = 'symbol-3'
const SYMBOL4 = 'symbol-4'
const SYMBOL5 = 'symbol-5'
const SYMBOL6 = 'symbol-6'
const SYMBOL7 = 'symbol-7'

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
const symbol1Left = document.querySelector('.symbol-1-left')
const symbol1Right = document.querySelector('.symbol-1-right')
const symbol1Triangle = document.querySelector('.symbol-1-triangle')
const symbol1Cross = document.querySelector('.symbol-1-cross')
const symbol1Square = document.querySelector('.symbol-1-square')
const symbol1Semicircle = document.querySelector('.symbol-1-semicircle')
const symbol1Diamond = document.querySelector('.symbol-1-diamond')
const symbol1Diamond1 = document.querySelector('.symbol-1-diamond-1')
const symbol1Star = document.querySelector('.symbol-1-star')
const symbol1Star1 = document.querySelector('.symbol-1-star-1')
const symbol1Star2 = document.querySelector('.symbol-1-star-2')
const symbol1Circle = document.querySelector('.symbol-1-circle')
const symbol1Circle1 = document.querySelector('.symbol-1-circle-1')
const symbol1Circle2 = document.querySelector('.symbol-1-circle-2')
const symbol1Circle3 = document.querySelector('.symbol-1-circle-3')
const symbol1Polygon1 = document.querySelector('.symbol-1-polygon-1')
const symbol1Polygon2 = document.querySelector('.symbol-1-polygon-2')
const symbol1Polygon3 = document.querySelector('.symbol-1-polygon-3')
const symbol1Polygon4 = document.querySelector('.symbol-1-polygon-4')
const symbol1Polygon5 = document.querySelector('.symbol-1-polygon-5')
const symbol1Polygon6 = document.querySelector('.symbol-1-polygon-6')
const symbol1Polygon7 = document.querySelector('.symbol-1-polygon-7')
const symbol1Polygon8 = document.querySelector('.symbol-1-polygon-8')
const symbol1Polygon9 = document.querySelector('.symbol-1-polygon-9')
const symbol1Polygon10 = document.querySelector('.symbol-1-polygon-10')
const symbol1Polygon11 = document.querySelector('.symbol-1-polygon-11')
const symbol1Polygon12 = document.querySelector('.symbol-1-polygon-12')
const symbol1Polygon13 = document.querySelector('.symbol-1-polygon-13')
const symbol2Left = document.querySelector('.symbol-2-left')
const symbol2Right = document.querySelector('.symbol-2-right')
const symbol2Triangle = document.querySelector('.symbol-2-triangle')
const symbol2Cross = document.querySelector('.symbol-2-cross')
const symbol2Square = document.querySelector('.symbol-2-square')
const symbol2Semicircle = document.querySelector('.symbol-2-semicircle')
const symbol2Diamond = document.querySelector('.symbol-2-diamond')
const symbol2Diamond1 = document.querySelector('.symbol-2-diamond-1')
const symbol2Star = document.querySelector('.symbol-2-star')
const symbol2Star1 = document.querySelector('.symbol-2-star-1')
const symbol2Star2 = document.querySelector('.symbol-2-star-2')
const symbol2Circle = document.querySelector('.symbol-2-circle')
const symbol2Circle1 = document.querySelector('.symbol-2-circle-1')
const symbol2Circle2 = document.querySelector('.symbol-2-circle-2')
const symbol2Circle3 = document.querySelector('.symbol-2-circle-3')
const symbol2Polygon1 = document.querySelector('.symbol-2-polygon-1')
const symbol2Polygon2 = document.querySelector('.symbol-2-polygon-2')
const symbol2Polygon3 = document.querySelector('.symbol-2-polygon-3')
const symbol2Polygon4 = document.querySelector('.symbol-2-polygon-4')
const symbol2Polygon5 = document.querySelector('.symbol-2-polygon-5')
const symbol2Polygon6 = document.querySelector('.symbol-2-polygon-6')
const symbol2Polygon7 = document.querySelector('.symbol-2-polygon-7')
const symbol2Polygon8 = document.querySelector('.symbol-2-polygon-8')
const symbol2Polygon9 = document.querySelector('.symbol-2-polygon-9')
const symbol2Polygon10 = document.querySelector('.symbol-2-polygon-10')
const symbol2Polygon11 = document.querySelector('.symbol-2-polygon-11')
const symbol2Polygon12 = document.querySelector('.symbol-2-polygon-12')
const symbol2Polygon13 = document.querySelector('.symbol-2-polygon-13')
const symbol3Left = document.querySelector('.symbol-3-left')
const symbol3Right = document.querySelector('.symbol-3-right')
const symbol3Triangle = document.querySelector('.symbol-3-triangle')
const symbol3Cross = document.querySelector('.symbol-3-cross')
const symbol3Square = document.querySelector('.symbol-3-square')
const symbol3Semicircle = document.querySelector('.symbol-3-semicircle')
const symbol3Diamond = document.querySelector('.symbol-3-diamond')
const symbol3Diamond1 = document.querySelector('.symbol-3-diamond-1')
const symbol3Star = document.querySelector('.symbol-3-star')
const symbol3Star1 = document.querySelector('.symbol-3-star-1')
const symbol3Star2 = document.querySelector('.symbol-3-star-2')
const symbol3Circle = document.querySelector('.symbol-3-circle')
const symbol3Circle1 = document.querySelector('.symbol-3-circle-1')
const symbol3Circle2 = document.querySelector('.symbol-3-circle-2')
const symbol3Circle3 = document.querySelector('.symbol-3-circle-3')
const symbol3Polygon1 = document.querySelector('.symbol-3-polygon-1')
const symbol3Polygon2 = document.querySelector('.symbol-3-polygon-2')
const symbol3Polygon3 = document.querySelector('.symbol-3-polygon-3')
const symbol3Polygon4 = document.querySelector('.symbol-3-polygon-4')
const symbol3Polygon5 = document.querySelector('.symbol-3-polygon-5')
const symbol3Polygon6 = document.querySelector('.symbol-3-polygon-6')
const symbol3Polygon7 = document.querySelector('.symbol-3-polygon-7')
const symbol3Polygon8 = document.querySelector('.symbol-3-polygon-8')
const symbol3Polygon9 = document.querySelector('.symbol-3-polygon-9')
const symbol3Polygon10 = document.querySelector('.symbol-3-polygon-10')
const symbol3Polygon11 = document.querySelector('.symbol-3-polygon-11')
const symbol3Polygon12 = document.querySelector('.symbol-3-polygon-12')
const symbol3Polygon13 = document.querySelector('.symbol-3-polygon-13')
const symbol4Left = document.querySelector('.symbol-4-left')
const symbol4Right = document.querySelector('.symbol-4-right')
const symbol4Triangle = document.querySelector('.symbol-4-triangle')
const symbol4Cross = document.querySelector('.symbol-4-cross')
const symbol4Square = document.querySelector('.symbol-4-square')
const symbol4Semicircle = document.querySelector('.symbol-4-semicircle')
const symbol4Diamond = document.querySelector('.symbol-4-diamond')
const symbol4Diamond1 = document.querySelector('.symbol-4-diamond-1')
const symbol4Star = document.querySelector('.symbol-4-star')
const symbol4Star1 = document.querySelector('.symbol-4-star-1')
const symbol4Star2 = document.querySelector('.symbol-4-star-2')
const symbol4Circle = document.querySelector('.symbol-4-circle')
const symbol4Circle1 = document.querySelector('.symbol-4-circle-1')
const symbol4Circle2 = document.querySelector('.symbol-4-circle-2')
const symbol4Circle3 = document.querySelector('.symbol-4-circle-3')
const symbol4Polygon1 = document.querySelector('.symbol-4-polygon-1')
const symbol4Polygon2 = document.querySelector('.symbol-4-polygon-2')
const symbol4Polygon3 = document.querySelector('.symbol-4-polygon-3')
const symbol4Polygon4 = document.querySelector('.symbol-4-polygon-4')
const symbol4Polygon5 = document.querySelector('.symbol-4-polygon-5')
const symbol4Polygon6 = document.querySelector('.symbol-4-polygon-6')
const symbol4Polygon7 = document.querySelector('.symbol-4-polygon-7')
const symbol4Polygon8 = document.querySelector('.symbol-4-polygon-8')
const symbol4Polygon9 = document.querySelector('.symbol-4-polygon-9')
const symbol4Polygon10 = document.querySelector('.symbol-4-polygon-10')
const symbol4Polygon11 = document.querySelector('.symbol-4-polygon-11')
const symbol4Polygon12 = document.querySelector('.symbol-4-polygon-12')
const symbol4Polygon13 = document.querySelector('.symbol-4-polygon-13')
const symbol5Left = document.querySelector('.symbol-5-left')
const symbol5Right = document.querySelector('.symbol-5-right')
const symbol5Triangle = document.querySelector('.symbol-5-triangle')
const symbol5Cross = document.querySelector('.symbol-5-cross')
const symbol5Square = document.querySelector('.symbol-5-square')
const symbol5Semicircle = document.querySelector('.symbol-5-semicircle')
const symbol5Diamond = document.querySelector('.symbol-5-diamond')
const symbol5Diamond1 = document.querySelector('.symbol-5-diamond-1')
const symbol5Star = document.querySelector('.symbol-5-star')
const symbol5Star1 = document.querySelector('.symbol-5-star-1')
const symbol5Star2 = document.querySelector('.symbol-5-star-2')
const symbol5Circle = document.querySelector('.symbol-5-circle')
const symbol5Circle1 = document.querySelector('.symbol-5-circle-1')
const symbol5Circle2 = document.querySelector('.symbol-5-circle-2')
const symbol5Circle3 = document.querySelector('.symbol-5-circle-3')
const symbol5Polygon1 = document.querySelector('.symbol-5-polygon-1')
const symbol5Polygon2 = document.querySelector('.symbol-5-polygon-2')
const symbol5Polygon3 = document.querySelector('.symbol-5-polygon-3')
const symbol5Polygon4 = document.querySelector('.symbol-5-polygon-4')
const symbol5Polygon5 = document.querySelector('.symbol-5-polygon-5')
const symbol5Polygon6 = document.querySelector('.symbol-5-polygon-6')
const symbol5Polygon7 = document.querySelector('.symbol-5-polygon-7')
const symbol5Polygon8 = document.querySelector('.symbol-5-polygon-8')
const symbol5Polygon9 = document.querySelector('.symbol-5-polygon-9')
const symbol5Polygon10 = document.querySelector('.symbol-5-polygon-10')
const symbol5Polygon11 = document.querySelector('.symbol-5-polygon-11')
const symbol5Polygon12 = document.querySelector('.symbol-5-polygon-12')
const symbol5Polygon13 = document.querySelector('.symbol-5-polygon-13')
const symbol6Left = document.querySelector('.symbol-6-left')
const symbol6Right = document.querySelector('.symbol-6-right')
const symbol6Triangle = document.querySelector('.symbol-6-triangle')
const symbol6Cross = document.querySelector('.symbol-6-cross')
const symbol6Square = document.querySelector('.symbol-6-square')
const symbol6Semicircle = document.querySelector('.symbol-6-semicircle')
const symbol6Diamond = document.querySelector('.symbol-6-diamond')
const symbol6Diamond1 = document.querySelector('.symbol-6-diamond-1')
const symbol6Star = document.querySelector('.symbol-6-star')
const symbol6Star1 = document.querySelector('.symbol-6-star-1')
const symbol6Star2 = document.querySelector('.symbol-6-star-2')
const symbol6Circle = document.querySelector('.symbol-6-circle')
const symbol6Circle1 = document.querySelector('.symbol-6-circle-1')
const symbol6Circle2 = document.querySelector('.symbol-6-circle-2')
const symbol6Circle3 = document.querySelector('.symbol-6-circle-3')
const symbol6Polygon1 = document.querySelector('.symbol-6-polygon-1')
const symbol6Polygon2 = document.querySelector('.symbol-6-polygon-2')
const symbol6Polygon3 = document.querySelector('.symbol-6-polygon-3')
const symbol6Polygon4 = document.querySelector('.symbol-6-polygon-4')
const symbol6Polygon5 = document.querySelector('.symbol-6-polygon-5')
const symbol6Polygon6 = document.querySelector('.symbol-6-polygon-6')
const symbol6Polygon7 = document.querySelector('.symbol-6-polygon-7')
const symbol6Polygon8 = document.querySelector('.symbol-6-polygon-8')
const symbol6Polygon9 = document.querySelector('.symbol-6-polygon-9')
const symbol6Polygon10 = document.querySelector('.symbol-6-polygon-10')
const symbol6Polygon11 = document.querySelector('.symbol-6-polygon-11')
const symbol6Polygon12 = document.querySelector('.symbol-6-polygon-12')
const symbol6Polygon13 = document.querySelector('.symbol-6-polygon-13')
const symbol7Left = document.querySelector('.symbol-7-left')
const symbol7Right = document.querySelector('.symbol-7-right')
const symbol7Triangle = document.querySelector('.symbol-7-triangle')
const symbol7Cross = document.querySelector('.symbol-7-cross')
const symbol7Square = document.querySelector('.symbol-7-square')
const symbol7Semicircle = document.querySelector('.symbol-7-semicircle')
const symbol7Diamond = document.querySelector('.symbol-7-diamond')
const symbol7Diamond1 = document.querySelector('.symbol-7-diamond-1')
const symbol7Star = document.querySelector('.symbol-7-star')
const symbol7Star1 = document.querySelector('.symbol-7-star-1')
const symbol7Star2 = document.querySelector('.symbol-7-star-2')
const symbol7Circle = document.querySelector('.symbol-7-circle')
const symbol7Circle1 = document.querySelector('.symbol-7-circle-1')
const symbol7Circle2 = document.querySelector('.symbol-7-circle-2')
const symbol7Circle3 = document.querySelector('.symbol-7-circle-3')
const symbol7Polygon1 = document.querySelector('.symbol-7-polygon-1')
const symbol7Polygon2 = document.querySelector('.symbol-7-polygon-2')
const symbol7Polygon3 = document.querySelector('.symbol-7-polygon-3')
const symbol7Polygon4 = document.querySelector('.symbol-7-polygon-4')
const symbol7Polygon5 = document.querySelector('.symbol-7-polygon-5')
const symbol7Polygon6 = document.querySelector('.symbol-7-polygon-6')
const symbol7Polygon7 = document.querySelector('.symbol-7-polygon-7')
const symbol7Polygon8 = document.querySelector('.symbol-7-polygon-8')
const symbol7Polygon9 = document.querySelector('.symbol-7-polygon-9')
const symbol7Polygon10 = document.querySelector('.symbol-7-polygon-10')
const symbol7Polygon11 = document.querySelector('.symbol-7-polygon-11')
const symbol7Polygon12 = document.querySelector('.symbol-7-polygon-12')
const symbol7Polygon13 = document.querySelector('.symbol-7-polygon-13')

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
 * 判斷圖形隱藏圖片
 */
function hideAllSymbols(symbols) {
  symbols.forEach(symbol => {
    hiddenSymbols(symbol)
  })
}

/**
 * 判斷圖形顯示圖片
 */
function showSymbol(symbolType, symbols) {
  switch (symbolType) {
    case LEFT:
      visibleSymbols(symbols[0]);
      break;
    case RIGHT:
      visibleSymbols(symbols[1]);
      break;
    case TRIANGLE:
      visibleSymbols(symbols[2]);
      break;
    case CROSS:
      visibleSymbols(symbols[3]);
      break;
    case SQUARE:
      visibleSymbols(symbols[4]);
      break;
    case SEMICIRCLE:
      visibleSymbols(symbols[5]);
      break;
    case DIAMOND:
      visibleSymbols(symbols[6]);
      break;
    case DIAMOND1:
      visibleSymbols(symbols[7]);
      break;
    case STAR:
      visibleSymbols(symbols[8]);
      break;
    case STAR1:
      visibleSymbols(symbols[9]);
      break;
    case STAR2:
      visibleSymbols(symbols[10]);
      break;
    case CIRCLE:
      visibleSymbols(symbols[11]);
      break;
    case CIRCLE1:
      visibleSymbols(symbols[12]);
      break;
    case CIRCLE2:
      visibleSymbols(symbols[13]);
      break;
    case CIRCLE3:
      visibleSymbols(symbols[14]);
      break;
    case POLYGON1:
      visibleSymbols(symbols[15]);
      break;
    case POLYGON2:
      visibleSymbols(symbols[16]);
      break;
    case POLYGON3:
      visibleSymbols(symbols[17]);
      break;
    case POLYGON4:
      visibleSymbols(symbols[18]);
      break;
    case POLYGON5:
      visibleSymbols(symbols[19]);
      break;
    case POLYGON6:
      visibleSymbols(symbols[20]);
      break;
    case POLYGON7:
      visibleSymbols(symbols[21]);
      break;
    case POLYGON8:
      visibleSymbols(symbols[22]);
      break;
    case POLYGON9:
      visibleSymbols(symbols[23]);
      break;
    case POLYGON10:
      visibleSymbols(symbols[24]);
      break;
    case POLYGON11:
      visibleSymbols(symbols[25]);
      break;
    case POLYGON12:
      visibleSymbols(symbols[26]);
      break;
    case POLYGON13:
      visibleSymbols(symbols[27]);
      break;
    default:
      break;
  }
}

/**
 * 判斷圖形顯示指定圖片
 */
function showAssignSymbol(symbolType, symbols ,symbolSrc) {
  switch (symbolType) {
    case SYMBOL1:
      showSymbol(symbolSrc, symbols[0])
      break
    case SYMBOL2:
      showSymbol(symbolSrc, symbols[1])
      break
    case SYMBOL3:
      showSymbol(symbolSrc, symbols[2])
      break
    case SYMBOL4:
      showSymbol(symbolSrc, symbols[3])
      break
    case SYMBOL5:
      showSymbol(symbolSrc, symbols[4])
      break
    case SYMBOL6:
      showSymbol(symbolSrc, symbols[5])
      break
    case SYMBOL7:
      showSymbol(symbolSrc, symbols[6])
      break
    default:
      break;
  }
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
  const symbol1Items = [symbol1Left, symbol1Right, symbol1Triangle, symbol1Cross, symbol1Square, symbol1Semicircle, symbol1Diamond, symbol1Diamond1, symbol1Star, symbol1Star1, symbol1Star2, symbol1Circle, symbol1Circle1, symbol1Circle2, symbol1Circle3, symbol1Polygon1, symbol1Polygon2, symbol1Polygon3, symbol1Polygon4, symbol1Polygon5, symbol1Polygon6, symbol1Polygon7, symbol1Polygon8, symbol1Polygon9, symbol1Polygon10, symbol1Polygon11, symbol1Polygon12, symbol1Polygon13]
  const symbol2Items = [symbol2Left, symbol2Right, symbol2Triangle, symbol2Cross, symbol2Square, symbol2Semicircle, symbol2Diamond, symbol2Diamond1, symbol2Star, symbol2Star1, symbol2Star2, symbol2Circle, symbol2Circle1, symbol2Circle2, symbol2Circle3, symbol2Polygon1, symbol2Polygon2, symbol2Polygon3, symbol2Polygon4, symbol2Polygon5, symbol2Polygon6, symbol2Polygon7, symbol2Polygon8, symbol2Polygon9, symbol2Polygon10, symbol2Polygon11, symbol2Polygon12, symbol2Polygon13]
  const symbol3Items = [symbol3Left, symbol3Right, symbol3Triangle, symbol3Cross, symbol3Square, symbol3Semicircle, symbol3Diamond, symbol3Diamond1, symbol3Star, symbol3Star1, symbol3Star2, symbol3Circle, symbol3Circle1, symbol3Circle2, symbol3Circle3, symbol3Polygon1, symbol3Polygon2, symbol3Polygon3, symbol3Polygon4, symbol3Polygon5, symbol3Polygon6, symbol3Polygon7, symbol3Polygon8, symbol3Polygon9, symbol3Polygon10, symbol3Polygon11, symbol3Polygon12, symbol3Polygon13]
  const symbol4Items = [symbol4Left, symbol4Right, symbol4Triangle, symbol4Cross, symbol4Square, symbol4Semicircle, symbol4Diamond, symbol4Diamond1, symbol4Star, symbol4Star1, symbol4Star2, symbol4Circle, symbol4Circle1, symbol4Circle2, symbol4Circle3, symbol4Polygon1, symbol4Polygon2, symbol4Polygon3, symbol4Polygon4, symbol4Polygon5, symbol4Polygon6, symbol4Polygon7, symbol4Polygon8, symbol4Polygon9, symbol4Polygon10, symbol4Polygon11, symbol4Polygon12, symbol4Polygon13]
  const symbol5Items = [symbol5Left, symbol5Right, symbol5Triangle, symbol5Cross, symbol5Square, symbol5Semicircle, symbol5Diamond, symbol5Diamond1, symbol5Star, symbol5Star1, symbol5Star2, symbol5Circle, symbol5Circle1, symbol5Circle2, symbol5Circle3, symbol5Polygon1, symbol5Polygon2, symbol5Polygon3, symbol5Polygon4, symbol5Polygon5, symbol5Polygon6, symbol5Polygon7, symbol5Polygon8, symbol5Polygon9, symbol5Polygon10, symbol5Polygon11, symbol5Polygon12, symbol5Polygon13]
  const symbol6Items = [symbol6Left, symbol6Right, symbol6Triangle, symbol6Cross, symbol6Square, symbol6Semicircle, symbol6Diamond, symbol6Diamond1, symbol6Star, symbol6Star1, symbol6Star2, symbol6Circle, symbol6Circle1, symbol6Circle2, symbol6Circle3, symbol6Polygon1, symbol6Polygon2, symbol6Polygon3, symbol6Polygon4, symbol6Polygon5, symbol6Polygon6, symbol6Polygon7, symbol6Polygon8, symbol6Polygon9, symbol6Polygon10, symbol6Polygon11, symbol6Polygon12, symbol6Polygon13]
  const symbol7Items = [symbol7Left, symbol7Right, symbol7Triangle, symbol7Cross, symbol7Square, symbol7Semicircle, symbol7Diamond, symbol7Diamond1, symbol7Star, symbol7Star1, symbol7Star2, symbol7Circle, symbol7Circle1, symbol7Circle2, symbol7Circle3, symbol7Polygon1, symbol7Polygon2, symbol7Polygon3, symbol7Polygon4, symbol7Polygon5, symbol7Polygon6, symbol7Polygon7, symbol7Polygon8, symbol7Polygon9, symbol7Polygon10, symbol7Polygon11, symbol7Polygon12, symbol7Polygon13]
  const symbolItems = [symbol1Items, symbol2Items, symbol3Items, symbol4Items, symbol5Items, symbol6Items, symbol7Items]
  const randomSymbolIndex = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7]
  const symbol1Src = arrowSymbols[randomSymbol(arrowSymbols)]
  const symbol2Src = symbols[randomSymbol(symbols)]
  const symbol3Src = symbols[randomSymbol(symbols)]
  const symbol4Src = symbols[randomSymbol(symbols)]
  const symbol5Src = symbols[randomSymbol(symbols)]
  const symbol6Src = symbols[randomSymbol(symbols)]
  const symbol7Src = symbols[randomSymbol(symbols)]
  const symbolSrc = [symbol1Src, symbol2Src, symbol3Src, symbol4Src, symbol5Src, symbol6Src, symbol7Src]
  symbolItems.forEach(i => hideAllSymbols(i))
  game1Result = ''
  game1StartCountdown(game1Time)
  game1Result = symbol1Src
  for (let i = 0; i < 7; i++) {
    const symbolIndex = randomSymbol(randomSymbolIndex)
    showAssignSymbol(randomSymbolIndex[symbolIndex].id, symbolItems, symbolSrc[i])
    randomSymbolIndex.splice(symbolIndex, 1)
  }
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


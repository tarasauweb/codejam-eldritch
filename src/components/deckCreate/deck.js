import cardsBlue from "../../data/mythicCards/blue/index";
import cardsBrown from "../../data/mythicCards/brown/index";
import cardsGreen from "../../data/mythicCards/green/index";
import ancientsData from "../../data/ancients";
import myStore from "../createStore/createStore";
import stage1 from "./stages";
import { getAllCardsArr } from "./stages";

let arrBlueCards = [];
let arrBrownCards = [];
let arrGreenCards = [];

function createDeck() {
  const deck = document.createElement("div");
  deck.classList.add("deck");
  deck.addEventListener("click", listenerDeck);
  return deck;
}
let startGame = false;
let arrStartgame
let count = 0
function listenerDeck() {
  if (!startGame) {
    startGame = true
    console.log("hohohoho");
    let state = myStore.getState();
    let sumGreenCards = null;
    let sumBlueCards = null;
    let sumBrownCards = null;
    // console.log(state)
    let lvl = state.lvl;
    const usedDeck = ancientsData.filter((item) => {
      if (item.id === state.card) {
        sumGreenCards =
          item.firstStage.greenCards +
          item.secondStage.greenCards +
          item.thirdStage.greenCards;
        sumBlueCards =
          item.firstStage.blueCards +
          item.secondStage.blueCards +
          item.thirdStage.blueCards;
        sumBrownCards =
          item.firstStage.brownCards +
          item.secondStage.brownCards +
          item.thirdStage.brownCards;
      }
    });
    if (state.lvl === "light") {
      arrBlueCards = cardsBlue.filter((item) => {
        return item.difficulty === "easy";
      });
      arrGreenCards = cardsGreen.filter((item) => {
        return item.difficulty === "easy";
      });
      arrBrownCards = cardsBrown.filter((item) => {
        return item.difficulty === "easy";
      });
      if (sumBrownCards > arrBrownCards.length) {
        const num = sumBrownCards - arrBrownCards.length;
        const arr = cardsBrown.filter((item) => item.difficulty === "normal");
        arrRandomCards(num, arr, arrBrownCards);
      }
      if (sumGreenCards > arrGreenCards.length) {
        const num = sumGreenCards - sumGreenCards.length;
        const arr = cardsGreen.filter((item) => item.difficulty === "normal");
        arrRandomCards(num, arr, arrGreenCards);
      }
      if (sumBlueCards > arrBlueCards.length) {
        const num = sumBlueCards - arrBlueCards.length;
        const arr = cardsBlue.filter((item) => item.difficulty === "normal");
        arrRandomCards(num, arr, sumBlueCards);
      }
    }
    if (state.lvl === "easy") {
      arrGreenCards = cardsGreen.filter((item) => {
        return item.difficulty !== "hard";
      });
      arrBrownCards = cardsBrown.filter((item) => {
        return item.difficulty !== "hard";
      });
      arrBlueCards = cardsBlue.filter((item) => {
        return item.difficulty !== "hard";
      });
    }
    if (state.lvl === "normal") {
      arrGreenCards = cardsGreen.filter((item) => {
        return item;
      });
      arrBrownCards = cardsBrown.filter((item) => {
        return item;
      });
      arrBlueCards = cardsBlue.filter((item) => {
        return item;
      });
    }
    if (state.lvl === "hard") {
      arrGreenCards = cardsGreen.filter((item) => {
        return item.difficulty !== "easy";
      });
      arrBrownCards = cardsBrown.filter((item) => {
        return item.difficulty !== "easy";
      });
      arrBlueCards = cardsBlue.filter((item) => {
        return item.difficulty !== "easy";
      });
    }
    if (state.lvl === "expert") {
      arrBlueCards = cardsBlue.filter((item) => {
        return item.difficulty === "hard";
      });
      arrGreenCards = cardsGreen.filter((item) => {
        return item.difficulty === "hard";
      });
      arrBrownCards = cardsBrown.filter((item) => {
        return item.difficulty === "hard";
      });
      if (sumBrownCards > arrBrownCards.length) {
        const num = sumBrownCards - arrBrownCards.length;
        const arr = cardsBrown.filter((item) => item.difficulty === "normal");
        arrRandomCards(num, arr, arrBrownCards);
      }
      if (sumGreenCards > arrGreenCards.length) {
        const num = sumGreenCards - sumGreenCards.length;
        const arr = cardsGreen.filter((item) => item.difficulty === "normal");
        arrRandomCards(num, arr, arrGreenCards);
      }
      if (sumBlueCards > arrBlueCards.length) {
        const num = sumBlueCards - arrBlueCards.length;
        const arr = cardsBlue.filter((item) => item.difficulty === "normal");
        arrRandomCards(num, arr, sumBlueCards);
      }
    }
    arrBlueCards = arrBlueCards.sort(() => Math.random() - 0.5);
    arrBrownCards = arrBrownCards.sort(() => Math.random() - 0.5);
    arrGreenCards = arrGreenCards.sort(() => Math.random() - 0.5);

    let finallyArrBlueCards = [];
    let finallyArrBrownCards = [];
    let finallyArrgreenCards = [];

    const numBrownCards = randomRange(sumBrownCards);
    const numGreenCards = randomRange(sumGreenCards);
    const numBlueCards = randomRange(sumBlueCards);
    for (let i = 0; i < numBrownCards.length; i++) {
      finallyArrBrownCards.push(arrBrownCards[numBrownCards[i]]);
    }
    for (let i = 0; i < numGreenCards.length; i++) {
      finallyArrgreenCards.push(arrGreenCards[numGreenCards[i]]);
    }
    for (let i = 0; i < numBlueCards.length; i++) {
      finallyArrBlueCards.push(arrBlueCards[numBlueCards[i]]);
    }
    // console.log(finallyArrgreenCards,finallyArrBrownCards,finallyArrBlueCards)

    
    arrStartgame = getAllCardsArr(
        finallyArrgreenCards,
        finallyArrBrownCards,
        finallyArrBlueCards
      );
  }
  else{
    count++
    console.log(count)
    console.log(arrStartgame)
  }
}

const randomRange = (length) => {
  const results = [];
  const possibleValues = Array.from({ length }, (value, i) => i);

  for (let i = 0; i < length; i += 1) {
    const possibleValuesRange = length - (length - possibleValues.length);
    const randomNumber = Math.floor(Math.random() * possibleValuesRange);
    const normalizedRandomNumber =
      randomNumber !== possibleValuesRange ? randomNumber : possibleValuesRange;

    const [nextNumber] = possibleValues.splice(normalizedRandomNumber, 1);

    results.push(nextNumber);
  }

  return results;
};

function randomElArr(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrRandomCards(num, arr, finallyArr) {
  let numArr = [];
  for (let i = 0; i < num; i++) {
    const newItem = randomElArr(0, arr.length - 1);
    numArr.push(newItem);
    if (numArr.includes(newItem)) {
      newItem++;
      if (newItem >= arr.length - 1) {
        newItem = randomElArr(0, arr.length - 1);
        finallyArr.push(arr[newItem]);
      } else {
        finallyArr.push(arr[newItem]);
      }
    } else {
      finallyArr.push(arr[newItem]);
    }
  }
}
export default createDeck;

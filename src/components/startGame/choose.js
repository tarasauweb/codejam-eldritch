import setLevel from "../level/level";
const arrAncients = ['azathoth','cthulhu','iogSothoth','shubNiggurath']
import {chooseActionCreator} from '../reducers/reducer'
import {dispatch} from "../createStore/createStore";

function createCardAncient(ancients) {
  let cardsArr = [];
  let amountAncients = Object.keys(ancients).length;
  const allCardsAncientDiv = document.createElement("div");
  const body = document.body;
  allCardsAncientDiv.classList.add("cards-ancients");
  body.insertAdjacentElement("afterbegin", allCardsAncientDiv);
  for (let i = 0; i < amountAncients; i++) {
    const divAncient = document.createElement("div");
    divAncient.classList.add("ancient-card");
    divAncient.setAttribute("id", arrAncients[i]);
    divAncient.style.background = `url("${
      Object.values(ancients)[i]
    }") no-repeat center center /cover`;
    allCardsAncientDiv.insertAdjacentElement("afterbegin", divAncient);
    cardsArr.push(divAncient);
    divAncient.addEventListener("click", (e) => {
      cardsArr.forEach((item) => {
        item.classList.remove("active-ancient");
      });
      if (e.target.getAttribute("id") === divAncient.getAttribute("id")) {
        e.target.classList.add("active-ancient");
        dispatch(chooseActionCreator(e.target.getAttribute("id")))
      }
      console.log()
      setLevel()
    });
  }
  
  return allCardsAncientDiv;
}

export default createCardAncient;

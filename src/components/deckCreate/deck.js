import cardsBlue from '../../data/mythicCards/blue/index'
import cardsBrown from '../../data/mythicCards/brown/index'
import cardsGreen from '../../data/mythicCards/green/index'
import ancientsData from '../../data/ancients'
import myStore from '../createStore/createStore'

let arrBlueCards = []
let arrBrownCards = []
let arrGreenCards = []

function createDeck () {
    
    const deck = document.createElement('div')
    deck.classList.add('deck')
    deck.addEventListener('click' , listenerDeck)
    return deck
}

function listenerDeck () {
    let state = myStore.getState()
    console.log(state)

    console.log(ancientsData)
}
export default createDeck
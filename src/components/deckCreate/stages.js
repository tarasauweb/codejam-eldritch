import ancients from '../../data/ancients'
import myStore from '../createStore/createStore'



export const getAllCardsArr = (...arr)=>{
    let allArraysCardsForStart = []
    const state = myStore.getState()
    let allArrayCards = arr
    const arrGreen = allArrayCards[0].sort(() => Math.random() - 0.5)
    const arrBrown = allArrayCards[1].sort(() => Math.random() - 0.5)
    const arrBlue = allArrayCards[2].sort(() => Math.random() - 0.5)

    let copyArrGreen = arrGreen.slice()
    let copyArrBrown = arrBrown.slice()
    let copyArrblue = arrBlue.slice()

    const dataGame = ancients.filter(item=>{
        return item.name === state.card
    })
    let arrForStage1 = []
    let arrForStage2 = []
    let arrForStage3 = []

    let numGreenCardStage1 = dataGame[0].firstStage.greenCards
    let numBrownCardStage1 = dataGame[0].firstStage.brownCards
    let numBlueCardStage1 = dataGame[0].firstStage.blueCards

    //  stage 1 array
    addRandomCard(arrForStage1,copyArrGreen,numGreenCardStage1)
    addRandomCard(arrForStage1,arrBrown,numBrownCardStage1)
    addRandomCard(arrForStage1,arrBlue,numBlueCardStage1)
    

    // num for stage 2
    let numGreenCardStage2 = dataGame[0].secondStage.greenCards
    let numBrownCardStage2 = dataGame[0].secondStage.brownCards
    let numBlueCardStage2 = dataGame[0].secondStage.blueCards
    //  stage 2 array
    addRandomCard(arrForStage2,copyArrGreen,numGreenCardStage2)
    addRandomCard(arrForStage2,arrBrown,numBrownCardStage2)
    addRandomCard(arrForStage2,arrBlue,numBlueCardStage2)
    
    // num for stage 3
    let numGreenCardStage3 = dataGame[0].thirdStage.greenCards
    let numBrownCardStage3 = dataGame[0].thirdStage.brownCards
    let numBlueCardStage3 = dataGame[0].thirdStage.blueCards
    // stage 3 array

    addRandomCard(arrForStage3,copyArrGreen,numGreenCardStage3)
    addRandomCard(arrForStage3,arrBrown,numBrownCardStage3)
    addRandomCard(arrForStage3,arrBlue,numBlueCardStage3)

    arrForStage1 = arrForStage1.sort(() => Math.random() - 0.5)
    arrForStage2 = arrForStage2.sort(() => Math.random() - 0.5)
    arrForStage3 = arrForStage3.sort(() => Math.random() - 0.5)
    
    // console.log(arrForStage1)
    

    allArraysCardsForStart = [arrForStage1,arrForStage2,arrForStage3]
    console.log(allArraysCardsForStart)
    return allArraysCardsForStart

} 

function addRandomCard(arrayForStage,arraCards,num){
    for(let i = 0 ; i<num;i++){
        arrayForStage.push(arraCards[i])
    }
    const s = new Set(arrayForStage)
    arraCards = arraCards.filter(e=>!s.has(e))
}




import myStore from '../createStore/createStore'
import ancientsData from '../../data/ancients'
function createBtnDeck () {
    const state = myStore.getState()
    const deckBtn = document.createElement('button')
    const btnsLvl = document.querySelector('.btns-level')
    const divBtnDeck = document.createElement('div')
    divBtnDeck.classList.add('deck-div')
    deckBtn.textContent = 'Замешать колоду'
    deckBtn.classList.add('deck-btn')
    btnsLvl.insertAdjacentElement('afterend' , divBtnDeck)
    divBtnDeck.insertAdjacentElement('afterbegin' , deckBtn)
    deckBtn.addEventListener('click' , ()=>{
        const divStages = document.createElement('div')
        const divForStage = document.createElement('div')
        divForStage.classList.add('stages')
        divBtnDeck.insertAdjacentElement('afterend' , divStages)
        divStages.classList.add('my-stages')
        divStages.insertAdjacentElement('afterbegin' , divForStage)
        const myAncient = ancientsData.filter(item=>{
            if(item.id === state.card){
                createStage(divForStage)
                return item
            }
        })
        const stage2 = document.querySelectorAll('.stage-1 .curcle')
        const stage1 = document.querySelectorAll('.stage-2 .curcle')
        const stage0 = document.querySelectorAll('.stage-3 .curcle')
        for(let i = 0 ; i <stage2.length;i++){
            if(stage2[i].getAttribute('data') == Object.keys(myAncient[0].firstStage)[i] ){
                stage2[i].textContent = Object.values(myAncient[0].firstStage)[i]
            }
        }
        for(let i = 0 ; i <stage1.length;i++){
            if(stage1[i].getAttribute('data') == Object.keys(myAncient[0].secondStage)[i] ){
                stage1[i].textContent = Object.values(myAncient[0].secondStage)[i]
            }
        }
        for(let i = 0 ; i <stage0.length;i++){
            if(stage0[i].getAttribute('data') == Object.keys(myAncient[0].thirdStage)[i] ){
                stage0[i].textContent = Object.values(myAncient[0].thirdStage)[i]
            }
        }
        
    })

}
let colorsArr = ['greenCards' , 'brownCards' , 'blueCards']
const stagesNameArr = ["Этап 3" , "Этап 2" , "Этап 1"]
const stagesArr = [3,2,1]
function createStage(div){
    colorsArr.reverse()
    for(let i = 0 ; i<3;i++){
        
        const stageDiv = document.createElement('div')
        const stageName = document.createElement('div')
        stageName.classList.add('stage-name')
        stageName.textContent = `${stagesNameArr[i]}`
        stageDiv.classList.add('stage')
        stageDiv.classList.add(`stage-${stagesArr[i]}`)
        div.insertAdjacentElement('afterbegin' , stageDiv)
        stageDiv.insertAdjacentElement('beforebegin' , stageName)
        for(let j = 0 ; j <3;j++){
            const divSomeStage = document.createElement('div')
            stageDiv.insertAdjacentElement('afterbegin' , divSomeStage)
            divSomeStage.classList.add('curcle')
            divSomeStage.classList.add(`curcle-${j}`)
            divSomeStage.classList.add(`${colorsArr[j]}`)
            divSomeStage.setAttribute('data'  , `${colorsArr[j]}`)
        }
    }
}

export default createBtnDeck
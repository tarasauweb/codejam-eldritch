let initialState = {
    card : '',
    lvl : '',
    difficulty:''
}
let reducer = (state=initialState,action)=>{
    if(action.type === 'CHOOSE__CARD'){
        state.card = action.card
        return state
    }
    else if(action.type === 'CHOOSE__LVL'){
        state.lvl = action.lvl
        state.difficulty = action.difficulty
        return state
    }
    return state
}



export default reducer

export const chooseActionCreator = (card)=>{
    return{
        type:'CHOOSE__CARD',
        card:card
    }
}
export const chooseLvlActionCreator = (lvl,difficulty)=>{
    return{
        type:'CHOOSE__LVL',
        lvl:lvl,
        difficulty:difficulty
    }
}

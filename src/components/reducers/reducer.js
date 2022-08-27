let initialState = {
    card : '',
    lvl : ''
}
let reducer = (state=initialState,action)=>{
    if(action.type === 'CHOOSE__CARD'){
        
        state.card = action.card
        console.log(state)
        return state
    }
    else if(action.type === 'CHOOSE__LVL'){
        state.lvl = action.lvl
        console.log(state)
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
export const chooseLvlActionCreator = (lvl)=>{
    return{
        type:'CHOOSE__LVL',
        lvl:lvl
    }
}

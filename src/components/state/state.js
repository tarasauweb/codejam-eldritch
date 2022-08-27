
let createStore = (reducer,initialState)=>{
    let _state = reducer(initialState ,{ type:'__INIT__'})

    let _subscrubers = []

    return{
        getState(){
            return _state
        },
        dispatch(action){
            _state = reducer(_state,action)
            _subscrubers.forEach(item=>{
                item()
            })
        },
        subscruber(observer){
            _subscrubers.push(observer)
        }
    }
}

export default createStore
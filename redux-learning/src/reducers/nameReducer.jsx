/*const iState = {
    name: "Ramesh",
    wishes: ['eat', 'code']
}*/

//const nameReducer = (state=iState, action) =>{
const nameReducer = (state='', action) =>{
        if(action.type==='CHANGE_NAME'){
            return action.payload
        }
    return state;
}

export default nameReducer;
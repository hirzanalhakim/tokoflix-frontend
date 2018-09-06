const initial_state = null;

export default (state = initial_state, action) => {
    switch(action.type){
        case 'user':
        console.log('action', action);
            return action.payload

            default:
            return  state;
    }

}
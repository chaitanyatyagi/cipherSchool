
const ReducerTwo = (state = [], action) => {
    switch (action.type) {
        case 'Interests':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}

export default ReducerTwo
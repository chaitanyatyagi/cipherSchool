
const Reducer = (state = true, action) => {
    switch (action.type) {
        case 'Dark':
            return true
        case 'Light':
            return false
        default:
            return state
    }
}

export default Reducer
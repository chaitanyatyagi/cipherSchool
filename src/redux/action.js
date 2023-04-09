
const DarkAction = () => {
    return {
        type: 'Dark'
    }
}

const LightAction = () => {
    return {
        type: 'Light'
    }
}

const Interests = (interests) => {
    return {
        type: 'Interests',
        payload: interests
    }
}

export { DarkAction, LightAction, Interests }
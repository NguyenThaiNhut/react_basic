const initState = {
    users: [
        { id: 1, name: 'Nhut' },
        { id: 2, name: 'An' },
        { id: 3, name: 'Bien' },
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    let users
    switch (action.type) {

        case 'DELETE_USER':
            console.log('check DELETE_USER into redux action', action)
            users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            console.log('check users: ', users)
            return {
                ...state, users
            }
        case 'CREATE_USER':
            users = state.users
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random-${id}` }
            return {
                ...state, users: [...state.users, user]
            }

        default:
            return state
    }
}

export default rootReducer;
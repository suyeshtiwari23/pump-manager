export default (state = {open: false}, action) => {
    switch (action.type) {
        case 'UPDATE_NAV':
            return  {
                ...state,
                open: action.payload
            }
        default:
            return state
    }
}
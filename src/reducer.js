

export default (state = initialState, action) => {
    switch (action.type) {
        case "SCREEN":
            return {...state, page_title: action.name}
        default:
            return state;
    }
};
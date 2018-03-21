const initialState = {
    data: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                data: state.data.concat({
                    id: Date.now().toString(32),
                    name: action.contactName,
                    phone: action.contactPhone,
                    email: action.contactEmail,
                    category: action.contactCategory
                })
            };
        case 'REMOVE_CONTACT':
            return {
                ...state,
                data: state.data.filter(list => list.id !== action.listId)
            };
        default:
            return state;
    }
}

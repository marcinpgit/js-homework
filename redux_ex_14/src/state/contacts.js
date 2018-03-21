const initialState = {
    contacts: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: state.contacts.concat({
                    id: Date.now().toString(32),
                    name: action.contactName,
                    phone: action.contactPhone,
                    email: action.contactEmail,
                    category: action.contactCategory ? contactCategory : 'uncategorised'.toUpperCase()
                })
            };
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(list => list.id !== action.listId)
            };
        default:
            return state;
    }
}

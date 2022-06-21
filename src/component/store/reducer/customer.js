const defaultState = {
    customer: []
}

const AddCustomer = "ADD_CUSTOMER"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AddCustomer:
            return {...state, customer: [...state.customer, action.payload]}   
        default:
            return state;
    }
}

export const AddCustomerAction = (payload) => ({type: AddCustomer, payload})
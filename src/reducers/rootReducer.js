import { GET_DATA_SUCCESS,GET_DATA_PENDING,GET_DATA_ERROR } from "../actions/types";

const initState = {
    pending: false,
    Data: [],
    error: false
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DATA_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_DATA_SUCCESS:
                return {
                    ...state,
                    pending: false,
                    Data: action.Data
                }
        case GET_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: true
            }
        default:
            return state

    }
}
export default reducer

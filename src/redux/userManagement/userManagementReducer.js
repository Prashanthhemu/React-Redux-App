import { FETCH_API_FAILURE, FETCH_API_SUCCESS, FETCH_API_REQUEST } from '../types'

const initialState = {
    loading: false,
    data: '',
    error: '',
    dataUpdated: false,
    isError: false
}


const userManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_API_REQUEST:
            return {
                ...state,
                loading: true,
                dataUpdated: false,
                isError: false
            }
        case FETCH_API_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: '',
                dataUpdated: true,
                isError: false
            }
        case FETCH_API_FAILURE:
            return {
                loading: false,
                data: '',
                error: action.payload,
                dataUpdated: true,
                isError: true
            }
        default: return state
    }
}

export default userManagementReducer
import { FETCH_API_FAILURE, FETCH_API_SUCCESS, FETCH_API_REQUEST } from './types'

export const fetchAPIRequest = () => {
    return {
        type: FETCH_API_REQUEST
    }
}

export const fetchAPISuccess = token => {
    return {
        type: FETCH_API_SUCCESS,
        payload: token
    }
}

export const fetchAPIFailure = error => {
    return {
        type: FETCH_API_FAILURE,
        payload: error
    }
}
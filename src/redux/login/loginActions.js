import axios from 'axios'
import { fetchAPIRequest, fetchAPISuccess, fetchAPIFailure } from '../actions'

export const fetchUserAuthenticationDetails = (authenticateRequest) => {
    return (dispatch) => {
        dispatch(fetchAPIRequest)
        axios.post('https://localhost:44307/api/v1/Account/Authenticate', authenticateRequest)
            .then(response => {
                if (!response.data.isException && response.data.errorMessage == null) {
                    const token = response.data
                    dispatch(fetchAPISuccess(token))
                }
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchAPIFailure(errorMessage))
            })
    }
}


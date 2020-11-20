import axios from 'axios'
import { fetchAPIRequest, fetchAPISuccess, fetchAPIFailure } from '../actions';
import { AuthHeader } from '../../helper/AuthHeader'

const api = axios.create({
    baseURL: `https://localhost:44307/api/v1/Account`
})


export const getRequest = (requestObject) => {
    return (dispatch) => {
        dispatch(fetchAPIRequest)
        axios.get(`https://localhost:44307/api/v1/Account/User?pageSize=${requestObject.pageSize}&pageNumber=${requestObject.pageNumber + 1}`, { headers: { 'Authorization': 'Test Auth' } })
            .then(response => {
                if (!response.data.isException && response.data.errorMessage == null) {
                    const data = response.data
                    dispatch(fetchAPISuccess(data))
                }
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchAPIFailure(errorMessage))
            })
    }
}


// export const updateRequest = (rowData, tableData, resolve) => {
//     return (dispatch) => {
//         dispatch(fetchAPIRequest)
//         axios.put(`https://localhost:44307/api/v1/Account/User/${rowData.id}`, JSON.stringify(rowData), { headers: { 'Content-Type': 'application/json' } })
//             .then(response => {
//                 if (!response.data.isException && response.data.errorMessage == null) {
//                     const dataUpdate = [...tableData];
//                     const index = rowData.tableData.id;
//                     dataUpdate[index] = rowData;
//                     dispatch(fetchAPISuccess(dataUpdate))
//                     resolve()
//                 }
//             })
//             .catch(error => {
//                 const errorMessage = error.message
//                 dispatch(fetchAPIFailure(errorMessage))
//             })
//     }
// }

export const deleteRequest = (rowData, requestObject) => {
    return (dispatch) => {
        dispatch(fetchAPIRequest)
        api.delete("/User/" + rowData.id)
            .then(response => {
                if (!response.data.isException) {
                    getRequest(requestObject)
                }
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchAPIFailure(errorMessage))
            })
    }
}


import React, { useEffect, useState } from 'react'
import DataTable from '../../shared/dataTable/DataTable'
import { useSelector, useDispatch } from 'react-redux'
import { getRequest, deleteRequest } from '../../redux'
import NavigationBar from '../../NavigationBar'
import EditableDataTable from '../../shared/editableDataTable/EditableDataTable'

const columns = [
    { id: 'userName', label: 'UserName' },
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'email', label: 'Email' }
];

function UserManagement() {
    const dispatch = useDispatch()
    const [page] = useState(0);
    const [rowsPerPage] = useState(10);
    const [data, setData] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const insertedData = useSelector(state => state.userManagement.data)

    useEffect(() => {
        fetchUsersData(rowsPerPage, page)
    }, []);

    useEffect(() => {
        setData(insertedData.model)
        setItemCount(insertedData.itemsCount)
    }, [insertedData]);

    function fetchUsersData(pageSize, pageNumber) {
        const requestObject = {
            pageSize: pageSize,
            pageNumber: pageNumber
        }
        dispatch(getRequest(requestObject))
    }

    const handleChangeRowsPerPage = (rowsPerPageCount, pageNumber) => {
        fetchUsersData(rowsPerPageCount, pageNumber)
    };

    const handleChangePage = (pageNumber) => {
        fetchUsersData(rowsPerPage, pageNumber);
    };

    // const updateRowData = (rowData) => {

    // }

    const deleteRowData = (rowData) => {
        const requestObject = {
            pageSize: rowsPerPage,
            pageNumber: page
        }
        dispatch(deleteRequest(rowData, requestObject))
    }

    return (
        <React.Fragment>
            <NavigationBar></NavigationBar>
            {(data && itemCount) &&
                <EditableDataTable data={data} deleteRow={deleteRowData}></EditableDataTable>
            }

            {(data && itemCount) &&
                <DataTable data={data} columns={columns} itemCount={itemCount} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage}></DataTable>}
        </React.Fragment>
    );
}

export default UserManagement


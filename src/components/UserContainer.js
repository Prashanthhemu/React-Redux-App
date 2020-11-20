import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        console.log("API CALL Happened")
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h1>Loading</h1>
    ) : userData.error ? (
        <h1>{userData.error}</h1>
    ) : (
                <div>
                    <h1>User List</h1>
                    <div>
                        {
                            userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
                        }
                    </div>

                </div>
            )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        userData: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

// import { useSelector } from 'react-redux';
import { connect } from 'react-redux'

// function User() { // Rule 2: call hooks in function component
//     const token = useSelector(state => state.login.data.model.token)
//     return token
// }

const mapStateToProps = state => {
    console.log(state)
    return {
        token: state.login.data.model.token
    }
}

 function AuthHeader(props) {
    // return authorization header with jwt token

    if (props.token) {
        return { 'Authorization': props.token };
    } else {
        return {};
    }
}

export default connect(mapStateToProps)(AuthHeader)

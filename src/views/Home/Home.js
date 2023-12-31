import React from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class Home extends React.Component {

    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.createUserRedux()
    }

    render() {
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>
                    Hello world form Homepage with Nguyen Thai Nhut!!
                </div>
                <div>
                    {listUsers && listUsers.length > 0
                        && listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <span onClick={() => this.handleDeleteUser(item)}> x </span>
                                </div>
                            )
                        })}
                </div>
                <div>
                    <button type="button" onClick={() => this.handleCreateUser()}>Add User</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER', payload: userDelete
        }),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
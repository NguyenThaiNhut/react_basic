import React from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    componentDidMount = async () => {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    handleBackToUserPage = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <div>
                <div>Hello user with id: {this.props.match.params.id}</div>
                {!isEmptyObj &&
                    <>
                        <div>User's name: {user.first_name} - {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} alt='img_1' />
                        </div>
                    </>
                }
                <button type='button' onClick={() => this.handleBackToUserPage()}>Back</button>
            </div>
        )
    }

}

export default withRouter(DetailUser)
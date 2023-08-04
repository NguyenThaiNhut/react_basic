import React from 'react';
import axios from 'axios';
import './ListUser.scss'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import ImgNhut from '../../assets/images/img_nhut.jpg'

class ListUser extends React.Component {
    state = {
        listUser: []
    }

    componentDidMount = async () => {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/detail/${user.id}`)
    }

    render() {
        let { listUser } = this.state
        console.log('check state listUser: ', listUser)

        return (
            <div className='list-user-container'>
                <div className='title'>
                    Fetch all list users
                </div>
                <div className='list-user-content'>
                    {
                        listUser && listUser.length > 0
                        && listUser.map((item, index) => {
                            return (
                                <div className='child'
                                    key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.last_name} {item.first_name} - {item.email}
                                </div>
                            )
                        })
                    }
                </div>
                <img
                    src={ImgNhut}
                    alt='ImgNhut'
                    style={{ width: 200 }}
                />
            </div>

        )
    }

}

export default withRouter(ListUser);
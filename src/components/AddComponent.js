import React from 'react';
import '../styles/demo.scss'

class AddComponent extends React.Component {

    state = {
        job: '',
        salary: '',
    }

    //xy ly su kien thay doi ten cong viec
    handleChangejob = (event) => {
        this.setState({
            job: event.target.value
        })
    }

    // xy ly su kien thay doi luong
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    //xu ly su kien form submit
    handleFormSubmit = (event) => {
        event.preventDefault()
        //check dieu kien neu them khong du du lieu
        if (!this.state.job || !this.state.salary) {
            alert('Vui long nhap day du du kien!!!')
            return
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000).toString(),
            job: this.state.job,
            salary: this.state.salary,
        })

        this.setState({
            job: '',
            salary: ''
        })

    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's Content:</label> <br />
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={this.state.job}
                        onChange={(event) => this.handleChangejob(event)}
                    /> <br />

                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleFormSubmit(event)}
                    />
                    <p
                        className="demo-1">
                        Demo 1
                    </p>
                    <p
                        className="demo-2">
                        Demo 2
                    </p>
                </form>
            </>
        )
    }
}

export default AddComponent;
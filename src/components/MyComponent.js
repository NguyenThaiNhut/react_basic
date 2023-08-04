import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: '1', job: 'coder', salary: '500' },
            { id: '2', job: 'tester', salary: '400' },
            { id: '3', job: 'manager', salary: '1000' },
        ]
    }

    //them phan tu moi vao arrJobs
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    //xoa phan tu theo id trong arrJobs
    deleteJobById = (job) => {
        const arrJobsNew = this.state.arrJobs.filter(
            item => item.id !== job.id
        )
        this.setState({
            arrJobs: [...arrJobsNew],
        })
    }

    render() {
        console.log('>>> check arrJobs; ', this.state.arrJobs)
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJobById={this.deleteJobById}
                />
            </>
        )
    }
}

export default MyComponent;
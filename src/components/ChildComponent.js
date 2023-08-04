import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showLists: false,
    }

    handleShowLists = () => {
        this.setState({
            showLists: !this.state.showLists,
        })
    }

    handleOnclickDelete = (job) => {
        this.props.deleteJobById(job)
    }

    render() {
        let { arrJobs } = this.props;

        return (
            <>
                {this.state.showLists === false ?
                    <>
                        <div>
                            <button
                                onClick={() => this.handleShowLists()}>
                                Show
                            </button>
                        </div>
                    </>
                    :
                    <>
                        <div className='job-lists'>
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.job} - {item.salary}
                                        <> </>
                                        <span
                                            onClick={() => this.handleOnclickDelete(item)}
                                        >x</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div>
                            <button
                                onClick={() => this.handleShowLists()}>
                                Hide
                            </button>
                        </div>
                    </>
                }


            </>
        )
    }
}

export default ChildComponent;
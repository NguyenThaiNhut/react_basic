import React from 'react';

class AddTodo extends React.Component {
    state = {
        title: '',
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleAddtodo = (event) => {
        event.preventDefault();

        if (!this.state.title) {
            alert('Vui lòng nhập dữ liệu')
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 10000).toString(),
            title: this.state.title
        }

        this.props.addNewTodo(todo)
        this.setState({
            title: '',
        })


    }

    render() {
        let { title } = this.state;

        return (
            <div className='add-todo'>
                <form>
                    <input
                        type='text'
                        value={title}
                        onChange={(event) => {
                            this.handleOnChangeTitle(event)
                        }
                        } />
                    <button
                        className='btn-todo'
                        type='submit'
                        onClick={(event) => this.handleAddtodo(event)}
                    >
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default AddTodo;
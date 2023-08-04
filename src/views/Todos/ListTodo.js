import React from 'react';
import './ListTodo.scss'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        })

        toast.success("Them thanh cong!")
    }

    handleDeleteTodo = (id) => {
        let listNewTodos = this.state.listTodos.filter(
            todo => todo.id !== id
        )

        this.setState({
            listTodos: [...listNewTodos],
        })

        toast.success("Xoa thanh cong!")
    }

    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;

        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleSaveTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let listTodosCopy = [...listTodos];
        let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

        listTodosCopy[objIndex].title = editTodo.title;

        this.setState({
            listTodos: listTodosCopy,
            editTodo: {},
        })
        toast.success("Update todo thanh cong!")
    }

    render() {
        let { listTodos, editTodo } = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>
                    Simple TODO app - Nguyen Thai Nhut!!
                </p>
                < div className='list-todo-container' >

                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {!isEmptyObj && editTodo.id === item.id
                                            ?
                                            <>
                                                <span> {index + 1} - <input
                                                    value={editTodo.title}
                                                    onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>
                                                <button
                                                    className='btn-todo'
                                                    onClick={() => this.handleSaveTodo(item)}
                                                >Save</button>
                                            </>
                                            :
                                            <>
                                                <span> {index + 1} - {item.title}</span>
                                                <button
                                                    className='btn-todo'
                                                    onClick={() => this.handleEditTodo(item)}
                                                >Edit</button>
                                            </>
                                        }


                                        <button
                                            className='btn-todo'
                                            onClick={() => this.handleDeleteTodo(item.id)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div >
            </>
        )
    }
}

export default ListTodo;
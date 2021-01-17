import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import Todo from '../components/Todo';

const Home = ({todos, AddTodo }) => {

    const [todo,setTodo] = useState("");
    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        AddTodo(todo);
        setTodo("");
    }
    return (
        <>
            <h1>My Todo</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="todo" id="todo" value={todo} onChange={onChange}></input>
                <button>Add Todo</button>
            </form>
            <ul>{todos.map((todo) => <Todo key={todo.id} {...todo} />)}</ul>
        </>
    )
}

function mapStateToProps(state, ownProps){
    return { todos: state };
}
function mapDispatchToPros(dispatch){
    return { 
        AddTodo: text => dispatch(actionCreator.AddTodo(text)),
    }
}
export default connect(mapStateToProps, mapDispatchToPros)(Home);
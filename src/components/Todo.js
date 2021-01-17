import React from 'react';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';
import { connect } from 'react-redux';

const Todo = ({ text, id, DelTodo }) => {
    return (
    <>
        <li>
            <Link to={`/${id}`}>
                {text}
                <button onClick={DelTodo}>Delete</button>
            </Link>
        </li>
    </>
    );
}

function mapDispatchToPros(dispatch, ownProps){
    return { 
        DelTodo: () => dispatch(actionCreator.DelTodo(ownProps.id))
    }
}
export default connect(null, mapDispatchToPros)(Todo);
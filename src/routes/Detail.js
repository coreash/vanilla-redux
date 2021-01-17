import React from "react";
import { connect } from "react-redux";

const Detail = ({ todo }) => {
  console.log(todo);
  return (
    <>
      <p>{todo.text}</p>
      <span>Created at : {todo.id}</span>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    todo: state.find((todo) => todo.id === parseInt(id)),
  };
}
export default connect(mapStateToProps)(Detail);

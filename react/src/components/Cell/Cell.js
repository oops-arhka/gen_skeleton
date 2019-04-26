import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
});

function Cell({ content, header, onClick}) {
  const cellMarkup = header ? (
    <td className="Cell">
      {content}
    </td>
  ) : (
      <td className="Cell" onClick = {onClick}>
        {content}
      </td>
    );

  return (cellMarkup);
}
export default connect(mapStateToProps)(Cell);

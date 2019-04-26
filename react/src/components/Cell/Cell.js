import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
});

function Cell({
  content,
  header,
}) {

  const cellMarkup = header ? (
    <td className="Cell">
      {content}
    </td>
  ) : (
    <td className="Cell">
      {content}
    </td>
  );

  return (cellMarkup);
}
export default connect(mapStateToProps)(Cell);

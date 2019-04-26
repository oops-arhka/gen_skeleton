import React from "react";
import { connect } from "react-redux";
import Cell from "../Cell/Cell";
import "./DataTable.css";

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
});

class DataTable extends React.Component {
  
  handelClick = (row, cell ) => {    
    console.log(row, cell)
}

  renderRow = (_row, rowIndex) => {
    const { rows } = this.props;
    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
              onClick={()=>this.handelClick(cellIndex, rowIndex)}
            />
          );
        })}
      </tr>
    );
  };

  render() {
    const { headings, rows } = this.props;    
    this.renderRow = this.renderRow.bind(this);

    const tbodyMarkup = rows.map(this.renderRow);

    return (
      <table className="Table">
        <tbody>{tbodyMarkup}</tbody>
      </table>
    );
  }
}

export default connect(mapStateToProps)(DataTable);

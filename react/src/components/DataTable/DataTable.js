import React from "react";
import { connect } from "react-redux";
import Cell from "../Cell/Cell";
import "./DataTable.css";
import Question from "../Question/Question";
import { fetchQuestionsAC } from '../../reducers/actions/action'

const mapStateToProps = (state) => ({
  todos: state.questions
});

class DataTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      edit: false,
      input: "",
      answer: "",
      status: false,
    };
  }

  async componentWillMount() {   
     await this.props.fetchQuestions();
  }

  checkAnswer = async (event) => {
    event.preventDefault();
    (this.state.input == this.state.answer) ? this.setState({status: true}) : console.log('false');
}

  handleEdit = (event) => {
    event.preventDefault();
    this.setState({ edit: !this.state.edit })
  }

  updateInput = input => {
    this.setState({ input });
  };

  handelClick = async (column, row) => {
    console.log(row, column)
    let res = await fetch("/fetch", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ row: row, column: column }),
    }
    );
    let data = await res.json();
    console.log(data);
    this.setState({ value: data.answer, answer : data.trueAnswer, status: false })
  }

  renderRow = (_row, rowIndex) => {
    const { rows } = this.props;
    let value = this.state.value;
    return (
      <div>
        <tbody>
          <tr key={`row-${rowIndex}`}>
            {rows[rowIndex].map((_cell, cellIndex) => {
              return (
                <Cell
                  key={`${rowIndex}-${cellIndex}`}
                  content={rows[rowIndex][cellIndex]}
                  onClick={(e) => this.handelClick(cellIndex, rowIndex)}
                />
              );
            })}
          </tr>
        </tbody>
      </div>
    );
  };

  render() {
    const { headings, rows } = this.props;
    this.renderRow = this.renderRow.bind(this);
    const tbodyMarkup = rows.map(this.renderRow);

    return (
      <div>
        <table className="Table">
          <tbody>{tbodyMarkup}</tbody>
        </table>
        <div>{this.state.value && <Question question={this.state.value} />}
          {this.state.value && <form onSubmit={this.checkAnswer}>
            <label>
              <input type="text" name="TaskName" value={this.state.input} onChange={e => this.updateInput(e.target.value)} />
            </label>
            <button className='btnName' >
              Submit
            </button>
          </form>}</div>          
          <div>{this.state.status && this.state.answer}</div>
          <div>{this.state.status && "CORRECT"}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestionsAC()),    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataTable);

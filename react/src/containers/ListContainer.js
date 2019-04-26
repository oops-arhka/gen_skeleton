import React from "react";
import { connect } from "react-redux";
import DelTodo from "../components/DelTodo";
import EditTodo from "../components/EditTodo";
import Login from "../components/Login";

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
})

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Login />
                {this.props.todos.map((el, index) =>  <div key = {index}>{el.content} <DelTodo id={el.id}/> <EditTodo content = {el.content} id = {el.id}/></div> )}                
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(List)
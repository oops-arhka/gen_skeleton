import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
});

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <div>{this.props.question}</div>            
        );
    }
}

export default connect(mapStateToProps)(Question);

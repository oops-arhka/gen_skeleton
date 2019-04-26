import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
})

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>              
              |______|              
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Square)
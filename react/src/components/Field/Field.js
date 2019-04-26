import React from "react";
import { connect } from "react-redux";
import Square from "../Square/Square";

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
})

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                        </tr>
                        <tr>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                        </tr>
                        <tr>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                        </tr>
                        <tr>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                            <td><Square /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Field)
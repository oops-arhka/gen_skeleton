import React from "react";
import { connect } from "react-redux";
import { delTodoAC } from "../reducers/actions/action";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    sendFetch = async () => {
        let res = await fetch("/fetch", 
        
        
        );
        console.log('Sent waiting for respond');
        let data = await res.text();
        console.log(data);
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className='btnName' onClick={() => this.sendFetch()}>
                    Send Fetch
            </button>

            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delTodoMethod: (id) => dispatch(delTodoAC(id))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login);
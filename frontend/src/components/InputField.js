import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';


class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    submitItem = (event) => {
        if (event.key === 'Enter' && this.state.search !== "") {
            this.props.startAdd(this.state.search)
            this.setState({
                search: ''
            })
        }
    }

    inp = (event) => {
        this.setState({ search: event.target.value })
    }

    render() {
        return (
            <div className='row search'>
                <input placeholder="Add To-do and Press Enter" type="text" onChange={this.inp}
                    onKeyPress={this.submitItem}
                    value={this.state.search} />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    startAdd: (data) => {
        dispatch(action.startAdd(data))
    }
})

export default connect(null, mapDispatchToProps)(InputField);
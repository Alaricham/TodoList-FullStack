import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';

class Info extends Component {
    render() {
        const { completed, pending, total } = this.props.state
        return (<div className="row Info">
            <div className="col">
                <p>Completed: {completed}</p>
            </div>
            <div className="col">
                <p>Pending: {pending}</p>
            </div>
            <div className="col">
                <p>Total: {total}</p>
            </div>
            <div className="col">
                <select onChange={(event) => this.props.dispatch(action.filter(event.target.value))}>
                    <option value="Total">Total</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
        </div>)
    }
}

const mapStateToProps = state => { return { state } }
export default connect(mapStateToProps)(Info);

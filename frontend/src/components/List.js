import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';


class List extends Component {
    render() {
        let { state } = this.props;
        let list = state.items.filter(indexes => {
            if (state.filter === "Completed") {
                return indexes.completed === true
            } else if (state.filter === "Pending") {
                return indexes.completed === false
            } else {
                return indexes
            }
        });
        let newList = list.map(item => {
            return (<React.Fragment key={item.id}>
                <li onClick={(event) => this.props.startCheck(item)} className={item.completed ? "crossed" : ""}>
                    <p className="text">{item.description}</p>
                    <i className={item.completed ? "fas fa-check" : " fas fa-check disabled"}></i>
                </li>
                < i onClick={(event) => { this.props.startRemove(item.id) }
                } className="fas fa-trash-alt removal" ></i>
            </React.Fragment>
            )
        });
        return (<div className="List"><ul>
            {newList}
        </ul>
            <button onClick={() => this.props.startClear(this.props.state.items)} disabled={this.props.completed === 0 ? true : false}>Clear</button>
        </div>)
    }
}

const mapStateToProps = state => { return { state } }
const mapDispatchToProps = dispatch => {
    return ({
        startClear: items => {
            dispatch(action.startClear(items))
        },
        startRemove: id => {
            dispatch(action.startRemove(id))
        },
        startCheck: item => {
            dispatch(action.startCheck(item))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
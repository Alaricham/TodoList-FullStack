import React, { Component } from 'react';
import '../App.css';
import Header from "./Header";
import List from "./List";
import InputField from "./InputField";
import Info from "./Info";
import { startGet } from '../actions/actions';
import { connect } from 'react-redux';
console.log(process.env)

class App extends Component {

    componentDidMount() {
        this.props.startGet()
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Info />
                <InputField />
                <List />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        startGet: () => {
            dispatch(startGet())
        }
    })
}

export default connect(null, mapDispatchToProps)(App);


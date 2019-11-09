import React from 'react';
import logo from './logo.svg';
import './App.css';
import { addOne } from './redux/actions';
import { connect } from 'react-redux';


class App extends React.Component {

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        <button onClick={this.props.addOne}>Add one</button>
                    </p>

                    {this.props.addStore.value}

                </header>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    addStore: state.addStore,
});

const mapDispatchToProps = {
    addOne,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
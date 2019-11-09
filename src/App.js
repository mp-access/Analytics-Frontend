import React from 'react';
import './App.css';
import { addOne } from './redux/actions';
import { connect } from 'react-redux';


class App extends React.Component {

    render() {

        return (
            <main className="container-fluid">
                <div id="content">
                    <div className="container">
                        <p>
                            <button onClick={this.props.addOne}>Add one</button>
                        </p>

                        {this.props.addStore.value}
                    </div>
                </div>
            </main>
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
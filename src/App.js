import React, { useEffect } from 'react';
import './App.css';
import { fetchCourses, fetchDistribution } from './redux/actions';
import { connect } from 'react-redux';
import PieChart from './components/PieChart';


const App = (props) => {
    const { isLoading, metrics, fetchCourses, fetchDistribution } = props;

    useEffect(() => {
        if (!isLoading) {
            fetchCourses();
            fetchDistribution();
        }
    }, [isLoading, fetchCourses, fetchDistribution]);

    return (
        <main className="container-fluid">
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{ height: '500px' }}>
                                <PieChart data={metrics.distributions}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const mapStateToProps = state => ({
    metrics: state.metrics,
});

const mapDispatchToProps = {
    fetchCourses,
    fetchDistribution,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
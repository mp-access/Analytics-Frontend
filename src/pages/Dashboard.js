import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchCourses, fetchDistribution } from '../redux/actions';
import { connect } from 'react-redux';
import PieChart from '../components/PieChart';
import Spinner from '../components/Spinner';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedAssignment: null,
        };
    }

    componentDidMount() {
        const { fetchCourses } = this.props;
        fetchCourses();
    }

    onAssignmentSelected = (event) => {
        const assignmentId = event.target.value;

        const { courses } = this.props;

        const assignments = courses.courses.flatMap(course => course.assignments);
        const selectedAssignment = assignments.find(assignment => assignment.id === assignmentId);

        this.setState({
            selectedAssignment,
        });
    };

    renderAssignmentSelect() {
        const { courses } = this.props;
        if (courses.courses) {
            return (
                <select onChange={this.onAssignmentSelected}>
                    <option>---</option>
                    {courses.courses.map(course => {
                        const assignments = course.assignments;
                        return (
                            <optgroup label={course.title} key={course.id}>
                                {assignments.map(assignment => <option key={assignment.id}
                                                                       value={assignment.id}>{assignment.title}</option>)}
                            </optgroup>
                        );
                    })}
                </select>
            );
        }
    }

    onExerciseSelected = (event) => {
        const exerciseId = event.target.value;
        const { selectedAssignment } = this.state;

        const selectedExercise = selectedAssignment.exercises.find(exercise => exercise.id === exerciseId);
        if (selectedExercise) {
            this.props.fetchDistribution(exerciseId);

            this.setState({
                selectedExercise,
            });
        }

    };

    renderExerciseSelect() {
        const { selectedAssignment } = this.state;
        if (!selectedAssignment) return;

        const { exercises } = selectedAssignment;

        return (
            <select onChange={this.onExerciseSelected}>
                <option>---</option>
                {exercises.map(exercise => <option key={exercise.id} value={exercise.id}>{exercise.title}</option>)}
            </select>
        );
    }

    render() {
        const { metrics } = this.props;
        const { selectedAssignment, selectedExercise } = this.state;

        return (
            <main className="container-fluid">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className={'row'}>
                                    <div className={'col-md-2'}>
                                        {selectedAssignment && <p>{selectedAssignment.title}</p>}
                                    </div>
                                    <div className={'col-md-2'}>
                                        {selectedExercise && <p>{selectedExercise.title}</p>}
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-md-2'}>
                                        {this.renderAssignmentSelect()}
                                    </div>
                                    <div className={'col-md-2'}>
                                        {this.renderExerciseSelect()}
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-md-3'}>
                                        <p>Maximum score for exercise: {metrics.maxScore}</p>
                                        <p>Total submissions: {metrics.totalSubmissions}</p>
                                        <p>Total graded submissions: {metrics.gradedSubmissions}</p>
                                        <p>How many users submitted: {metrics.usersSubmitted}</p>
                                    </div>
                                    <div className={'col-md-9'}>
                                        {metrics.isLoading ? <Spinner/> : <PieChart data={metrics.distributions}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    metrics: state.metrics,
    courses: state.courses,
});

const mapDispatchToProps = {
    fetchCourses,
    fetchDistribution,
};

Dashboard.propTypes = {
    metrics: PropTypes.object.isRequired,
    courses: PropTypes.object.isRequired,

    fetchCourses: PropTypes.func.isRequired,
    fetchDistribution: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
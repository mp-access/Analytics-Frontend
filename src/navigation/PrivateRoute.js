import React from 'react';
import Spinner from '../components/Spinner';
import { initAuth } from '../redux/actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ auth, initAuth, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (auth.keycloak) {
                if (!auth.isAuthenticated) {
                    return;
                }

                return <Component {...props} />;
            } else {
                initAuth();
                return <div className="loading-box"><Spinner text={'Loading...'}/></div>;
            }
        }
        }
    />
);

const mapDispatchToProps = {
    initAuth,
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

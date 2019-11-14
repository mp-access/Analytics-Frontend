import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppNavigation from './navigation/AppNavigation';


const App = () => {

    return (
        <BrowserRouter>
            <AppNavigation/>
        </BrowserRouter>
    );
};


export default App;
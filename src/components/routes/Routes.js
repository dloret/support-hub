import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Catalog} from '../catalog/Catalog';

export const Routes = (props) => (
    <Router>
        <div className='container'>
            {props.children}
            <Route path={`/${props.selectedMenu}`} component={Catalog} />
        </div>
    </Router>
);
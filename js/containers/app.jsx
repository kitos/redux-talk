import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const App = ({ count, onIncrement }) => (
    <div>
        <p>Count: {count}</p>
        <button onClick={onIncrement}>Increment</button>
    </div>
);

export default connect(
    ({ counter }) => ({ count: counter }),
    dispatch => bindActionCreators({
        onIncrement: () => ({ type: 'increment' })
    }, dispatch)
)(App);

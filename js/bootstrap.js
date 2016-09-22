import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './containers/app';
import DevTools from './containers/dev-tools';

const store = configureStore();

const app = () => (
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>
)

document.addEventListener('DOMContentLoaded',
    () => render(
        React.createElement(app),
        document.getElementById('redux-example')
    )
);

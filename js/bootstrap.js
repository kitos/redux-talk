import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './components/App';
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
    () => {
        const root = document.getElementById('redux-example');
        render(React.createElement(app), root.createShadowRoot());
    }
);

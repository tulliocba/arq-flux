import React from 'react';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import store from './store';
import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <ToastContainer autoClose={3000} />
                <GlobalStyle />
                <Header />
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;

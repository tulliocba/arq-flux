import React from 'react';
import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer autoClose={3000} />
                <GlobalStyle />
                <Header />
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;

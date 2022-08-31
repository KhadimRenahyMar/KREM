import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import './styles/_reset.css';
import './styles/index.scss';
import App from './components/App/App';

const rootReactElement = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const target = document.getElementById('root');

render(rootReactElement, target);
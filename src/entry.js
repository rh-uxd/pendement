import { render } from 'react-dom';
import './app.css';
import '@patternfly/react-core/dist/styles/base.css';
import { App } from './app.js'
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

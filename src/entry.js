import { segment } from './segment';
import { render } from 'react-dom'; 
import './app.css';
import '@patternfly/react-core/dist/styles/base.css';
import { App } from './app.js'
import { BrowserRouter } from 'react-router-dom';

segment();
if (process.env.NODE_ENV !== 'production') {
  sessionStorage.setItem('username', 'test');
}

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

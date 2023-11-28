import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazyload';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// styles
import '../styles/main.css';
import '../styles/responsive.css';

// components
import './components/app-bar';
import './components/app-hero';
import './components/app-footer';

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

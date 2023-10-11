import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';

// styles
import '../styles/main.css';
import '../styles/responsive.css';

// components
import './components/app-bar';
import './components/app-hero';
import './components/app-explorer';
import './components/app-footer';

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#content'),
});

// const contentSection = document.getElementById('content');
// const contentElementItem = new AppExplorer();
// contentSection.appendChild(contentElementItem);

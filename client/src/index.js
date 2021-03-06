import React from 'react';
import { render } from 'react-dom';
import "./style.css"
import { App } from './components/App';

window.React = React;

render(
	<App />,
  document.getElementById('reactTarget')
)

// Check for browser support of service worker
if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./service-worker.js')
 .then(function(registration) {
   // Successful registration
   console.log('Hooray. Registration successful, scope is:', registration.scope);

 }).catch(function(err) {
   // Failed registration, service worker won’t be installed
   console.log('Whoops. Service worker registration failed, error:', err);
    

 });
}

document.addEventListener('scroll', function (event) {
    if (document.body.scrollHeight ===
        document.body.scrollTop +        
        window.innerHeight) {
        
    }
});
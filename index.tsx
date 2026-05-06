import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Recover redirect target written by public/404.html on static hosts that don't support SPA fallback.
(function recoverSpaRedirect() {
  const params = new URLSearchParams(window.location.search);
  const target = params.get('p');
  if (target) {
    params.delete('p');
    const query = params.toString();
    window.history.replaceState(
      {},
      '',
      target + (query ? `?${query}` : '')
    );
  }
})();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, options) => {
  const history =
    options?.defaultHistory ||
    createMemoryHistory(
      options?.initialPath
        ? {
            initialEntries: [options.initialPath],
          }
        : undefined
    );

  if (options?.onNavigate) {
    const { onNavigate } = options;
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignin={options?.onSignin} history={history} />, el);

  return {
    onContainerNavigate: ({ pathname }) => {
      const { location } = history;

      if (location.pathname === pathname) return;

      history.push(pathname);
    },
  };
};

// DEVELOPMENT
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('_auth-dev-root');

  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export default mount;

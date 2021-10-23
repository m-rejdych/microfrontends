import React, { useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import mount from 'auth/AuthApp';

const AuthApp = ({ onSignin }) => {
  const ref = useRef(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      onNavigate: ({ pathname }) => {
        if (location.pathname === pathname) return;

        history.push(pathname);
      },
      onSignin,
      initialPath: location.pathname,
    });

    history.listen(onContainerNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;

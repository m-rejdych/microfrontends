import React, { useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import mount from 'marketing/MarketingApp';

const MarketingApp = () => {
  const history = useHistory();
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      onNavigate: ({ pathname }) => {
        if (location.pathname === pathname) return;

        history.push(pathname);
      },
      initialPath: location.pathname,
    });

    history.listen(onContainerNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;

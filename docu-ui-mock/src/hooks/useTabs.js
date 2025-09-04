import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useTabs = (defaultTabIndex = 0) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  const handleTabIndex = (newIndex) => {
    const newParams = new URLSearchParams();
    newParams.set('tabIndex', newIndex);
    navigate({ search: newParams.toString() }, { replace: true });
    setTabIndex(newIndex);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newTabIndex = queryParams.get('tabIndex');

    if (!isNaN(newTabIndex)) {
      setTabIndex(Number(newTabIndex));
    }
  }, [location?.search]);

  return { tabIndex, setTabIndex: handleTabIndex };
};

export default useTabs;

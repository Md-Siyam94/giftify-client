import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { div } from 'framer-motion/client';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const [dataLoading, setDataLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    //  data fetch
    if (user && user?.email) {
      setTimeout(() => {
        setDataLoading(false);
      }, 200);
    } else {
      setDataLoading(false);
    }
  }, [user]);

  console.log(location);

  if (loading || dataLoading) {
    return <LoadingSpinner />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/signIn"} />;
};

export default PrivateRoute;
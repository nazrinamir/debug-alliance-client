// hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (isAuthenticated) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, navigate]);
};

export default useAuth;

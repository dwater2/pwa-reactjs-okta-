import { useOktaAuth } from '@okta/okta-react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Carregando...</div>;
  }

  return authState.isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
import { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

function Login() {
  const { oktaAuth, authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate('/');
    }
  }, [authState, navigate]);

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-slate-900">Bem-vindo</h2>
          <p className="mt-2 text-sm text-slate-600">
            Faça login para acessar sua conta
          </p>
        </div>

        <button
          onClick={login}
          className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
        >
          Entrar com Okta Verify
        </button>
      </div>
    </div>
  );
}

export default Login;
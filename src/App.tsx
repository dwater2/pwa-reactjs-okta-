import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import { oktaConfig } from './config';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
  return (
    <Router>
      <Security oktaAuth={oktaAuth}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Security>
    </Router>
  );
}

export default App;
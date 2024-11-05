export const oktaConfig = {
  clientId: 'SEU_CLIENT_ID',
  issuer: 'https://SEU_DOMINIO.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};
export const environment = {
  production: true
};

export const mercedesAuth = {
  responseType: "code",
  clientId: '1fb8f752-36cb-4d23-a8ca-6ee1e3e8b711',
  clientSecret: '654f423d-901e-4ba3-9caa-6ee9591f019a',
  redirectUri: 'http://localhost:8080',
  scopes: 'mb:vehicle:status:general mb:user:pool:reader',
  accessTokenUri: 'https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/token',
  authorizationUri: 'https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize',
  apiEndpointURL: 'https://api.mercedes-benz.com/experimental/connectedvehicle/v1',
  corsProxyEndpoindURL: 'https://cors-anywhere.herokuapp.com'
};
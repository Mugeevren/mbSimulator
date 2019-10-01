// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

var ClientOAuth2 = require('client-oauth2')
 
export const mercedesAuth = new ClientOAuth2({
  responseType: "code",
  clientId: '1fb8f752-36cb-4d23-a8ca-6ee1e3e8b711',
  clientSecret: '654f423d-901e-4ba3-9caa-6ee9591f019a',
  redirectUri: 'http://localhost:9000',
  scopes: ['mb:vehicle:status:general', 'mb:user:pool:reader'],
  accessTokenUri: 'https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/token',
  authorizationUri: 'https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize'
})

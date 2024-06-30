// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCw6sg5qRAdHEwjutbr6jNVu5reaqzwpbk",
    authDomain: "moppent-app-er.firebaseapp.com",
    projectId: "moppent-app-er",
    storageBucket: "moppent-app-er.appspot.com",
    messagingSenderId: "1051797264040",
    appId: "1:1051797264040:web:3f1ae7111b4b40565ad49d",
    appCheck: {
      recaptcha3SiteKey: "6Lc1vQQqAAAAACuWkBRSu-sdNDXj7EHXTGb8mkQ3",
      isTokenAutoRefreshEnabled: true,
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

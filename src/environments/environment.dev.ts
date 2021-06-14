// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase : {
    config: {
      apiKey: "AIzaSyCrz2iyPAh-pkeFRcZJ4MeJYmSpEgiLVjA",
      authDomain: "courseapp-37f8f.firebaseapp.com",
      projectId: "courseapp-37f8f",
      storageBucket: "courseapp-37f8f.appspot.com",
      messagingSenderId: "113567239697",
      appId: "1:113567239697:web:df2ac96763e295f1116bb0"
    }

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

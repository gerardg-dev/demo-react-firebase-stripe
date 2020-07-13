"use strict";
// cant be wrtten in the frontend
// write just for internal purposes only in the backend
//
// match /accounts/{id} {
//   allow read, write: if false;
// }
//
// -----------------------------------------------------------------------------
//
// a user writes its own data, perhaps personal info
// I.E.: password, email address, phone number
//
// match /users/{id} {
//   allow read, write: if id == request.auth.uid;
// }
//
// -----------------------------------------------------------------------------
//
// can only be written by user who owns this data
// but is public and can be read by any other user in our app
// I.E.: usernames, avatars, profile pic
//
// match /profiles/{id} {
//   allow read;
//   allow write: if id == request.auth.uid;
// }
//
// -----------------------------------------------------------------------------
//
// rules.json
//
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//
//     match /accounts/{id} {
//       allow read, write: if false;
//     }
//
//     match /users/{id} {
//       allow read, write: if id == request.auth.uid;
//     }
//
//     match /profiles/{id} {
//       allow read;
//       allow write: if id == request.auth.uid;
//     }
//
//   }
// }
//# sourceMappingURL=security.js.map
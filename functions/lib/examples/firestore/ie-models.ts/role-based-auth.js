"use strict";
// match /posts/{document} {
//
//     function getRoles() {
//         return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.roles;
//     }
//
//     allow read;
//     allow update: if getRoles().hasAny(['admin', 'editor']) == true;
//     allow write: if getRoles().hasAny(['admin']) == true;
// }
//# sourceMappingURL=role-based-auth.js.map
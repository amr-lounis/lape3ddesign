// import { doc, setDoc } from "@firebase/firestore";

// import { serverTimestamp } from "firebase/firestore";

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth, db } from "./fbInit";

// export const MySignIn = async (email: string, password: string) => {
//   console.log("Email:", email);
//   console.log("Password:", password);
//   //
//   await signInWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       console.log("loggedIn");
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
// export const MySignOut = async () => {
//   await signOut(auth).then(() => {
//     console.log("signOut");
//   });
// };

// export const MyCurrentUser = () => {
//   console.log("displayName : ", auth.currentUser.displayName);
//   console.log("uid : ", auth.currentUser.uid);
// };

// export const MySignUp = (username, email, password) => {
//   console.log("Username:", username);
//   console.log("Email:", email);
//   console.log("Password:", password);
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(async (v) => {
//       console.log(v.user.uid);
//       await updateProfile(auth.currentUser, { displayName: username });
//       saveUser("users", v.user.uid, {
//         username: username,
//         email: "",
//         password: "",
//         roles: [],
//         createdAt: serverTimestamp(),
//         updateAt: serverTimestamp(),
//       });
//       saveUser("usersHiden", v.user.uid, {
//         username: username,
//         email: email,
//         password: btoa(password),
//         roles: [],
//         createdAt: serverTimestamp(),
//         updateAt: serverTimestamp(),
//       });
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

// async function saveUser(collectionName, uid, user) {
//   await setDoc(doc(db, collectionName, uid), user).catch((error) => {
//     console.log(error.message);
//     auth.currentUser
//       .delete()
//       .then(() => {
//         console.log("User deleted successfully");
//       })
//       .catch(function (error) {
//         console.error("Error deleting user:", error.message);
//       });
//   });
// }

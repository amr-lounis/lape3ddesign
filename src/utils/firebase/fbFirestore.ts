// import {
//   addDoc,
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   setDoc,
//   query,
//   where,
//   onSnapshot,
// } from "@firebase/firestore";

// import { db } from "./fbInit";

// export const MyAddDoc = (collectionName, objectData) => {
//   const docRef = addDoc(collection(db, collectionName), objectData);
//   console.log(docRef);
// };
// // ------------------------------
// export const MySetDoc = (collectionName, docId, objectData) => {
//   setDoc(doc(db, collectionName, docId), objectData);
// };
// // ------------------------------
// export const MyGetDoc = (collectionName, docId) => {
//   getDoc(doc(db, collectionName, docId)).then((a) => {
//     if (a.exists()) {
//       console.log(a);
//     } else {
//       console.log("error");
//     }
//   });
// };
// // ------------------------------
// export const MyGetDocs = (collectionName) => {
//   getDocs(collection(db, collectionName)).then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//     });
//   });
// };
// // ------------------------------
// export const MyGetQuiryDocs = (collectionName) => {
//   const q = query(collection(db, collectionName), where("id", "<", 10));
//   getDocs(q).then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//     });
//   });
// };
// // ------------------------------
// export const InitSnapshot = (collectionName) => {
//   const q = query(collection(db, collectionName), where("id", "<", 10));
//   onSnapshot(
//     q,
//     (snap) => {
//       snap.forEach((doc) => {
//         console.log(doc);
//       });
//     },
//     (error) => {
//       console.log("firebase : onSnapshot :", error.message);
//     }
//   );
// };

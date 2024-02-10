import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {  getDoc } from "firebase/firestore";
import { doc, setDoc,where,query,addDoc } from "firebase/firestore";
import { getStorage, ref,uploadBytes ,getDownloadURL ,} from "firebase/storage";

import { getAuth,sendPasswordResetEmail, createUserWithEmailAndPassword,signOut , signInWithEmailAndPassword } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyB9nplk1w_Us4tXTSUsrkFnHObxxsVUSL8",
  authDomain: "olx-clone-d6899.firebaseapp.com",
  projectId: "olx-clone-d6899",
  storageBucket: "olx-clone-d6899.appspot.com",
  messagingSenderId: "207249975973",
  appId: "1:207249975973:web:10dbe97715c5ce3ee7fb4c",
  measurementId: "G-PJWE3MSH6S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

const storage = getStorage();


 async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "ads"));
  const products = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    products.push({ id: doc.id, ...doc.data() })
  })

  return products
}

async function getSingleProduct(adId) {
  const docRef = doc(db, "ads", adId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  return docSnap.data()

}

async function getUsers(adId) {
  console.log(adId)
  const docRef = doc(db, "users", adId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  return docSnap.data()
}

async function signupUser(fullName,email,password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, "users", userCredential.user.uid), {
      name: fullName,
      email: email,
    });

    alert('Account Registered')
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error creating user:', errorMessage);
    alert(errorMessage); // Display error message to the user
    throw error;
}
    
}

async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}
async function postAdToDb(ad) {
  try {
    // Step 1: Upload images to Storage
    var images = [];
    const imageUrls = await Promise.all(ad.image.map(async (image) => {
      const storageRef = ref(storage, `ads/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);
      images.push(imageUrl); 
      return images;
    }));

    // Step 2: Update ad object with image URLs
    ad.image = images;

    // Step 3: Add data with URLs to the database
    await addDoc(collection(db, "ads"), ad);

    alert('Data added successfully!');
  } catch (error) {
    console.error(error);

    if (error.code === 'storage/unauthorized') {
      alert('Storage unauthorized access error. Check your Firebase Storage rules.');
    } else {
      alert(`Error: ${error.message}`);
    }
  }
}
async function myAdd(uid) {
  const q = query(collection(db, "ads"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  // Extract data from the query snapshot
  const ads = [];
  querySnapshot.forEach((doc) => {

    const ad = doc.data()
    ad.id = doc.id

    ads.push(ad)
  });

  return ads;
}

function signout(){
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}
async function ForgetPassword(email) {
 await sendPasswordResetEmail(auth, email[0].value)
    .then(() => {
      // Password reset email sent!
      // Handle success, e.g., show a success message to the user
      console.log("Password reset email sent successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle error, e.g., show an error message to the user
      console.error("Error sending password reset email: ", errorMessage);
    });
    console.log(email[0].value);
}

async function category(inputValue) {
  const adsRef = collection(db, "ads")
  const querySnapshot = await getDocs(query(adsRef, where("category", "==", inputValue)))
  const ads = []
  querySnapshot.forEach((doc) => {
      const ad = doc.data()
      ad.id = doc.id

      ads.push(ad)
  });

  return ads
}

export{
  category,
  ForgetPassword,
  myAdd,
  signout,

  loginUser,
  postAdToDb,
  signupUser,
  getUsers,
  getSingleProduct,
  getAllProducts
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb83tC4_cpNyoG9CZLSTyaTDaWX02zGMI",
  authDomain: "williams-septic.firebaseapp.com",
  projectId: "williams-septic",
  storageBucket: "williams-septic.appspot.com",
  messagingSenderId: "78101630927",
  appId: "1:78101630927:web:dc69534998eccdba07ccba",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const db = getDatabase(fireBaseApp);

export const onSubscribeButtonClick = (event: any) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const emailInput = document.getElementById(
    "newsLetterEmail"
  ) as HTMLInputElement;
  let data;
  if (emailInput) {
    const emails = emailInput.value;
    data = {
      emails,
    };
    console.log(data);
  } else {
    console.error("Element with ID 'newsLetterEmail' not found");
    return;
  }

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Newsletter Email/");

  // Write data to this reference
  set(userRef, data)
    .then(() => {
      // alert("Email submitted successfully!");
      console.log("Email submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting Email: ", error);
      alert("Error submitting email: " + error.message);
    });

  event.target.reset();
};

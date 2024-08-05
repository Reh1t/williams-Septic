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
  appId: "1:78101630927:web:dc69534998eccdba07ccba"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const db = getDatabase(fireBaseApp);

// handleForm.js
export const handleFormSubmit = (event: any) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const firstNameInput = document.getElementById(
    "first_name"
  ) as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const projectDetailsInput = document.getElementById(
    "project_details"
  ) as HTMLTextAreaElement;

  const name = firstNameInput.value;
  const email = emailInput.value;
  const project_details = projectDetailsInput.value;

  const data = {
    name,
    email,
    project_details,
  };
  console.log(data);

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Contact us Form/" + name);

  // Write data to this reference
  set(userRef, data)
    .then(() => {
      console.log("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting form: ", error);
      alert("Error submitting form: " + error.message);
    });

  event.target.reset();
};

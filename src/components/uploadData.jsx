// CreateCollection.js
import React from "react";
import { db } from "../firebaseConfig"; // Firestore instance
import { collection, doc, setDoc } from "firebase/firestore"; // Firestore methods
import Bodyweightexcersices from "./bodyweightjson"; // Import JSON data

const CreateCollection = () => {
  const createCollection = async () => {
    try {
      // Set up a single collection reference
      const collectionRef = collection(db, "bodyweightexercises");

      // Loop over each object in the imported JSON array to add as a document
      for (const docData of Bodyweightexcersices) {
        const newDocRef = doc(collectionRef); // Generate a unique ID for each document

        // Add the document to Firestore with the specified fields, including collection
        await setDoc(newDocRef, {
          collection: docData.collection,
          name: docData.name,
          short_description: docData.short_description,
          image: docData.image,
          instruction: docData.instruction,
        });
        console.log(`Document added: ${docData.name}`);
      }

      alert("All documents added successfully!");
    } catch (error) {
      console.error("Error adding documents:", error);
      alert("Failed to add documents.");
    }
  };

  return (
    <div className="pt-[8rem]">
      <h2>Create Collection from JSON</h2>
      <button onClick={createCollection}>Create Collection</button>
    </div>
  );
};

export default CreateCollection;

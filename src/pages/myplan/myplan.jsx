import React from "react";
import { MdBookmarkBorder, MdPlayCircleOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";

const Myplan = () => {
  const myPlan = useSelector((state) => state.myPlanPage.myPlan); // Accessing myPlan correctly
  console.log(myPlan);

 return (
  <React.Fragment>
  <Navbar />

   <div className="relative w-72 h-44 bg-darkBackground rounded-lg overflow-hidden shadow-lg">
     {/* Image */}
     <div className="relative h-28 w-full">
       <img
         className="w-full h-full object-cover"
         src="https://via.placeholder.com/300x150" // Replace with the actual image URL
         alt="Upper Body HIIT"
       />
     </div>

     {/* Duration Badge */}
     <div className="absolute top-2 left-2 bg-accent rounded-full px-2 py-1 text-xs font-semibold text-white">
       n sets
     </div>


     {/* Content */}
     <div className="p-3">
       <h3 className="text-white font-semibold">Upper Body HIIT</h3>
       <p className="text-accentText text-sm">Strength · Intermediate</p>
     </div>
   </div>
  </React.Fragment>
 );
};

export default Myplan;

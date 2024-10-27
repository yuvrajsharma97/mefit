import React from "react";
import { MdBookmarkBorder, MdPlayCircleOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import DataUploader from "../../components/uploadData";

const Myplan = () => {
  const myPlan = useSelector((state) => state.myPlanPage.myPlan); // Accessing myPlan correctly
  console.log(myPlan);

 return (
   <React.Fragment>
     <Navbar />

     <div className="relative w-72 h-44 bg-darkBackground rounded-lg overflow-hidden shadow-lg">
       <DataUploader />
     </div>
   </React.Fragment>
 );
};

export default Myplan;
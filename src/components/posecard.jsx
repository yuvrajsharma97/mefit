import React, { useState, useEffect } from "react";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { checkAndCreateCollection } from "../features/myPlan/myCuratedPlanSlice"; // Import the action
import AuthModal from "./authmodal";
import { useAuth } from "../context/authContext"; // Import the auth context

const PoseCard = ({ pose, poseId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sets, setSets] = useState(1);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isUserLoggedIn } = useAuth(); // Access user details from context

  const dispatch = useDispatch();
  const { status, created, error } = useSelector(
    (state) => state.myCuratedPlan
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const incrementSets = () => setSets(sets + 1);
  const decrementSets = () => setSets(sets > 1 ? sets - 1 : 1);

  const handleAddButton = () => {
    if (!isUserLoggedIn) {
      setAuthModalOpen(true); // Open the auth modal if the user is not logged in
      console.log("User not logged in");
    } else {
      console.log("User logged in");

      const newPlan = {
        collection: "myCuratedPlan",
        id: pose.id,
        noOfSets: sets,
        image: pose.image,
        instruction: pose.instruction,
        name: pose.name,
        short_description: pose.short_description,
      };

      dispatch(
        checkAndCreateCollection({
          userId: isUserLoggedIn.uid,
          newPlan,
        })
      );

      closeModal();
    }
  };

  useEffect(() => {
    if (status === "succeeded") {
      console.log(
        created
          ? "Collection created and plan added"
          : "Plan added to existing collection"
      );
    } else if (status === "failed") {
      console.error("Error:", error);
    }
  }, [status, created, error]);

  return (
    <div className="flex flex-row flex-wrap">
      <div
        className="relative w-36 overflow-hidden shadow-lg cursor-pointer m-2 md:m-[3rem]"
        onClick={openModal}>
        {/* Image Section */}
        <div className="relative h-32">
          <img
            className="w-full h-full object-cover rounded-md"
            src={pose.image}
            alt={pose.name}
          />
        </div>

        <div className="absolute top-2 left-2 bg-accent rounded-full px-2 py-1 text-xs font-semibold text-white">
          {sets} sets
        </div>

        <div className="p-3">
          <h3 className="text-white font-semibold">{pose.name}</h3>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box relative bg-glassLight backdrop-blur-lg border border-glassBorder text-white max-w-lg mx-auto">
              <button
                className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent hover:bg-primary text-white"
                onClick={closeModal}>
                <MdClose size={24} />
              </button>
              <h3 className="text-lg font-bold text-accent">{pose.name}</h3>
              <div
                className="h-96 rounded bg-center mb-4"
                style={{ backgroundImage: `url(${pose.image})` }}></div>
              <p className="py-4 text-accentText">{pose.short_description}</p>
              <details className="group">
                <summary className="cursor-pointer text-accent">
                  Show Instructions
                </summary>
                <p className="my-2 text-sm text-accentText">
                  {pose.instruction}
                </p>
              </details>
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-4">
                  <button
                    className="btn btn-primary btn-sm bg-primary border-0 hover:bg-accent text-white"
                    onClick={decrementSets}>
                    <MdRemove size={24} />
                  </button>
                  <span className="text-lg">{sets} Sets</span>
                  <button
                    className="btn btn-primary btn-sm bg-primary border-0 hover:bg-accent text-white"
                    onClick={incrementSets}>
                    <MdAdd size={24} />
                  </button>
                </div>
                <button
                  onClick={handleAddButton}
                  className="btn btn-primary btn-sm bg-primary border-0 w-2/6 hover:bg-accent text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

export default PoseCard;

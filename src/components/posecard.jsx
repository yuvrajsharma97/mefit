import React, { useState } from "react";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";

const PoseCard = ({ pose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sets, setSets] = useState(1); // State to track the number of sets

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  // Function to increment or decrement the number of sets
  const incrementSets = () => setSets(sets + 1);
  const decrementSets = () => setSets(sets > 1 ? sets - 1 : 1);

  return (
    <div>
      {/* Card Component */}
      <div
        className="relative bg-custom-radial w-full h-24 sm:h-20 lg:h-32 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        onClick={openModal}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h2 className="text-xl font-semibold text-white my-10">
            {pose.name}
          </h2>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box relative bg-glassLight backdrop-blur-lg border border-glassBorder text-white">
            {/* Close Button */}
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent hover:bg-primary text-white"
              onClick={closeModal}>
              <MdClose size={24} />
            </button>

            {/* Pose Name */}
            <h3 className="text-lg font-bold text-accent">{pose.name}</h3>

            {/* Pose Image */}
            <div
              className="h-96 rounded bg-cover mb-4"
              style={{ backgroundImage: `url(${pose.image})` }}></div>

            {/* Pose Short Description */}
            <p className="py-4 text-accentText">{pose.short_description}</p>

            {/* Pose Instructions */}
            <details className="group">
              <summary className="cursor-pointer text-accent">
                Show Instructions
              </summary>
              <p className="my-2 text-sm text-accentText">{pose.instruction}</p>
            </details>

            {/* Sets Counter */}
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <button
                  className="btn btn-primary btn-sm bg-primary border-0 hover:bg-accent text-white"
                  onClick={decrementSets}>
                  <MdRemove size={24} /> {/* Minus icon */}
                </button>
                <span className="text-lg">{sets} Sets</span>
                <button
                  className="btn btn-primary btn-sm bg-primary border-0 hover:bg-accent text-white"
                  onClick={incrementSets}>
                  <MdAdd size={24} /> {/* Plus icon */}
                </button>
              </div>
              <button className="btn btn-primary btn-sm bg-primary border-0 w-2/6 hover:bg-accent text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoseCard;

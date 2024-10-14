import React from "react";
import Navbar from "../../components/navbar";
import { useSelector } from "react-redux";
import { AnimatedCounter } from "react-animated-counter";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25,
    location: "New York, USA",
    profilePic: "https://images.unsplash.com/photo-1557683316-973673baf926",
    weeklyStreak: 12,
    monthlyStreak: 30,
    yearlyStreak: 365,
    currentWeight: 75,
    goalWeight: 70,
    totalWorkouts: 50,
    caloriesBurnt: 5000,
  };

  // Inline StreakCard component
  const StreakCard = ({ title, count }) => {
    return (
      <div className="bg-glassLight p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-xl text-accent font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-center">
          <h4 className="text-4xl font-bold">
            {" "}
            <AnimatedCounter
              value={count}
              color="white"
              fontSize="25px"
              includeDecimals={false}
            />
          </h4>
          <p className="ml-2 text-sm font-medium">days</p>
        </div>
      </div>
    );
  };

  // Inline WeightCard component
  const WeightCard = ({ currentWeight, goalWeight }) => {
    return (
      <div className="bg-glassLight p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-semibold text-accent mb-2">
          Weight Progress
        </h3>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <h4 className="text-2xl font-bold">
              <span className="inline-flex items-center">
                <AnimatedCounter
                  value={currentWeight}
                  color="white"
                  fontSize="25px"
                  includeDecimals={false}
                />{" "}
                &nbsp; kg
              </span>
            </h4>

            <p className="text-sm text-accentText">Current</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold">
              <span className="inline-flex items-center">
                <AnimatedCounter
                  value={goalWeight}
                  color="white"
                  fontSize="25px"
                  includeDecimals={false}
                />{" "}
                &nbsp; kg
              </span>
            </h4>

            <p className="text-sm text-accentText">Goal</p>
          </div>
        </div>
        <div className="w-full bg-glassLight h-2 mt-4 rounded">
          <div
            className="bg-accent h-2 rounded"
            style={{ width: `${(currentWeight / goalWeight) * 50}%` }}></div>
        </div>
      </div>
    );
  };

  // Inline ActivityCard component
  const ActivityCard = ({ title, value }) => {
    return (
      <div className="bg-glassLight p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-semibold text-accent mb-2">{title}</h3>
        <div className="flex items-center justify-center">
          <h4 className="text-3xl font-bold">{value}</h4>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-bgDarkest text-accentText py-8 md:py-16">
      {/* Navbar */}
      <Navbar />

      {/* Profile Header */}
      <div className="w-11/12 mx-auto bg-bgDarker rounded-lg px-4 py-8 md:py-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <img
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-accent"
            src={user.profilePic}
            alt={user.name}
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-accent">
              {user.name}
            </h1>
            <p className="text-accentText">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="px-4 mt-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-accent mb-6">Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <StreakCard title="Weekly Streak" count={user.weeklyStreak} />
          <StreakCard title="Monthly Streak" count={user.monthlyStreak} />
          <StreakCard title="Yearly Streak" count={user.yearlyStreak} />
        </div>
      </div>

      {/* Weight and Activity Section */}
      <div className="mt-8 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-accent mb-6">Your Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <WeightCard
            currentWeight={user.currentWeight}
            goalWeight={user.goalWeight}
          />
          <ActivityCard title="Total Workouts" value={user.totalWorkouts} />
          <ActivityCard title="Calories Burnt" value={user.caloriesBurnt} />
        </div>
      </div>

      {/* User Details Section */}
      <div className="mt-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-1/2 bg-bgDark p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-accent mb-4">
              User Details
            </h3>
            <p className="text-sm mb-2">
              <span className="font-bold">Full Name:</span> {user.name}
            </p>
            <p className="text-sm mb-2">
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p className="text-sm mb-2">
              <span className="font-bold">Age:</span> {user.age}
            </p>
            <p className="text-sm">
              <span className="font-bold">Location:</span> {user.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

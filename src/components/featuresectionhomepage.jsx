import React from "react";
import { YogaImage, WeightliftingImage, RunningImage } from "./assetsimport";

const features = [
  {
    title: "Personalized Workouts",
    description:
      "Tailor your workout plans to fit your personal fitness goals.",
    image: YogaImage,
    alt: "Yoga",
  },
  {
    title: "Progress Tracking",
    description:
      "Get detailed insights and track your progress for every workout session.",
    image: WeightliftingImage,
    alt: "Weightlifting",
  },
  {
    title: "Motivation Boost",
    description:
      "Celebrate milestones and stay motivated with our engaging features.",
    image: RunningImage,
    alt: "Running",
  },
];

const FeaturesSectionHomePage = () => (
  <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-background">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-primary mb-6 tracking-wide">
        Your Fitness Journey Awaits
      </h2>
      <p className="text-primary text-lg max-w-3xl mx-auto">
        Customize workouts, track progress, and stay motivated with our
        feature-rich fitness app.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-background p-8 rounded-xl shadow-lg hover:shadow-3xl transition-transform transform hover:scale-105">
          <img
            src={feature.image}
            alt={feature.alt}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold text-primary mb-4">
            {feature.title}
          </h3>
          <p className="text-primary text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSectionHomePage;

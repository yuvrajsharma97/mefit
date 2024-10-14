import React from "react";


const features = [
  {
    title: "Personalized Workouts",
    description:
      "Tailor your workout plans to fit your personal fitness goals.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mefit-5d6c1.appspot.com/o/yoga.jpg?alt=media&token=6aa75617-259f-4644-8a8b-5432273772a6",
    alt: "Personalized Workouts",
  },
  {
    title: "Progress Tracking",
    description:
      "Get detailed insights and track your progress for every workout session.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mefit-5d6c1.appspot.com/o/weightlifting.jpg?alt=media&token=e887d36b-b730-4c39-87da-f7771e08a78b",
    alt: "Progress Tracking",
  },
  {
    title: "Motivation Boost",
    description:
      "Celebrate milestones and stay motivated with our engaging features.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mefit-5d6c1.appspot.com/o/running.jpg?alt=media&token=29d31ded-a026-4ea7-aaec-6bad1504cae7",
    alt: "Motivation Boost",
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

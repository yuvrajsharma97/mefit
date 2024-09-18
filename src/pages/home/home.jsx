import React from "react";
import HeroImage from "../../assets/hero.jpg";
import FeaturesSectionHomePage from "../../components/featuresectionhomepage";

const Home = () => {
  return (
    <div className="bg-background text-textColor">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="absolute inset-0 bg-bgDarkest opacity-70"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            A Healthy Lifestyle Starts Here
          </h1>
          <p className="text-lg text-white mb-10">
            Choose your workout, track your progress, and achieve your fitness
            goals with ease.
          </p>
          <a
            href="/action"
            className="bg-accent hover:bg-accentHover text-white py-4 px-8 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg">
            Start Tracking Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSectionHomePage />

      {/* Workout Types Section */}
      <section
        id="workoutTypes"
        className="py-20 px-6 md:px-12 lg:px-24 bg-background text-accent">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 tracking-wide">
            Explore Workout Categories
          </h2>
          <p className="text-accentText text-lg max-w-2xl mx-auto">
            Whether it&apos;s yoga, weightlifting, or running, find the perfect
            workout to match your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Yoga",
              description:
                "Improve flexibility and relaxation with curated yoga routines.",
            },
            {
              title: "Weightlifting",
              description:
                "Build muscle and strength with personalized weightlifting plans.",
            },
            {
              title: "Running",
              description:
                "Track your running stats and improve your performance with targeted workouts.",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="p-8 bg-accent rounded-xl shadow-lg hover:shadow-xl transition-shadow transition-transform transform hover:scale-95 text-center">
              <h3 className="text-xl font-semibold mb-4 text-background">
                {category.title}
              </h3>
              <p className="text-background">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 tracking-wide">
            Track Your Progress
          </h2>
          <p className="text-accentText text-lg max-w-3xl mx-auto">
            Monitor your fitness journey with detailed analytics and
            personalized goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Comprehensive Analytics",
              description:
                "View in-depth stats on your workouts, including duration and intensity.",
            },
            {
              title: "Goal Setting",
              description:
                "Set and track personal fitness goals to stay motivated.",
            },
            {
              title: "Celebrate Milestones",
              description:
                "Achieve and celebrate key milestones in your fitness journey.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-primary rounded-xl shadow-lg hover:shadow-xl transition-shadow transition-transform transform hover:scale-95">
              <h3 className="text-xl font-semibold text-background mb-4">
                {item.title}
              </h3>
              <p className="text-background">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="py-20 bg-bgDark text-white text-center">
        <h2 className="text-3xl font-bold mb-6 tracking-wide">
          Join Our Fitness Community
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Connect with like-minded individuals, share your fitness journey, and
          stay inspired.
        </p>
        <a
          href="#signup"
          className="bg-background text-bgDarkest py-4 px-8 rounded-full font-semibold transition-transform transform hover:scale-105">
          Sign Up Now
        </a>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "daisyui";

import {
  MountainPose,
  DownwardDog,
  Warrior1,
  Warrior2,
  TreePose,
  TrianglePose,
  BridgePose,
  ChildsPose,
  SeatedForwardBendPose,
  CatCowPose,
  CobraPose,
  BoatPose,
  PigeonPose,
  CrowPose,
  CorpsePose,
} from "../../../components/assetsimport";
import PoseCard from "../../../components/posecard";

const Yoga = () => {


  const yogaPoses = [
    {
      yogaPoseId: 1,
      name: "Mountain Pose",
      short_description:
        "A foundational standing pose that promotes stability and balance.",
      image: MountainPose,
      instruction:
        "Stand tall with feet together, shoulders relaxed, weight evenly distributed through your soles. Arms at sides with palms facing forward.",
    },
    {
      yogaPoseId: 2,
      name: "Downward Dog",
      short_description: "A rejuvenating pose that stretches the entire body.",
      image: DownwardDog,
      instruction:
        "Start on all fours. Lift your hips and straighten your legs to form an inverted 'V' shape. Press your heels toward the ground and relax your head.",
    },
    {
      yogaPoseId: 3,
      name: "Warrior I",
      short_description:
        "A powerful standing pose that strengthens legs and arms.",
      image: Warrior1,
      instruction:
        "Step one foot forward, bend the knee, and extend your arms overhead. Keep your back leg straight and your hips square.",
    },
    {
      yogaPoseId: 4,
      name: "Warrior II",
      short_description: "A grounding pose that builds strength and focus.",
      image: Warrior2,
      instruction:
        "From Warrior I, open your hips and arms out to the sides. Bend the front knee and gaze over your front hand.",
    },
    {
      yogaPoseId: 5,
      name: "Tree Pose",
      short_description:
        "A balance pose that strengthens the legs and improves focus.",
      image: TreePose,
      instruction:
        "Stand on one leg, place the sole of the other foot on your inner thigh, and bring your palms together at the heart.",
    },
    {
      yogaPoseId: 6,
      name: "Triangle Pose",
      short_description: "A deep stretch for the legs, hips, and torso.",
      image: TrianglePose,
      instruction:
        "From Warrior II, straighten your front leg, reach forward with your hand, and lower it to your shin or the floor. Extend your other arm upward.",
    },
    {
      yogaPoseId: 7,
      name: "Bridge Pose",
      short_description:
        "A backbend that opens the chest and strengthens the spine.",
      image: BridgePose,
      instruction:
        "Lie on your back, bend your knees, and place your feet flat on the ground. Lift your hips while pressing into your arms and feet.",
    },
    {
      yogaPoseId: 8,
      name: "Child's Pose",
      short_description:
        "A resting pose that stretches the back and shoulders.",
      image: ChildsPose,
      instruction:
        "Kneel on the floor, sit back on your heels, and reach your arms forward, resting your forehead on the ground.",
    },
    {
      yogaPoseId: 9,
      name: "Seated Forward Bend",
      short_description:
        "A calming pose that stretches the hamstrings and spine.",
      image: SeatedForwardBendPose,
      instruction:
        "Sit with your legs extended, reach forward from your hips, and hold onto your feet or shins, keeping your spine long.",
    },
    {
      yogaPoseId: 10,
      name: "Cat-Cow Pose",
      short_description:
        "A gentle flow that stretches the spine and opens the chest.",
      image: CatCowPose,
      instruction:
        "Start on all fours. Inhale, arch your back (Cow). Exhale, round your spine (Cat).",
    },
    {
      yogaPoseId: 11,
      name: "Cobra Pose",
      short_description:
        "A backbend that strengthens the spine and opens the chest.",
      image: CobraPose,
      instruction:
        "Lie on your stomach with your hands under your shoulders. Press into your hands to lift your chest, keeping your elbows slightly bent.",
    },
    {
      yogaPoseId: 12,
      name: "Boat Pose",
      short_description:
        "A core-strengthening pose that also improves balance.",
      image: BoatPose,
      instruction:
        "Sit on the floor, lean back slightly, lift your legs, and reach your arms forward to form a 'V' shape with your body.",
    },
    {
      yogaPoseId: 13,
      name: "Pigeon Pose",
      short_description:
        "A hip-opener that releases tension in the lower body.",
      image: PigeonPose,
      instruction:
        "From Downward Dog, bring one knee forward and extend the other leg behind you. Lower your hips toward the ground and stretch forward.",
    },
    {
      yogaPoseId: 14,
      name: "Crow Pose",
      short_description: "An arm balance that strengthens the core and arms.",
      image: CrowPose,
      instruction:
        "Start in a squat with your hands on the ground. Lift your feet off the ground, balancing on your hands with your knees resting on your upper arms.",
    },
    {
      yogaPoseId: 15,
      name: "Corpse Pose (Savasana)",
      short_description: "A relaxation pose that promotes deep rest and calm.",
      image: CorpsePose,
      instruction:
        "Lie flat on your back with your arms at your sides. Close your eyes, relax your entire body, and focus on your breath.",
    },
  ];
   return (
     <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
       <h1 className="text-4xl font-bold underline text-accent mb-12">Yoga Poses</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
         {yogaPoses.map((pose, index) => (
           <PoseCard key={index} pose={pose} />
         ))}
       </div>
     </div>
   );
};

export default Yoga;

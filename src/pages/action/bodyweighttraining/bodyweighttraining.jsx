import React from "react";
import PoseCard from "../../../components/posecard";

const BodyWeightTraining = () => {
  const shoulders = [
    {
      name: "Pike Push-Up",
      short_description:
        "Targets the shoulders by simulating a vertical pressing movement.",
      image: "https://example.com/pike_push_up.jpg",
      instruction:
        "Start in a downward dog position with hands and feet on the ground, lower your head toward the floor by bending your elbows, and push back up.",
    },
    {
      name: "Wall Walk",
      short_description:
        "A challenging bodyweight exercise that works the shoulders and core.",
      image: "https://example.com/wall_walk.jpg",
      instruction:
        "Start in a push-up position with feet against a wall, walk your hands toward the wall as you walk your feet up, then return to the starting position.",
    },
    {
      name: "Handstand Push-Up",
      short_description:
        "An advanced bodyweight exercise that builds shoulder and triceps strength.",
      image: "https://example.com/handstand_push_up.jpg",
      instruction:
        "Kick up into a handstand against a wall, lower your head toward the ground by bending your elbows, then push back up to a full handstand.",
    },
    {
      name: "Arm Circles",
      short_description:
        "A simple exercise to warm up and strengthen the shoulder muscles.",
      image: "https://example.com/arm_circles.jpg",
      instruction:
        "Extend your arms out to your sides and rotate them in small circles, first forward, then backward.",
    },
    {
      name: "Dolphin Push-Up",
      short_description:
        "Works the shoulders and core by mimicking a yoga dolphin pose.",
      image: "https://example.com/dolphin_push_up.jpg",
      instruction:
        "Start in a forearm plank, lift your hips into the air while keeping your forearms on the ground, then return to the plank position.",
    },
  ];

  const chest = [
    {
      name: "Push-Up",
      short_description:
        "A classic bodyweight exercise that works the chest, shoulders, and triceps.",
      image: "https://example.com/push_up.jpg",
      instruction:
        "Place your hands on the ground slightly wider than shoulder-width apart, lower your chest toward the floor, and push back up.",
    },
    {
      name: "Incline Push-Up",
      short_description:
        "A variation of the push-up that targets the upper chest.",
      image: "https://example.com/incline_push_up.jpg",
      instruction:
        "Place your hands on a raised surface like a bench or step, lower your chest toward the surface, and push back up.",
    },
    {
      name: "Decline Push-Up",
      short_description:
        "Targets the lower chest and shoulders by elevating the feet.",
      image: "https://example.com/decline_push_up.jpg",
      instruction:
        "Place your feet on a raised surface with your hands on the ground, lower your chest toward the ground, and push back up.",
    },
    {
      name: "Wide-Grip Push-Up",
      short_description:
        "A push-up variation that emphasizes the outer chest and shoulders.",
      image: "https://example.com/wide_grip_push_up.jpg",
      instruction:
        "Place your hands wider than shoulder-width apart, lower your chest to the ground, and push back up.",
    },
    {
      name: "Diamond Push-Up",
      short_description:
        "Targets the triceps and chest with a narrow hand placement.",
      image: "https://example.com/diamond_push_up.jpg",
      instruction:
        "Place your hands together in a diamond shape beneath your chest, lower yourself to the ground, and push back up.",
    },
  ];

  const back = [
    {
      name: "Pull-Up",
      short_description:
        "A bodyweight exercise that works the back, biceps, and shoulders.",
      image: "https://example.com/pull_up.jpg",
      instruction:
        "Grip a pull-up bar with hands shoulder-width apart, pull your chest toward the bar, and lower yourself back down.",
    },
    {
      name: "Inverted Row",
      short_description:
        "Works the back and biceps by pulling the body upward in a horizontal position.",
      image: "https://example.com/inverted_row.jpg",
      instruction:
        "Lie underneath a bar, grip it with hands shoulder-width apart, and pull your chest toward the bar, keeping your body straight.",
    },
    {
      name: "Superman",
      short_description:
        "Strengthens the lower back by mimicking the flying position of Superman.",
      image: "https://example.com/superman.jpg",
      instruction:
        "Lie face down on the ground with arms extended in front, lift your chest and legs off the floor simultaneously, then lower back down.",
    },
    {
      name: "Reverse Snow Angel",
      short_description:
        "Targets the upper back and shoulders with a smooth, controlled motion.",
      image: "https://example.com/reverse_snow_angel.jpg",
      instruction:
        "Lie face down, lift your arms and legs off the ground, and move your arms in a snow angel motion, squeezing your shoulder blades.",
    },
    {
      name: "Plank to Row",
      short_description:
        "Works the back and core while transitioning between planks and rows.",
      image: "https://example.com/plank_to_row.jpg",
      instruction:
        "Start in a plank position, shift your weight to one hand, and pull the opposite arm back in a rowing motion.",
    },
  ];

  const biceps = [
    {
      name: "Chin-Up",
      short_description:
        "A bodyweight exercise that emphasizes the biceps and back.",
      image: "https://example.com/chin_up.jpg",
      instruction:
        "Grip a bar with palms facing you, pull your chest toward the bar by bending your elbows, then lower yourself back down.",
    },
    {
      name: "Inverted Row with Underhand Grip",
      short_description:
        "A variation of the inverted row that targets the biceps.",
      image: "https://example.com/inverted_row_underhand.jpg",
      instruction:
        "Grip the bar with an underhand grip, pull your chest toward the bar, and lower yourself back down while keeping your body straight.",
    },
    {
      name: "Towel Curl",
      short_description:
        "A bodyweight bicep exercise using a towel and your own body resistance.",
      image: "https://example.com/towel_curl.jpg",
      instruction:
        "Wrap a towel around a sturdy object, grip both ends, lean back slightly, and pull yourself forward by flexing your arms.",
    },
    {
      name: "Bodyweight Bicep Curl on Rings",
      short_description:
        "Targets the biceps using gymnastic rings or TRX bands.",
      image: "https://example.com/bodyweight_curl_rings.jpg",
      instruction:
        "Hold onto rings with an underhand grip, lean back, and curl your body upward while keeping your elbows stationary.",
    },
  ];

  const triceps = [
    {
      name: "Triceps Dip",
      short_description:
        "A compound movement that targets the triceps and chest.",
      image: "https://example.com/triceps_dip.jpg",
      instruction:
        "Place your hands on parallel bars or a bench behind you, lower your body by bending your elbows, then push back up to the starting position.",
    },
    {
      name: "Close-Grip Push-Up",
      short_description: "A push-up variation that targets the triceps.",
      image: "https://example.com/close_grip_push_up.jpg",
      instruction:
        "Place your hands closer together than in a standard push-up position, lower your chest toward the floor, and push back up.",
    },
    {
      name: "Bench Dip",
      short_description: "Targets the triceps using a bench or raised surface.",
      image: "https://example.com/bench_dip.jpg",
      instruction:
        "Sit on a bench with your hands beside your hips, slide off the edge, lower your body by bending your elbows, and press back up.",
    },
    {
      name: "Plank to Push-Up",
      short_description:
        "A dynamic movement that works the triceps, chest, and core.",
      image: "https://example.com/plank_to_push_up.jpg",
      instruction:
        "Start in a forearm plank, press up into a push-up position one arm at a time, then lower yourself back into the forearm plank.",
    },
    {
      name: "Diamond Push-Up",
      short_description:
        "Targets the triceps and chest with a narrow hand placement.",
      image: "https://example.com/diamond_push_up.jpg",
      instruction:
        "Place your hands together in a diamond shape beneath your chest, lower yourself to the ground, and push back up.",
    },
  ];

  const legs = [
    {
      name: "Squat",
      short_description:
        "A foundational lower body exercise that targets quads, hamstrings, and glutes.",
      image: "https://example.com/squat.jpg",
      instruction:
        "Stand with feet shoulder-width apart, lower your hips back and down as if sitting, and push through your heels to return to standing.",
    },
    {
      name: "Lunge",
      short_description:
        "Works the quads, hamstrings, glutes, and stabilizing muscles.",
      image: "https://example.com/lunge.jpg",
      instruction:
        "Step forward with one foot, lower your hips until both knees are at a 90-degree angle, and return to the starting position.",
    },
    {
      name: "Bulgarian Split Squat",
      short_description:
        "A single-leg squat variation that focuses on balance and leg strength.",
      image: "https://example.com/bulgarian_split_squat.jpg",
      instruction:
        "Place one foot on a bench behind you, lower your hips by bending your front knee, and push back up.",
    },
    {
      name: "Pistol Squat",
      short_description:
        "A challenging single-leg squat that targets balance, strength, and flexibility.",
      image: "https://example.com/pistol_squat.jpg",
      instruction:
        "Stand on one leg, lower your hips as you extend the other leg forward, and push through your standing leg to return to standing.",
    },
    {
      name: "Glute Bridge",
      short_description:
        "Works the glutes and hamstrings by lifting the hips off the ground.",
      image: "https://example.com/glute_bridge.jpg",
      instruction:
        "Lie on your back with knees bent, push through your heels to lift your hips off the ground, and lower back down.",
    },
  ];

  const core = [
    {
      name: "Plank",
      short_description:
        "Strengthens the abdominals, back, and stabilizing muscles.",
      image: "https://example.com/plank.jpg",
      instruction:
        "Start in a push-up position, but rest on your forearms. Keep your body in a straight line from head to heels.",
    },
    {
      name: "Mountain Climber",
      short_description: "A dynamic core exercise that also raises heart rate.",
      image: "https://example.com/mountain_climber.jpg",
      instruction:
        "Start in a push-up position, bring one knee toward your chest, then quickly switch legs in a running motion.",
    },
    {
      name: "V-Up",
      short_description:
        "A full-body core exercise that targets the upper and lower abdominals.",
      image: "https://example.com/v_up.jpg",
      instruction:
        "Lie on your back, simultaneously lift your legs and torso off the ground, reaching your hands toward your feet.",
    },
    {
      name: "Bicycle Crunch",
      short_description: "Targets the rectus abdominis and obliques.",
      image: "https://example.com/bicycle_crunch.jpg",
      instruction:
        "Lie on your back with hands behind your head, bring one knee toward your chest, and rotate your torso to touch the opposite elbow to the knee.",
    },
    {
      name: "Leg Raise",
      short_description:
        "Works the lower abdominals by lifting the legs off the ground.",
      image: "https://example.com/leg_raise.jpg",
      instruction:
        "Lie on your back with legs straight, lift your legs up to a 90-degree angle, then lower them back down without touching the floor.",
    },
  ];

  return (
    <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
      <h1 className="text-4xl font-bold underline text-accent">
        BodyWeight Training Exercises
      </h1>
      {/* Shoulders */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Shoulders </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {shoulders.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Chest */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Chest </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {chest.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Back */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Back </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {back.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Biceps */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Biceps </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {biceps.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Triceps */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Triceps </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {triceps.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Legs */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Legs </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {legs.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Core */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Core </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {core.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
    </div>
  );
};

export default BodyWeightTraining;

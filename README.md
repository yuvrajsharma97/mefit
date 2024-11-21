# MeFit: Your Personal Workout Tracker

**MeFit** is a React and Firebase-powered application designed to provide users with a wide range of workouts, enabling them to track and customize their exercise routines effortlessly. Users can select exercises, set custom numbers of sets, and stay on top of their fitness goals.

---

## Features

- **Wide Range of Workouts**: Browse through an extensive list of exercises.
- **Customizable Sets**: Personalize the number of sets for each exercise to match your fitness level.
- **Workout Tracking**: Track your progress and adjust your routine as needed.
- **Responsive UI**: A seamless experience on all devices.
- **Dynamic Animations**: Engaging animations to enhance user interaction.

---

## Tech Stack

- **Frontend**: React (using Vite for blazing-fast development)
- **Backend**: Firebase for database and authentication
- **State Management**: Redux Toolkit for efficient state management
- **Styling**: Tailwind CSS and DaisyUI for responsive and customizable UI components

---

## Libraries Used

### Dependencies

- **[@emotion/styled](https://emotion.sh/docs/styled)**: Styled components for creating reusable and maintainable styles.
- **[@reduxjs/toolkit](https://redux-toolkit.js.org/)**: Simplified state management with Redux.
- **[AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)**: Smooth scroll animations for an engaging user experience.
- **[DaisyUI](https://daisyui.com/)**: Tailwind CSS components for rapid UI development.
- **[Firebase](https://firebase.google.com/)**: Backend services, including authentication and real-time database.
- **[Framer Motion](https://www.framer.com/motion/)**: Stunning animations for user interactions.
- **[Next Themes](https://github.com/pacocoursey/next-themes)**: Theme toggling for light/dark mode.
- **[React Animated Counter](https://www.npmjs.com/package/react-animated-counter)**: Smoothly animated counters for tracking workout metrics.
- **[React Hot Toast](https://react-hot-toast.com/)**: Lightweight notifications for better UX.
- **[React Icons](https://react-icons.github.io/react-icons/)**: A rich set of icons for modern UI design.
- **[React Redux](https://react-redux.js.org/)**: Official bindings for Redux in React.
- **[React Router DOM](https://reactrouter.com/en/main)**: Routing library for navigating between app pages.

### Dev Dependencies

- **[@vitejs/plugin-react](https://vitejs.dev/guide/)**: Vite plugin for React support.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid styling.
- **[PostCSS](https://postcss.org/)**: A tool for transforming CSS with JavaScript.
- **[ESLint](https://eslint.org/)**: Code quality and formatting tool.
- **[Autoprefixer](https://github.com/postcss/autoprefixer)**: CSS vendor prefix handling.

---

## Scripts

- `npm run dev`: Start the development server with Vite.
- `npm run build`: Build the project for production.
- `npm run lint`: Lint the project using ESLint.
- `npm run preview`: Preview the production build.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

mefit/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── features/     # Redux slices and features
│   ├── pages/        # Application pages
│   ├── styles/       # Tailwind and global styles
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # App entry point
├── package.json
├── vite.config.js
└── tailwind.config.js

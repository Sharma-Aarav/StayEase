# StayEase - Hotel Booking Platform

StayEase is a modern hotel booking platform built with React and Vite, offering users a seamless experience to discover and book hotels worldwide.

> **⚠️ Project Status: This project is currently under development and is not yet completed. Further work is required to implement remaining features and functionality.**

## 🚀 Features

### User Features
- **Home Page**: Beautiful landing page with hero section, featured destinations, exclusive offers, testimonials, and newsletter signup
- **Hotel Listings**: Browse all available hotel rooms with detailed information
- **User Authentication**: Secure authentication powered by Clerk
- **Responsive Design**: Fully responsive design that works on all devices

### Technical Features
- **Modern React**: Built with React 19.2.0
- **Fast Development**: Vite for lightning-fast HMR and builds
- **Styling**: Tailwind CSS for modern, responsive UI
- **Routing**: React Router DOM for seamless navigation
- **Authentication**: Clerk integration for user management

## 📁 Project Structure

```
client/
├── src/
│   ├── assets/          # Images, icons, and static assets
│   ├── components/      # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedDestination.jsx
│   │   ├── ExclusiveOffers.jsx
│   │   ├── HotelCard.jsx
│   │   ├── StarRating.jsx
│   │   ├── Testimonial.jsx
│   │   ├── NewsLetter.jsx
│   │   └── Title.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── AllRooms.jsx
│   │   └── RoomDetails.jsx
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point with Clerk provider
├── public/             # Public assets
└── package.json        # Dependencies and scripts
```

## 🛠️ Tech Stack

- **React** 19.2.0
- **Vite** (rolldown-vite 7.2.5)
- **React Router DOM** 7.10.0
- **Clerk** (@clerk/clerk-react 5.58.0) - Authentication
- **Tailwind CSS** 4.1.17 - Styling
- **ESLint** - Code linting

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the `client` directory and add your Clerk publishable key:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📄 Pages & Routes

- `/` - Home page with hero, featured destinations, offers, and testimonials
- `/rooms` - All available hotel rooms listing page

## 🎨 Key Components

- **Navbar**: Responsive navigation with scroll effects, mobile menu, and user authentication
- **Hero**: Landing section with hotel search form
- **FeaturedDestination**: Showcase of top hotel destinations
- **ExclusiveOffers**: Special deals and promotional offers
- **AllRooms**: Room listing page with filter UI (room type, price range, sorting) - filter functionality to be implemented
- **Footer**: Site footer with links and information

## 🔐 Authentication

The app uses Clerk for authentication. Users can:
- Sign in/Sign up
- View user profile via Clerk's UserButton component

## 📝 Notes & Current Status

**This project is still in development. The following features are planned or partially implemented:**

- The project uses dummy data for hotel listings (stored in `assets/assets.js`)
- Room details page (`RoomDetails.jsx`) exists but is empty and has no route configured
- Owner dashboard and My Bookings are referenced in the Navbar but routes are not implemented in App.jsx
- Filter and sort UI components exist in AllRooms page but filtering/sorting functionality is not yet implemented
- Hero search form UI exists but search functionality is not yet implemented
- The app is configured to use Tailwind CSS v4 with the Vite plugin

**Additional work is required to complete the project and implement all planned features.**

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🏆 SportsHub - Sports League Management System (SLMS)

SportsHub is a full-stack, enterprise-grade sports management and fan engagement platform built on the **MERN** stack (MongoDB, Express, React, Node.js), powered by **Redux Toolkit & RTK Query**, and secured with **JSON Web Tokens (JWT)**.

[![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB?style=flat&logo=react)](https://react.dev)
[![Redux Toolkit](https://img.shields.io/badge/State-Redux%20Toolkit%20%2B%20RTK%20Query-764ABC?style=flat&logo=redux)](https://redux-toolkit.js.org)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%26%20Express-339933?style=flat&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=flat&logo=mongodb)](https://cloud.mongodb.com)
[![JWT](https://img.shields.io/badge/Auth-JWT%20%2B%20Bcrypt-000000?style=flat&logo=jsonwebtokens)](https://jwt.io)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat&logo=vercel)](https://vercel.com)

---

## 📋 Technical Topic Verification Matrix

| Topic | Status | Implementation Details & Source-Code Location |
| :--- | :---: | :--- |
| **Local Storage** | ✅ Verified | Domain entities (users, leagues, teams, fixtures, tickets) persisted in [`src/context/AppContext.jsx`](src/context/AppContext.jsx#L16-L32) via `localStorage.getItem` & `localStorage.setItem`. |
| **Session Storage** | ✅ Verified | Active browser tab session (`active_tab`), current view, and login session tracked in [`src/context/AppContext.jsx`](src/context/AppContext.jsx#L34-L52) via `sessionStorage.setItem`. |
| **Arrow Functions** | ✅ Verified | Standard ES6 arrow syntax (`() => {}`) used across all functional components, event handlers (`handleChange`), hooks, and array operations (`.map`, `.filter`). |
| **React Components** | ✅ Verified | Modular functional architecture across [`src/components/`](src/components/) (`Navbar.jsx`, `AuthModal.jsx`, `StatCard.jsx`, `Footer.jsx`) and [`src/modules/`](src/modules/). |
| **useState** | ✅ Verified | Reactive local state hooks implemented in [`src/components/AuthModal.jsx`](src/components/AuthModal.jsx#L15), [`src/context/AppContext.jsx`](src/context/AppContext.jsx#L55), and [`src/components/Navbar.jsx`](src/components/Navbar.jsx#L33). |
| **DOM Manipulation** | ✅ Verified | Declarative React virtual DOM rendering using pure CSS Grid and Flexbox layouts without heavy external UI frameworks. |
| **Props** | ✅ Verified | Reusable [`src/components/StatCard.jsx`](src/components/StatCard.jsx) receives destructured props (`label`, `value`, `icon`, `color`, `bg`) passed from `AdminDashboard.jsx` and `UserDashboard.jsx`. |
| **MongoDB Atlas** | ✅ Verified | Cloud database connection using Mongoose ODM schemas in [`server/models/`](server/models/) (`User.js`, `League.js`, `Team.js`, `Fixture.js`, `Ticket.js`). |
| **React Hooks** | ✅ Verified | Comprehensive usage of React built-in hooks (`useState`, `useEffect`, `useContext`) and Redux hooks (`useDispatch`, `useSelector`). |
| **Controlled Forms** | ✅ Verified | Form inputs in [`src/components/AuthModal.jsx`](src/components/AuthModal.jsx#L27) are 100% controlled components bound via `value={formData.*}` and updated via `onChange={handleChange}`. |
| **JWT Authentication** | ✅ Verified | Backend auth with bcryptjs password hashing and signed 7-day JWT Bearer tokens verified via [`server/middleware/authMiddleware.js`](server/middleware/authMiddleware.js). |

---

## 📌 Features

### 👤 Fan & User Experience
- **Live Match Center**: Real-time score ticker, match clock, possession and tactical stats, and a chronological incident commentary feed.
- **Dynamic Standings Engine**: Automated points, wins, draws, losses, and goal difference calculations.
- **Interactive Stadium Ticketing**: Interactive CSS Grid seating map with tiered pricing (VIP, Club, Bleachers) and instant digital ticket generation with dynamic QR code validation.
- **Player & Squad Directory**: Complete team rosters, player profiles, and statistical leaderboards.
- **World Sports Radar**: Third-party external API integration querying international leagues, stadiums, and team badges in real time.

### 🛡️ League Administration
- **Tournament & League Provisioning**: Create and manage multi-sport tournaments, seasons, and rules.
- **Team & Roster Management**: Provision competing clubs, manage player contracts, and assign home venues.
- **Fixture Scheduling**: Clash-free calendar planning with venue assignment and ticket pricing.
- **Live Match Controller**: Real-time score incrementing (+1 / -1), match clock management, and instant incident broadcasting.

---

## 🏗️ Architecture & Technology Stack

```
                          ┌──────────────────────────────┐
                          │     React 18 Frontend UI     │
                          │   (CSS Grid & Flexbox)       │
                          └──────────────┬───────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
     ┌───────────────────────┐                       ┌───────────────────────┐
     │  Redux Toolkit Store  │                       │  Third-Party API      │
     │  (authSlice, uiSlice) │                       │  (TheSportsDB API v1) │
     └───────────┬───────────┘                       └───────────────────────┘
                 │ (RTK Query with Bearer JWT)
                 ▼
     ┌───────────────────────┐
     │  Node/Express API     │
     │  (JWT Middleware)     │
     └───────────┬───────────┘
                 │
                 ▼
     ┌───────────────────────┐
     │  MongoDB Atlas Cloud  │
     │  (Mongoose Schemas)   │
     └───────────────────────┘
```

- **Frontend**: React 18, Vite, Pure CSS (CSS Grid & Flexbox layouts, responsive design, zero UI framework bloat).
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`), RTK Query (`sportsApi`), slice-based auth and UI management.
- **Backend API**: Node.js, Express.js REST API with modular routers and controllers.
- **Database**: MongoDB Atlas Cloud, Mongoose ODM with validated schemas and pre-save password encryption.
- **Authentication**: Stateless JSON Web Tokens (JWT) signed with secret keys, stored in client storage, and validated via Bearer authorization middleware.
- **Third-Party API**: TheSportsDB public API integration for live global football league data.
- **Deployment**: Vercel Serverless Functions (`api/index.js`) and Vite static production build.

### ⚛️ React Core Concepts Implemented
- **`useState` Hook**: Reactive local component state used across navigation, modals, live counters, and forms.
- **Component `Props`**: Clean component hierarchy with reusable UI elements (e.g. `StatCard.jsx` receiving `label`, `value`, `icon`, `color`, `bg` props from parent dashboards).
- **Controlled Forms**: User registration and login forms in `AuthModal.jsx` are fully controlled via React state binding (`value={formData.email}` and `onChange={handleChange}`).
- **Session Storage (`sessionStorage`)**: Used in `AppContext.jsx` for active browser tab session tracking, view state preservation, and login activity logs.
- **Local Storage (`localStorage`)**: Used for persistent client caching, user credentials, and league data.

---

## 📂 Project Structure

```
Sports/
├── api/
│   └── index.js                 # Vercel serverless function entrypoint
├── server/
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT verification and role authorization
│   ├── models/
│   │   ├── Fixture.js           # Fixture & live incident schema
│   │   ├── League.js            # League & season schema
│   │   ├── Team.js              # Team and player roster schema
│   │   ├── Ticket.js            # Stadium seat booking schema
│   │   └── User.js              # User auth and bcrypt password hashing
│   ├── routes/
│   │   ├── authRoutes.js        # /api/auth/register, /api/auth/login, /api/auth/me
│   │   ├── fixtureRoutes.js     # /api/fixtures CRUD and score updating
│   │   ├── leagueRoutes.js      # /api/leagues CRUD
│   │   ├── teamRoutes.js        # /api/teams CRUD
│   │   └── ticketRoutes.js      # /api/tickets booking and user tickets
│   ├── seed.js                  # Database seeder script
│   └── server.js                # Express app configuration & DB connection
├── src/
│   ├── components/              # Shared navigation, footer, auth modal
│   ├── context/                 # Application context fallbacks
│   ├── data/                    # Initial seed data constants
│   ├── modules/
│   │   ├── admin/               # League, team, fixture, and live match controllers
│   │   └── user/                # Fan dashboard, standings, tickets, world radar
│   ├── redux/
│   │   ├── api/sportsApi.js     # RTK Query service endpoints & external API
│   │   ├── slices/              # authSlice, uiSlice
│   │   └── store.js             # Central Redux store
│   ├── App.jsx                  # Root application router
│   ├── index.css                # Global theme, CSS Grid & Flexbox styling
│   └── main.jsx                 # React root wrapped in Redux Provider
├── package.json                 # Frontend dependencies and build scripts
├── vercel.json                  # Production rewrite rules for serverless API
└── vite.config.js               # Vite build configuration & local dev proxy
```

---

## ⚙️ API Endpoints

### Authentication
- `POST /api/auth/register` - Create a new user account (hashes password with bcrypt)
- `POST /api/auth/login` - Authenticate user and return signed 7-day JWT token
- `GET /api/auth/me` - Retrieve current user profile (requires Bearer token)

### Leagues & Teams
- `GET /api/leagues` - List all active leagues
- `POST /api/leagues` - Create a new tournament league (Admin only)
- `GET /api/teams` - List teams with embedded player rosters
- `POST /api/teams` - Create a new club franchise (Admin only)

### Fixtures & Live Controller
- `GET /api/fixtures` - List scheduled, live, and completed matches
- `POST /api/fixtures` - Schedule a new match fixture (Admin only)
- `PUT /api/fixtures/:id/score` - Live update match score and broadcast incidents (Admin only)

### Ticketing
- `POST /api/tickets/book` - Reserve stadium seats and generate QR ticket
- `GET /api/tickets/my` - Fetch tickets booked by the authenticated user

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or higher)
- npm or yarn
- MongoDB Atlas connection string

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/sriram-40219/Sports.git
cd Sports

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Configure Environment Variables
Create a `.env` file in the `server/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### 3. Run Locally

**Start the Backend Server:**
```bash
cd server
npm start
# Server runs on http://localhost:5000
```

**Start the Frontend App:**
```bash
# In the root project directory
npm run dev
# Application opens on http://localhost:3000
```

---

## 🌐 Production Deployment

The project is structured for zero-configuration continuous deployment on **Vercel**:
- Backend routes under `/api/*` are executed by Vercel Serverless Functions via `api/index.js`.
- Frontend assets are compiled with Vite and served globally through Vercel's edge network.
- Environment variables (`MONGO_URI` and `JWT_SECRET`) are configured directly in the Vercel Project Settings.

---

## 📄 License
This project is open-source and available under the MIT License.

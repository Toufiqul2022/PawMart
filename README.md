# 🐾 PawMart – Pet Services & Adoption Platform (Frontend)

A full-featured **React + Vite** frontend for a pet services and adoption platform. Users can browse pet listings, book services, manage orders, and admins can manage all listings — all with Firebase Authentication and a connected backend API.

---

## 📸 Features

- 🏠 Home page with hero slider, categories, recent listings, and adoption section
- 🐶 Browse and filter pets & supplies by category
- 📋 Service listing, detail, and booking system
- 📝 Blog section with individual blog detail pages
- 🔐 Firebase Authentication (Login, Register, Forgot Password, Google Sign-in)
- 👤 User dashboard with order management
- 🛡️ Admin dashboard with full listing and order control
- 🌙 Light / Dark theme toggle (saved to localStorage)
- ❓ FAQ page and CTA section
- 🔴 Custom 404 Error page

---

## 🛠️ Tech Stack

| Technology            | Purpose                  |
| --------------------- | ------------------------ |
| React 18              | UI framework             |
| Vite                  | Build tool & dev server  |
| React Router DOM      | Client-side routing      |
| Firebase (Auth)       | User authentication      |
| Axios (`api` utility) | HTTP requests to backend |
| Tailwind CSS          | Utility-first styling    |
| DaisyUI               | UI component library     |
| React Icons           | Icon set                 |

---

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Slider.jsx
│   ├── Aside.jsx        # Dashboard sidebar
│   ├── AdoptPets.jsx
│   ├── PetHero.jsx
│   ├── RecentListing.jsx
│   └── Error404.jsx
├── Firebase/
│   └── Firebase.config.js   # Firebase init (reads from .env)
├── hooks/
│   └── useAdmin.js          # Custom hook to check admin role
├── layouts/
│   ├── Root.jsx             # Main layout
│   └── DashboardLayout/
│       └── DashboardLayout.jsx
├── Pages/               # All route-level pages
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── ForgetPassword.jsx
│   ├── AllListing.jsx
│   ├── AddListing.jsx
│   ├── AllOrder.jsx
│   ├── Blogs.jsx
│   ├── BlogDetail.jsx
│   ├── Category.jsx
│   ├── CategoryFilteredProducts.jsx
│   ├── DashboardHome.jsx
│   ├── FAQ.jsx
│   ├── Highlights.jsx
│   └── CTA.jsx
├── Provider/
│   └── AuthProvider.jsx     # Firebase auth context
├── router/
│   └── Router.jsx           # React Router config
└── utils/
    └── api.js               # Axios instance with base URL
```

---

## ⚙️ Prerequisites

Make sure you have the following installed before starting:

- **Node.js** v18 or higher → [Download](https://nodejs.org/)
- **npm** v9+ (comes with Node.js)
- A **Firebase** project with Authentication enabled
- The **backend API** running (this frontend connects to it via `src/utils/api.js`)

---

## 🚀 Installation & Setup

### Step 1 — Clone or Extract the Project

If you have a ZIP file, extract it. Then open a terminal inside the project folder:

```bash
cd Assignment-10-Fontend
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Configure Environment Variables

Create a `.env` file in the **root of the project** (same level as `package.json`):

```env
# Firebase Configuration
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_firebase_app_id

# Backend API Base URL
VITE_API_BASE_URL=http://localhost:5000
```

> ⚠️ **Important:** Never commit your `.env` file to GitHub. Add it to `.gitignore`.

#### How to get Firebase credentials:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or open existing one
3. Go to **Project Settings → General → Your Apps**
4. Register a Web App and copy the config values
5. Enable **Authentication** → **Sign-in methods** → Enable **Email/Password** and **Google**

### Step 4 — Update API Base URL

Open `src/utils/api.js` and make sure the `baseURL` matches your backend server:

```js
// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
});

export default api;
```

### Step 5 — Run the Development Server

```bash
npm run dev
```

The app will start at: **http://localhost:5173**

---

## 📦 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint checks                    |

---

## 🔑 Environment Variables Reference

| Variable                   | Description                  | Required |
| -------------------------- | ---------------------------- | -------- |
| `VITE_API_KEY`             | Firebase API Key             | ✅ Yes   |
| `VITE_AUTH_DOMAIN`         | Firebase Auth Domain         | ✅ Yes   |
| `VITE_PROJECT_ID`          | Firebase Project ID          | ✅ Yes   |
| `VITE_STORAGE_BUCKET`      | Firebase Storage Bucket      | ✅ Yes   |
| `VITE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID | ✅ Yes   |
| `VITE_APP_ID`              | Firebase App ID              | ✅ Yes   |
| `VITE_API_BASE_URL`        | Backend server base URL      | ✅ Yes   |

---

## 🌐 Backend API

This frontend depends on a backend REST API. The following endpoints are used:

| Method   | Endpoint              | Description                  |
| -------- | --------------------- | ---------------------------- |
| GET      | `/services`           | Get all pet service listings |
| POST     | `/services`           | Add a new listing (admin)    |
| GET      | `/users/admin/:email` | Check if user is admin       |
| GET/POST | `/orders`             | Get or create orders         |

Make sure your backend server is running before using the app.

---

## 🔒 Authentication Flow

1. User registers or logs in via **Firebase Email/Password** or **Google**
2. `AuthProvider` stores the current user in React Context
3. Protected routes check for authenticated user
4. The `useAdmin` hook checks if the logged-in user has admin role via the backend API

---

## 🐛 Common Issues & Fixes

**Problem:** `Firebase: Error (auth/invalid-api-key)`
**Fix:** Check your `.env` file. Make sure all `VITE_` prefixed variables are set correctly and the dev server was restarted after changes.

---

**Problem:** API requests failing / CORS error
**Fix:** Make sure your backend server is running and `VITE_API_BASE_URL` in `.env` points to the correct URL (e.g., `http://localhost:5000`).

---

**Problem:** Blank page after build
**Fix:** Check that `base` is set correctly in `vite.config.js` if deploying to a subdirectory.

---

**Problem:** `.env` variables are `undefined`
**Fix:** All Vite environment variables **must** start with `VITE_`. Restart the dev server after editing `.env`.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

During deployment, add all your environment variables in the **Vercel Dashboard → Project Settings → Environment Variables**.

### Deploy to Netlify

```bash
npm run build
```

Upload the `dist/` folder to Netlify, or connect your GitHub repo and set env variables in **Site Settings → Environment Variables**.

> ⚠️ For React Router to work on Netlify/Vercel, add a redirect rule:
> Create a `public/_redirects` file with: `/* /index.html 200`

---

## 📄 License

This project was created as an academic assignment. Feel free to use it for learning purposes.

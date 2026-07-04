<div align="center">
  <h1 style="background: linear-gradient(90deg,#1e90ff,#ff6347);-webkit-background-clip:text;color:transparent;">🌤️ Klimate Dashboard</h1>
  <p style="font-size:1 პირდაპირ; color:#555;">Real‑time weather insights, beautifully visualized.</p>
  <p>
    <a href="https://github.com/dharunkumar-sh/klimate-dashboard"><img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/dharunkumar-sh/klimate-dashboard"></a>
    <a href="https://www.npmjs.com/package/weather-app"><img alt="npm version" src="https://img.shields.io/npm/v/weather-app?color=brightgreen"></a>
    <a href="https://github.com/dharunkumar-sh/klimate-dashboard/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/dharunkumar-sh/klimate-dashboard?color=blue"></a>
    <a href="https://github.com/dharunkumar-sh/klimate-dashboard/actions"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/dharunkumar-sh/klimate-dashboard/ci.yml?label=CI"></a>
  </p>
</div>

## 📖 Description

Klimate is a **lightweight, responsive weather dashboard** built with React, TypeScript, and Vite. It fetches real‑time weather data from the OpenWeather API, displays current conditions, an hourly forecast, and allows users to mark favorite cities. The UI leverages **shadcn/ui**, **Tailwind CSS**, and **Recharts** for polished, accessible components and beautiful charts.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Folder Structure](#-folder-structure)
- [Architecture](#-architecture)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🚀 Features

| 🎯 Feature | 🔧 What it does |
|------------|-----------------|
| **Real‑time Weather** | Pulls current weather, temperature, humidity and wind data from the OpenWeather API. |
| **Hourly Forecast** | Presents a 24‑hour chart using Recharts for quick visual insights. |
| **Favorites** | Persist favorite cities via localStorage. |
| **Dark Mode** | Toggle between light and dark themes with next-themes. |
| **Responsive Design** | Works seamlessly on geomobile, tablet, and desktop. |
| **Data Caching** | TanStack Query caches API responses for offline use. |
| **Geolocation** | Auto‑detects user location on first load. |
| **Accessibility** | Built on Radix UI primitives and shadcn/ui for WCAG compliance. |

---

## 🛠️ Tech Stack

| Category | Libraries / Tools |
|----------|-------------------|
| **Language** | TypeScript |
| **Framework** | React (Vite) |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **Charts** | Recharts |
| **Data Fetching** | TanStack Query |
| **Routing** | React Router |
| **Icons** | Lucide Icons |
| **Utilities** | date-fns, clsx, class-variance-authority |
| **Linting** | ESLint (React Hooks, Refresh) |
| **Build** | Vite |
| **CI** | GitHub Actions (lint, build) |

---

## 🏁 Getting Started

```bash
# Clone the repository
git clone https://github.com/dharunkumar-sh/klimate-dashboard.git
cd klimate-dashboard

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open <http://localhost:5173> in your browser. The app is ready to use out of the box.

---

## 💡 Usage

### Using the Weather Hook

```tsx
import { useWeather } from '@/hooks/use-weather';

const WeatherCard = () => {
  const { data, isLoading, error } = useWeather('New York');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching weather.</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
    </div>
  );
};
```

The hook automatically handles caching, refetching, and geolocation fallback.

---

## 📁 Folder Structure

<details open>
<summary>Show full tree</summary>

```
├─ public/
│  ├─ logo.png
│  └─ logo2.png
├─ src/
│  ├─ api/
│  │  ├─ config.ts
│  │  ├─ types.ts
│  │  └─ weather.ts
│  ├─ assets/
│  │  └─ react.svg
│  ├─ components/
│  │  ├─ city-search.tsx
│  │  ├─ current-weather.tsx
│  │  ├─ favorite-button.tsx
│  │  ├─ favorite-cities.tsx
│  │  ├─ header.tsx
│  │  ├─ hourly-temprature.tsx
│  │  ├─ layout.tsx
│  │  ├─ loading-skeleton.tsx
│  │  ├─ theme-toggle.tsx
│  │  ├─ weather-details.tsx
│  │  ├─ weather-forecast.tsx
│  │  └─ ui/
│  │     ├─ alert.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ command.tsx
│  │     ├─ dialog.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ skeleton.tsx
│  │     └─ sonner.tsx
│  ├─ context/
│  │  └─ theme-provider.tsx
│  ├─ hooks/
│  │  ├─ use-favorite.ts
│  │  ├─ use-geolocation.ts
│  │  ├─ use-local-storage.ts
│  │  ├─ use-search-history.ts
│  │  └─ use-weather.ts
│  ├─ lib/
│  │  └─ utils.ts
│  ├─ pages/
│  │  ├─ city-page.tsx
│  │  └─ weather-dashboard.tsx
│  ├─ main.tsx
│  ├─ App.css
│  ├─ App.tsx
│  ├─ index.css
│  └─ vite.config.ts
├─ .env
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md
```

</details>

---

## 🗺️ Architecture

```mermaid
graph TD
  A[User] -->|Open Web App| B[React/Vite]
  B --> C[Components]
  B --> D[Hooks]
  D --> E[API Layer (OpenWeather)]
  C --> F[UI (shadcn/ui, Radix, Tailwind)]
  F --> G[Charts (Recharts)]
  D --> H[State (React Context, TanStack Query)]
  H --> I[LocalStorage (Favorites, Theme)]
```

- **API Layer** encapsulates all OpenWeather calls and TypeScript types.
- **Hooks** provide reusable logic for fetching data, managing favorites, and geolocation.
- **Components** are built with Radix primitives and styled via Tailwind + shadcn/ui.
- **State** is persisted in localStorage and cached via TanStack Query.

---

## 🚢 Deployment

Klimate is a static SPA and can be deployed to any CDN or static host.

```bash
# Build for production
npm run build
```

### Vercel

1. Connect the repo to Vercel.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Deploy!

### Netlify

```bash
netlify init
net

<div align="center">

# 🌤️ Klimate Dashboard

Real‑time weather insights, beautifully visualized.

<br>

[![GitHub Repo Size](https://img.shields.io/github/repo-size/dharunkumar-sh/klimate-dashboard)](https://github.com/dharunkumar-sh/klimate-dashboard)
[![npm version](https://img.shields.io/npm/v/weather-app?color=brightgreen)](https://www.npmjs.com/package/weather-app)
[![License](https://img.shields.io/github/license/dharunkumar-sh/klimate-dashboard?color=blue)](https://github.com/dharunkumar-sh/klimate-dashboard/blob/main/LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dharunkumar-sh/klimate-dashboard/ci.yml?label=CI)](https://github.com/dharunkumar-sh/klimate-dashboard/actions)

</div>

---

## 📖 Description

Klimate is a **lightweight, responsive weather dashboard** built with React, TypeScript, and Vite. It fetches real‑time weather data from the OpenWeather API, displays current conditions, provides an hourly forecast, and allows users to manage favorite cities. The UI leverages **shadcn/ui**, **Tailwind CSS**, and **Recharts** for polished, accessible components and data visualization.

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

---

## 🚀 Features

| 🎯 Feature | 🔧 What it does |
| :--- | :--- |
| **Real‑time Weather** | Pulls temperature, humidity, and wind data from the OpenWeather API. |
| **Hourly Forecast** | Presents a 24‑hour chart using Recharts for visual insights. |
| **Favorites** | Persists favorite cities using local storage. |
| **Dark Mode** | Seamless theme toggling via `next-themes`. |
| **Responsive Design** | Optimized for mobile, tablet, and desktop viewports. |
| **Data Caching** | Leverages TanStack Query for efficient API caching. |
| **Geolocation** | Auto‑detects user location on initial load. |
| **Accessibility** | Built on Radix UI primitives for WCAG compliance. |

---

## 🛠️ Tech Stack

| Category | Libraries / Tools |
| :--- | :--- |
| **Language** | TypeScript |
| **Framework** | React (Vite) |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **Charts** | Recharts |
| **Data Fetching** | TanStack Query |
| **Routing** | React Router |
| **Icons** | Lucide Icons |
| **Utilities** | date-fns, clsx, class-variance-authority |

---

## 🏁 Getting Started

```bash
# Clone the repository
git clone [https://github.com/dharunkumar-sh/klimate-dashboard.git](https://github.com/dharunkumar-sh/klimate-dashboard.git)
cd klimate-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev

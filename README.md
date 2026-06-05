# 🇰🇪 Kenya Weather & Agro-Ecological Console

A comprehensive, low-latency meteorological dashboard and decision-support system tailored for Kenyan farmers, foresters, and regional agronomists. It bridges real-time meteorological monitoring with advanced sub-surface botanical estimators, month-on-month seasonal climatology charts, dynamic AI advisors, and formatted offline PDF export capabilities.

---

## 🌟 Key Functional Features

1. **Agro-Meteorological Monitoring Unit**
   * High-contrast metrics mapping real-time Temperature, Wind Speeds, UV Indexes, and Dew Points.
   * Proprietary **Estimated Soil Temperature** index indicating whether soil heat is in the optimal range.
   * Dynamic weather station selector with presets for major Kenyan hubs: *Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, and Naivasha*.

2. **Botanical & Canopy Water Indexes**
   * Real-time localized sub-surface insights including **Soil Moisture Status**, **Evapotranspiration Indexes**, and **Canopy Water Stress Levels**.
   * Instant **Agricultural Care Directives** customized for high-value Kenyan cash crops (e.g., coffee, tea, wheat, maize) instructing on mulching, shading, and irrigation schedules.

3. **Season-on-Season Comparison Charts (Recharts Engine)**
   * Interactive **Month-on-Month Historical Climatology** graphs illustrating the traditional bimodal rainfall cycles ("Long Rains" vs "Short Rains") of East African zones.
   * Perspectives toggle: Analyze historical **Precipitation / Sub-surface Hydration Index**, **Thermal Ranges (Max/Avg/Min Temperature curves)**, or **Soil Moisture Estimations**.
   * Styled with precision, including smooth dual-peaked visual curves and translucent area gradients.

4. **Gemini 3.5 Advisory Console**
   * Intelligent, contextual analyses parsed server-side using Gemini.
   * Separate focus filters for:
     * **Daily Living Recommendations**: Daily hydration and shelter plans.
     * **Transit & Safaris Forecasts**: Off-road safari conditions, regional visibility limits, and flight conditions.
     * **Agro-Farming Care**: Deep pruning schedules, active weeding phases, and seedling nursery shading.

5. **Print-Ready Farm Summary (PDF Export)**
   * Custom-designed, single-click formatting engine powered by `jsPDF` for offline utility.
   * Produces elegant **A4 Portrait documents** with customized geometric letterheads, clear diagnostic labels, formatted tables, and structured advisory logs.

---

## 🛠️ Technology Stack & Architecture

- **Backend Api Service**: Node.js, Express, `esbuild`, `tsx`
- **Frontend SPA**: React 18, Vite 6, TypeScript
- **Styling**: Tailwind CSS
- **Visualizations**: Recharts (`composed-charts` with adaptive gradients)
- **Generative Intelligence**: `@google/genai` (utilizing Gemini 3.5 family)
- **Document Generation**: `jspdf` for vector-perfect off-grid reference sheets

---

## 📦 Local Installation & Setup

Follow these simple steps to spin up the application on your computer:

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or above) and **npm** installed.

### 2. Clone & Enter Directory
```bash
git clone <your-repository-url>
cd kenya-agromet-console
```

### 3. Install NPM Packages
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env` file at the root level of your workspace.
```env
# .env file
PORT=3000
GEMINI_API_KEY=your_actual_google_gemini_api_key
WEATHER_AI_KEY=your_optional_third_party_weather_api_key
```

### 5. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 6. Production Compilation
Produce a highly-optimized full-stack production build:
```bash
npm run build
```
This command compiles the frontend static page to `/dist` and bundles the full Express server into `/dist/server.cjs` using `esbuild`.

### 7. Run Production Server
```bash
npm run start
```

---

## 🚀 Deployment to Vercel

The application is fully pre-configured with a dual-system router (`vercel.json`) allowing you to deploy the full-stack setup seamlessly to Vercel Serverless environments.

### Step-by-Step Vercel Deployment

1. **Install Vercel CLI** (Optional, if deploying via terminal):
   ```bash
   npm install -g vercel
   ```

2. **Trigger Deployment**:
   * **Via GitHub Integration (Recommended)**: Import your repository directly from the Vercel dashboard.
   * **Via Terminal Command**: Run the following from the root directory:
     ```bash
     vercel
     ```

3. **Configure Project Settings**:
   During the Vercel import process, verify the configuration:
   * **Framework Preset**: `Vite` (Vercel will auto-detect Vite).
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
   * **Root Directory**: `./`

4. **Inject Environment Variables**:
   Go to **Project Settings > Environment Variables** on Vercel and add:
   * **Name**: `GEMINI_API_KEY`
   * **Value**: *[Your Google Gemini API credentials]*
   * **Name**: `NODE_ENV`
   * **Value**: `production`

5. **Deploy & Share**:
   Vercel will trigger a serverless build, deploy your React frontend assets as static edge blocks, stream `/api/*` interactions to serverless lambda functions (powered by `@vercel/node`), and provide you with a live `.vercel.app` production link.

---

## 🔍 Structural Integrity of `vercel.json`

Our root configuration maps API routing perfectly so that Vercel routes any back-end telemetry to `server.ts` while allowing Vite's index and asset bundle to run natively:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.ts",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server.ts"
    },
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

---

## 📋 Standard Diagnostics & Offline Mode
If you run this application on an isolated local device (no network), the PDF reference and chart engine automatically transition to high-fidelity regional backup generators. This enables uninterrupted farming operations and regional mapping.

# Sehati – Clinic Management Dashboard (client)

Front-end for **Sehati**, a clinic management system. It is a single-page React + TypeScript app styled with Tailwind CSS, with pages for the dashboard, patients, appointments, doctors and settings, plus login/register and legal pages.

The app is currently a **UI prototype**: every page renders hard-coded sample data kept in component state, there is no API layer yet (`axios` is installed but not used), and the login form redirects straight to the dashboard without checking credentials.

## Pages

| Route | Page | What it does |
| --- | --- | --- |
| `/`, `/login` | Login | Email/password form; submitting navigates to `/dashboard` |
| `/register` | Register | Sign-up form with a role select (Patient / Doctor / Admin) and Terms & Privacy modals |
| `/dashboard` | Dashboard | KPI cards (patients, appointments, doctors, revenue), a Chart.js line chart of monthly patient visits and a recent-appointments table |
| `/patients` | Patients | Searchable patient table with an "Add Patient" modal (in-memory) |
| `/appointments` | Appointments | Searchable appointments table with an "Add Appointment" modal (in-memory) |
| `/doctors` | Doctors | Doctor profile cards (name, specialty, phone, email) |
| `/settings` | Settings | Notification email and language (English / Arabic) form |
| `/terms`, `/privacy` | Legal | Terms of Service and Privacy Policy pages |

All routes except login/register share a top navigation bar (`src/layouts/MainLayout.tsx`).

## Stack

- [React](https://react.dev/) 18 + [TypeScript](https://www.typescriptlang.org/) 5
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5)
- [react-router-dom](https://reactrouter.com/) 7
- [Tailwind CSS](https://tailwindcss.com/) 3 (PostCSS + Autoprefixer)
- [Chart.js](https://www.chartjs.org/) 4 via `react-chartjs-2`

## Getting started

Requirements: Node.js 18 or newer and npm.

```bash
npm ci          # install dependencies (uses package-lock.json)
npm start       # dev server on http://localhost:3000
npm run build   # production build into build/
npx tsc --noEmit  # typecheck
```

`npm test` runs the Create React App test runner, but there are no test files yet.

> The repo ships an `.npmrc` with `legacy-peer-deps=true`. `react-scripts` 5 declares an optional peer dependency on TypeScript 3/4 while this project uses TypeScript 5; without that setting npm 7+ refuses to install.

There are no environment variables to configure.

## Project structure

```
src/
  App.tsx                 # routes
  index.tsx               # entry point
  index.css               # Tailwind layers + shared .input class
  layouts/                # MainLayout (Outlet + TopBar), TopBar
  components/common/      # KPICard, ChartPlaceholder, AppointmentTable, Modal, PolicyModal, Logo
  features/
    auth/                 # Login, Register
    dashboard/            # Dashboard
    patients/             # Patients
    appointments/         # Appointments
    doctors/              # Doctors
    settings/             # Settings
    legal/                # Terms, Privacy
```

## Deployment

The app is deployed on Netlify: https://mellifluous-strudel-16e4ee.netlify.app

Netlify builds with `CI=true`, and under that setting `react-scripts build` treats any ESLint warning as an error, so the source has to stay warning-free for a deploy to succeed (or `CI` has to be set to `false` in the site's build environment).

## Continuous integration

`.github/workflows/ci.yml` runs `npm ci`, `npx tsc --noEmit` and `npm run build` on every push and pull request to `master`.

## Related

- [sehati-landing-client](https://github.com/kyan9400/sehati-landing-client) – the public marketing landing page for the same product.

## License

[MIT](LICENSE)

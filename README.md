# wa-utilities-new-poc

[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=typescript&logoColor=white)]()
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat&logo=next.js&logoColor=white)]()
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)]()
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)]()
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)]()

> A modern utility management system built with Next.js, featuring dashboard analytics, contractor management, and job tracking capabilities.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📖 Usage](#-usage)
- [⚙️ Configuration](#️-configuration)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- **Dashboard Analytics** — Interactive charts and metrics for utility data visualization
- **Contractor Management** — Comprehensive contractor profiles and tracking system
- **Job Management** — Create, track, and manage utility jobs with detailed status updates
- **Audit Logging** — Complete audit trail for all system activities and changes
- **Document Management** — Upload and manage attachments and invoices
- **Responsive Design** — Mobile-first design that works across all devices
- **Take Five Safety** — Integrated safety protocols and reporting system
- **Real-time Updates** — Live data synchronization and notifications

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS, CSS-in-JS |
| UI Components | Custom components with Lucide React icons |
| Charts | Chart.js with React-ChartJS-2 |
| State Management | React Context API |
| Code Quality | ESLint, Prettier |

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/munsifhayathd/wa-utilities-new-poc.git
   cd wa-utilities-new-poc
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

### Basic Navigation

The application features a sidebar navigation system with the following main sections:

- **Dashboard** — Overview of system metrics and analytics
- **Jobs** — Manage and track utility jobs
- **Contractors** — Contractor management and profiles
- **Reports** — Generate and view system reports
- **Audit Log** — View system activity and changes

### Creating a New Job

```typescript
// Example job creation flow
import { JobService } from '@/services/job';

const newJob = await JobService.create({
  title: 'Utility Installation',
  contractor: 'contractor-id',
  location: 'Site Address',
  priority: 'high'
});
```

### Dashboard Charts

The dashboard includes interactive charts built with Chart.js:

```typescript
import { JobStatusChart } from '@/components/charts/JobStatusChart';

<JobStatusChart data={jobStatusData} />
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | API base URL | `http://localhost:3000` |
| `DATABASE_URL` | Database connection string | — |
| `JWT_SECRET` | JWT signing secret | — |

### Theme Customization

Modify the theme in `styles/theme.ts`:

```typescript
export const theme = {
  colors: {
    primary: {
      main: '#298f98',
      light: '#33b3bd',
      dark: '#1f6b72',
    },
    // Customize other colors
  }
};
```

### TailwindCSS Configuration

The project uses a custom TailwindCSS configuration with utility-specific color schemes and spacing defined in `tailwind.config.ts`.

## 📁 Project Structure

```
wa-utilities-new-poc/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── jobs/              # Job management pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/                # Base UI components
│   ├── charts/            # Chart components
│   └── forms/             # Form components
├── lib/                   # Utility functions and constants
│   ├── constants/         # App constants
│   ├── utils/             # Helper functions
│   └── services/          # API services
├── types/                 # TypeScript type definitions
├── styles/                # Global styles and theme
├── public/                # Static assets
└── docs/                  # Documentation
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

- Use TypeScript for all new code
- Follow the existing code style and ESLint rules
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/munsifhayathd">munsifhayathd</a>
</p>
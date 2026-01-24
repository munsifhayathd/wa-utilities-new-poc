# wa-utilities-new-poc

[![GitHub Issues](https://img.shields.io/github/issues/munsifhayathd/wa-utilities-new-poc?style=flat&logo=github)](https://github.com/munsifhayathd/wa-utilities-new-poc/issues)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=typescript&logoColor=white)]()
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)]()

> A modern utility management system built with Next.js 14, TypeScript, and Tailwind CSS for streamlined operations and data visualization

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎯 Overview](#-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Prerequisites](#-prerequisites)
- [🚀 Getting Started](#-getting-started)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [📖 Usage](#-usage)
- [📡 API Reference](#-api-reference)
- [⚙️ Configuration](#️-configuration)
- [🧪 Testing](#-testing)
- [📁 Project Structure](#-project-structure)
- [🔧 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- **Modern Dashboard** — Clean, responsive interface with real-time data visualization and interactive charts
- **Authentication System** — Secure route-based authentication with protected dashboard areas
- **Job Management** — Complete CRUD operations for job tracking, status updates, and detailed reporting
- **Contractor Management** — Comprehensive contractor database with profile management and assignment tracking
- **Advanced Filtering** — Dynamic filters and search capabilities across all data tables and views
- **Responsive Design** — Mobile-first approach ensuring perfect functionality across all device sizes
- **TypeScript Safety** — Full type coverage for enhanced developer experience and runtime reliability
- **Performance Optimized** — Server-side rendering with Next.js 14 App Router for optimal loading speeds

## 🎯 Overview

WA Utilities New POC is a comprehensive utility management system designed to streamline operations for utility companies and service providers. The application provides a centralized platform for managing jobs, contractors, and operational data with modern web technologies.

Built with Next.js 14's App Router, the system leverages server-side rendering for optimal performance while maintaining a rich, interactive user experience. The modular architecture supports scalable development with clear separation between authentication flows, dashboard components, and business logic.

The platform addresses common challenges in utility management including job tracking, contractor coordination, audit logging, and comprehensive reporting. With its intuitive interface and robust feature set, teams can efficiently manage their operations while maintaining full visibility into their processes and performance metrics.

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 14.2.16 | React framework with App Router |
| [TypeScript](https://typescriptlang.org) | 5.x | Type-safe development |
| [React](https://react.dev) | 18.x | UI library |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com) | 3.4.1 | Utility-first CSS framework |
| [Lucide React](https://lucide.dev) | 0.471.1 | Icon library |
| [Class Variance Authority](https://cva.style/docs) | 0.7.1 | Component variant management |

### Data Visualization
| Technology | Version | Purpose |
|------------|---------|---------|
| [Chart.js](https://chartjs.org) | 4.4.7 | Chart rendering engine |
| [React Chart.js 2](https://react-chartjs-2.js.org) | 5.3.0 | React wrapper for Chart.js |

### Development Tools
| Technology | Purpose |
|------------|---------|
| ESLint | Code linting and formatting |
| Prettier | Code formatting |
| PostCSS | CSS processing |
| Autoprefixer | CSS vendor prefixing |

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Installation |
|-------------|---------|--------------|
| Node.js | 18+ | [nodejs.org](https://nodejs.org/) |
| npm/yarn/pnpm/bun | Latest | Comes with Node.js |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

### System Requirements
- **OS**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB, Recommended 8GB+
- **Disk**: At least 1GB free space for dependencies

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/munsifhayathd/wa-utilities-new-poc.git
   cd wa-utilities-new-poc
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

   Using pnpm:
   ```bash
   pnpm install
   ```

   Using bun:
   ```bash
   bun install
   ```

### Environment Setup

1. **Copy the environment template**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure environment variables**

   Open `.env.local` and fill in the required values:
   ```env
   # Application
   NODE_ENV=development
   PORT=3000

   # Next.js Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # Authentication (configure based on your auth provider)
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET="your-secret-key-here"

   # Database (if using)
   DATABASE_URL="postgresql://user:password@localhost:5432/wa_utilities"

   # API Keys (if using external services)
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

### Running the Application

**Development mode** (with hot reload):
```bash
npm run dev
```

**Production build and start**:
```bash
npm run build
npm run start
```

**Linting and code quality**:
```bash
npm run lint
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://your-ip:3000

## 📖 Usage

### Basic Navigation

After starting the application, you'll be redirected to the login page. The main application features include:

1. **Dashboard Access**: Navigate through protected routes after authentication
2. **Job Management**: Create, view, and manage utility jobs
3. **Contractor Management**: Handle contractor profiles and assignments
4. **Audit Logging**: Track system activities and changes
5. **Reporting**: Generate and view operational reports

### Component Usage

```typescript
import { Button } from '@/components/ui/button';
import { CustomSelect } from '@/components/ui/custom-select';
import { JobsTable } from '@/components/jobs/jobs-table';

// Using UI components
function MyComponent() {
  return (
    <div className="p-4">
      <Button variant="primary" size="lg">
        Primary Action
      </Button>
      <JobsTable 
        data={jobsData}
        onRowClick={(job) => console.log(job)}
      />
    </div>
  );
}
```

### Styling with Theme

```typescript
import { theme } from '@/styles/theme';

// Using custom theme values
const StyledComponent = () => {
  return (
    <div className="bg-primary-main text-white hover:bg-primary-dark">
      Themed Component
    </div>
  );
};
```

### Chart Integration

```typescript
import { Line } from 'react-chartjs-2';
import { JobStatusChart } from '@/components/charts/job-status-chart';

// Using Chart.js components
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Jobs Completed',
    data: [12, 19, 3, 5, 2],
    borderColor: '#298f98',
  }]
};

function Dashboard() {
  return <Line data={data} />;
}
```

## 📡 API Reference

### Authentication

The application uses route-based authentication. Protected routes automatically redirect to login if not authenticated.

```typescript
// Accessing protected routes
const router = useRouter();

// Programmatic navigation to protected areas
router.push('/dashboard');
```

### Internal API Routes

#### Job Management

```typescript
// GET /api/jobs - Retrieve jobs list
const response = await fetch('/api/jobs?page=1&limit=20');
const { data, pagination } = await response.json();

// POST /api/jobs - Create new job
const newJob = await fetch('/api/jobs', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'New Utility Job',
    description: 'Job description',
    contractorId: 'contractor-id',
    priority: 'high'
  })
});
```

#### Contractor Management

```typescript
// GET /api/contractors - Retrieve contractors
const contractors = await fetch('/api/contractors');

// PUT /api/contractors/:id - Update contractor
const updated = await fetch(`/api/contractors/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedData)
});
```

### Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

### Error Handling

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": [
      { "field": "email", "message": "Must be a valid email" }
    ]
  }
}
```

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NODE_ENV` | No | `development` | Environment mode |
| `PORT` | No | `3000` | Server port |
| `NEXT_PUBLIC_APP_URL` | Yes | — | Public application URL |
| `NEXTAUTH_URL` | No | `http://localhost:3000` | NextAuth base URL |
| `NEXTAUTH_SECRET` | Yes | — | NextAuth encryption secret |
| `DATABASE_URL` | No | — | Database connection string |

### Tailwind Configuration

The project uses a custom Tailwind configuration with utility-specific colors and spacing:

```javascript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#298f98',
          light: '#33b3bd',
          dark: '#1f6b72',
        },
        secondary: {
          main: '#982937',
          light: '#bd3344',
          dark: '#721f29',
        },
        // Custom utility colors and variants
      },
      width: {
        'sidebar-expanded': '250px',
        'sidebar-collapsed': '64px',
      }
    }
  }
};
```

### TypeScript Configuration

Path mapping is configured for clean imports:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Next.js Configuration

The project uses the App Router with TypeScript support and optimized font loading through `next/font`.

## 🧪 Testing

### Running Tests

```bash
# Run all tests (when implemented)
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code (if Prettier is configured)
npm run format

# Build verification
npm run build
```

### Recommended Testing Structure

```
tests/
├── __tests__/          # Jest test files
├── components/         # Component tests
├── pages/             # Page tests
├── utils/             # Utility function tests
└── fixtures/          # Test data
```

## 📁 Project Structure

```
wa-utilities-new-poc/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Auth route group
│   │   └── login/             # Login page
│   ├── (dashboard)/           # Dashboard route group
│   │   ├── audit-log/         # Audit log pages
│   │   ├── contractors/       # Contractor management
│   │   ├── home/              # Dashboard home
│   │   ├── jobs/              # Job management
│   │   └── reports/           # Reports section
│   ├── api/                   # API routes (if any)
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Root page (redirects)
├── components/                # React components
│   ├── ui/                    # Base UI components
│   │   ├── button.tsx         # Button component
│   │   ├── card.tsx           # Card component
│   │   ├── input.tsx          # Input component
│   │   └── custom-select.tsx  # Custom select
│   ├── charts/                # Chart components
│   ├── forms/                 # Form components
│   ├── tables/                # Table components
│   └── layout/                # Layout components
├── lib/                       # Utility functions
│   ├── utils.ts               # General utilities
│   ├── constants/             # Application constants
│   └── config.ts              # Configuration
├── styles/                    # Styling
│   └── theme.ts               # Theme configuration
├── types/                     # TypeScript definitions
├── public/                    # Static assets
│   └── favicon.ico            # Site favicon
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies & scripts
└── README.md                  # This file
```

### Key Directories Explained

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js 14 App Router pages and layouts |
| `app/(auth)/` | Authentication-related pages |
| `app/(dashboard)/` | Protected dashboard pages |
| `components/ui/` | Reusable base UI components |
| `lib/` | Business logic and utility functions |
| `styles/` | Theme and styling configurations |
| `types/` | TypeScript type definitions |

## 🔧 Troubleshooting

### Common Issues

<details>
<summary><strong>Installation fails with node-gyp errors</strong></summary>

This usually indicates missing build tools for native dependencies.

**Solution:**
```bash
# macOS
xcode-select --install

# Ubuntu/Debian
sudo apt-get install build-essential

# Windows
npm install --global windows-build-tools
```
</details>

<details>
<summary><strong>Port 3000 already in use</strong></summary>

Another process is using the default port.

**Solution:**
```bash
#Change port in package.json or use environment variable
PORT=3001 npm run dev

# Or kill the process using port 3000
sudo lsof -ti:3000 | xargs kill -9
```
</details>

<details>
<summary><strong>TypeScript compilation errors</strong></summary>

Type checking issues during development or build.

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Run type checking
npm run type-check
```
</details>

<details>
<summary><strong>Styling not loading correctly</strong></summary>

Tailwind CSS not applying styles or custom styles not working.

**Solution:**
```bash
# Ensure Tailwind is properly configured
npm run build

# Check if custom CSS is properly imported
# Verify tailwind.config.ts paths are correct
```
</details>

<details>
<summary><strong>Authentication redirects not working</strong></summary>

Route protection or authentication flow issues.

**Solution:**
- Verify `NEXTAUTH_URL` matches your development URL
- Check `NEXTAUTH_SECRET` is set in `.env.local`
- Clear browser cookies and localStorage
- Restart development server
</details>

### Performance Issues

**Slow initial load:**
- Verify you're running in development mode for hot reload
- Check if large dependencies are being loaded client-side
- Review Next.js bundle analyzer output

**Memory issues during development:**
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run dev
```

### Getting Help

1. **Check the console** — Browser DevTools Console and terminal output
2. **Verify environment** — Ensure all required environment variables are set
3. **Clear caches** — Remove `.next/` directory and `node_modules/`
4. **Update dependencies** — Run `npm update` for latest compatible versions
5. **GitHub Issues** — Search existing issues or create a new one

**Debugging Commands:**
```bash
# Check Node.js and npm versions
node --version && npm --version

# Verify package.json scripts
npm run

# Check for outdated packages
npm outdated
```

## 🤝 Contributing

We welcome contributions to the WA Utilities New POC project! Please follow these guidelines to ensure a smooth collaboration process.

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/wa-utilities-new-poc.git
   cd wa-utilities-new-poc
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Workflow

1. **Install dependencies** and set up your development environment
2. **Make your changes** following the project's coding standards
3. **Test your changes** thoroughly
4. **Commit your changes** using conventional commit format:
   ```bash
   git commit -m "feat: add new dashboard component"
   git commit -m "fix: resolve authentication redirect issue"
   git commit -m "docs: update API documentation"
   ```

### Commit Convention

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

- `feat:` — New features
- `fix:` — Bug fixes  
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting, etc.)
- `refactor:` — Code refactoring
- `test:` — Adding or updating tests
- `chore:` — Maintenance tasks

### Pull Request Process

1. **Update documentation** if needed
2. **Ensure all tests pass** (once implemented)
3. **Run linting** with `npm run lint`
4. **Push to your fork** and create a pull request
5. **Provide clear description** of changes and motivation
6. **Link relevant issues** if applicable

### Code Style Guidelines

- **TypeScript**: Use proper typing, avoid `any` type
- **React**: Follow React best practices and hooks patterns
- **Tailwind**: Use utility classes, avoid inline styles
- **File naming**: Use kebab-case for files, PascalCase for components
- **Import order**: External packages, internal modules, relative imports

### Areas for Contribution

- 🐛 **Bug fixes** — Help resolve reported issues
- ✨ **New features** — Add functionality to enhance the platform
- 📚 **Documentation** — Improve README, add code comments
- 🧪 **Testing** — Add unit tests and integration tests
- 🎨 **UI/UX** — Improve design and user experience
- ⚡ **Performance** — Optimize loading times and responsiveness

Thank you for contributing to WA Utilities New POC! Your contributions help make this project better for everyone.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 WA Utilities New POC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Third-party Licenses

This project uses several open-source packages. Key dependencies and their licenses:

- **Next.js** (MIT) — React framework
- **React** (MIT) — UI library  
- **Tailwind CSS** (MIT) — CSS framework
- **Chart.js** (MIT) — Charting library
- **Lucide React** (ISC) — Icon library

For a complete list of dependencies and their licenses, run:
```bash
npm run licenses
```

---

<div align="center">

**Made with ❤️ by the WA Utilities Team**

⭐ **Found this helpful? Give it a star!** ⭐

</div>

<div align="right">
  <a href="#wa-utilities-new-poc">🔝 Back to Top</a>
</div>
# WA Utilities New POC

[![GitHub Issues](https://img.shields.io/github/issues/munsifhayathd/wa-utilities-new-poc?style=flat&logo=github)](https://github.com/munsifhayathd/wa-utilities-new-poc/issues)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=typescript&logoColor=white)]()
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)]()

> A modern utility management system built with Next.js 14, TypeScript, and Tailwind CSS for streamlined operations and enhanced user experience.

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

- **Modern Dashboard Interface** — Intuitive dashboard with comprehensive job management, contractor tracking, and real-time status monitoring
- **Advanced Job Management** — Complete job lifecycle management with detailed tracking, status updates, and progress monitoring
- **Contractor Management System** — Comprehensive contractor database with performance tracking and evaluation metrics
- **Interactive Charts & Analytics** — Real-time data visualization with Chart.js integration for insights and reporting
- **Responsive Design** — Mobile-first approach with Tailwind CSS ensuring seamless experience across all devices
- **Type-Safe Development** — Full TypeScript implementation for enhanced developer experience and code reliability
- **Component-Based Architecture** — Modular React components with shadcn/ui for consistent and maintainable UI
- **Route-Based Organization** — Next.js App Router with organized route groups for authentication and main dashboard
- **Audit Logging** — Comprehensive audit trail system for tracking all user actions and system changes
- **Real-Time Notifications** — Dynamic notification system with detailed notification management

## 🎯 Overview

WA Utilities New POC is a comprehensive utility management system designed to streamline operations for utility companies and service providers. Built on Next.js 14 with the latest App Router, this application provides a modern, type-safe, and scalable solution for managing jobs, contractors, and operational workflows.

The system addresses common challenges in utility management by providing centralized job tracking, contractor performance monitoring, and real-time analytics. With its modular architecture and responsive design, it serves utility managers, field supervisors, and administrative staff who need efficient tools for operational oversight.

Key benefits include reduced manual processes, improved visibility into operations, enhanced contractor accountability, and data-driven decision making through comprehensive analytics and reporting capabilities.

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.2.16 | React framework with App Router |
| [React](https://reactjs.org/) | 18.x | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe JavaScript |

### UI & Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.1 | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | 0.471.1 | Modern icon library |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | Component library |
| [Class Variance Authority](https://cva.style/) | 0.7.1 | Component variants |

### Data Visualization
| Technology | Version | Purpose |
|------------|---------|---------|
| [Chart.js](https://www.chartjs.org/) | 4.4.7 | Chart library |
| [React Chart.js 2](https://react-chartjs-2.js.org/) | 5.3.0 | React wrapper for Chart.js |

### Development Tools
| Technology | Purpose |
|------------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| PostCSS | CSS processing |
| Autoprefixer | CSS vendor prefixing |

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Installation |
|-------------|---------|--------------|
| Node.js     | 18+     | [nodejs.org](https://nodejs.org/) |
| npm/yarn/pnpm/bun | Latest | Comes with Node.js |
| Git         | Latest  | [git-scm.com](https://git-scm.com/) |

### System Requirements
- **OS**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB, Recommended 8GB+
- **Disk**: At least 500MB free space
- **Browser**: Modern browser (Chrome 90+, Firefox 88+, Safari 14+)

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
   # Application Configuration
   NODE_ENV=development
   PORT=3000
   
   # Next.js Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_APP_NAME="WA Utilities"
   
   # Authentication (when implemented)
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL=http://localhost:3000
   
   # Database (when implemented)
   DATABASE_URL="postgresql://user:password@localhost:5432/wa_utilities"
   
   # External APIs (configure as needed)
   API_BASE_URL=http://localhost:3000/api
   ```

### Running the Application

**Development mode** (with hot reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm run build
npm run start
```

**Linting**:
```bash
npm run lint
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://your-ip:3000

## 📖 Usage

### Basic Navigation

After starting the application, you'll be redirected to the login page. The system currently uses route-based navigation with the following structure:

```typescript
// Main application routes
const routes = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  JOBS: '/jobs',
  CONTRACTORS: '/contractors',
  REPORTS: '/reports',
  AUDIT_LOG: '/audit-log',
  NOTIFICATIONS: '/notifications',
};
```

### Component Usage

The application uses a component-based architecture with reusable UI components:

```typescript
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CustomSelect } from '@/components/CustomSelect';

// Basic component usage
<Button variant="primary" size="md">
  Click Me
</Button>

<Card className="p-4">
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>
```

### Styling with Tailwind CSS

The application uses a custom color palette defined in the Tailwind configuration:

```css
/* Primary colors */
.bg-primary-main { background-color: #298f98; }
.bg-primary-light { background-color: #33b3bd; }
.bg-primary-dark { background-color: #1f6b72; }

/* Status colors */
.text-status-success { color: #2a9844; }
.text-status-warning { color: #f0b429; }
.text-status-error { color: #e12d39; }
```

### Chart Implementation

```typescript
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ['Completed', 'In Progress', 'Pending'],
  datasets: [{
    data: [65, 25, 10],
    backgroundColor: ['#2a9844', '#f0b429', '#e12d39'],
  }]
};

<Doughnut data={chartData} />
```

## 📡 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/jobs` | List all jobs with filtering |
| `GET` | `/api/jobs/:id` | Get job details by ID |
| `POST` | `/api/jobs` | Create new job |
| `PUT` | `/api/jobs/:id` | Update job information |
| `DELETE` | `/api/jobs/:id` | Delete job |
| `GET` | `/api/contractors` | List all contractors |
| `GET` | `/api/contractors/:id` | Get contractor details |
| `POST` | `/api/contractors` | Create new contractor |
| `GET` | `/api/notifications` | Get user notifications |
| `POST` | `/api/notifications` | Create notification |
| `GET` | `/api/audit-log` | Retrieve audit logs |
| `GET` | `/api/reports` | Generate reports |

> **Note**: API endpoints are currently being implemented. Check the `app/api` directory for available routes.

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NODE_ENV` | No | `development` | Environment mode |
| `PORT` | No | `3000` | Application port |
| `NEXT_PUBLIC_APP_URL` | Yes | — | Application base URL |
| `NEXT_PUBLIC_APP_NAME` | No | `WA Utilities` | Application name |
| `NEXTAUTH_SECRET` | Yes* | — | Authentication secret (*when auth is implemented) |
| `NEXTAUTH_URL` | Yes* | — | Authentication callback URL |
| `DATABASE_URL` | Yes* | — | Database connection string (*when DB is connected) |

### Tailwind Configuration

The application uses a custom Tailwind configuration with extended colors and utilities:

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
        status: {
          success: '#2a9844',
          warning: '#f0b429',
          error: '#e12d39',
          info: '#2563eb',
        },
      },
      width: {
        'sidebar-expanded': '250px',
        'sidebar-collapsed': '64px',
      },
      height: {
        'header': '64px',
      },
    }
  }
};
```

### Component Configuration

Create custom component variants using Class Variance Authority:

```typescript
// components/ui/button.tsx
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary-main text-white hover:bg-primary-dark",
        secondary: "bg-secondary-main text-white hover:bg-secondary-dark",
        outline: "border border-input hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests (when test suite is implemented)
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check

# Linting
npm run lint
```

### Test Structure

```
tests/
├── __tests__/          # Test files
├── __mocks__/          # Mock files
├── fixtures/           # Test data
└── utils/              # Test utilities
```

### Writing Tests

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText('Secondary');
    expect(button).toHaveClass('bg-secondary-main');
  });
});
```

## 📁 Project Structure

```
wa-utilities-new-poc/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Authentication routes
│   │   └── login/              # Login page
│   ├── (dashboard)/            # Dashboard routes
│   │   ├── dashboard/          # Main dashboard
│   │   ├── jobs/              # Job management
│   │   ├── contractors/        # Contractor management
│   │   ├── reports/           # Reports and analytics
│   │   ├── audit-log/         # Audit logging
│   │   └── notifications/      # Notification system
│   ├── api/                    # API routes (future implementation)
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Root page (redirects to login)
├── components/                 # React components
│   ├── ui/                    # Base UI components (shadcn/ui)
│   │   ├── button.tsx         # Button component
│   │   ├── card.tsx           # Card component
│   │   └── input.tsx          # Input component
│   ├── Header/                # Header component
│   ├── Sidebar/               # Navigation sidebar
│   ├── CustomSelect.tsx       # Custom select component
│   ├── ContractorTable.tsx    # Contractor table
│   ├── JobsTable.tsx          # Jobs table
│   └── JobStatusChart.tsx     # Chart components
├── lib/                       # Utilities and configuration
│   ├── utils.ts              # Common utilities
│   └── constants/            # Application constants
├── styles/                    # Styling
│   └── theme.ts              # Theme configuration
├── types/                     # TypeScript type definitions
├── public/                    # Static assets
│   └── favicon.ico           # Application favicon
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── .gitignore                # Git ignore rules
├── components.json           # shadcn/ui configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

### Key Directories Explained

| Directory | Purpose |
|-----------|---------|
| `app/(auth)` | Authentication-related pages and layouts |
| `app/(dashboard)` | Main application pages with dashboard layout |
| `components/ui` | Base UI components from shadcn/ui |
| `components/` | Feature-specific and custom components |
| `lib/` | Utility functions, constants, and configurations |
| `styles/` | Theme definitions and styling utilities |
| `types/` | TypeScript type definitions and interfaces |

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
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev

# Or set in .env.local
echo "PORT=3001" >> .env.local
```
</details>

<details>
<summary><strong>TypeScript errors after pulling latest changes</strong></summary>

Dependencies or types may be out of sync.

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json  # or yarn.lock/pnpm-lock.yaml
npm install

# Clear Next.js cache
rm -rf .next
npm run build
```
</details>

<details>
<summary><strong>Styles not loading correctly</strong></summary>

Tailwind CSS might not be processing correctly.

**Solution:**
```bash
# Check Tailwind configuration
npm run build

# Clear browser cache
# Or open in incognito/private mode

# Verify globals.css imports
# Ensure @tailwind directives are present
```
</details>

<details>
<summary><strong>Environment variables not loading</strong></summary>

Next.js has specific rules for environment variable loading.

**Solution:**
- Ensure `.env.local` exists in project root
- Prefix client-side variables with `NEXT_PUBLIC_`
- Restart the development server after changing env vars
```bash
npm run dev
```
</details>

### Getting Help

If you're still experiencing issues:

1. Check [existing issues](https://github.com/munsifhayathd/wa-utilities-new-poc/issues)
2. Search [Next.js documentation](https://nextjs.org/docs)
3. Open a [new issue](https://github.com/munsifhayathd/wa-utilities-new-poc/issues/new) with:
   - Node.js version (`node -v`)
   - npm/yarn version
   - Operating system
   - Error message and stack trace
   - Steps to reproduce
   - Branch name (currently: `development`)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Development Workflow

1. **Fork the repository**

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/wa-utilities-new-poc.git
   cd wa-utilities-new-poc
   ```

3. **Switch to development branch**
   ```bash
   git checkout development
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add TypeScript types for new features
   - Use existing component patterns

6. **Run quality checks**
   ```bash
   npm run lint        # Check code style
   npm run build       # Check build process
   # npm run test      # Run tests (when available)
   ```

7. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation updates
   - `style:` Code formatting changes
   - `refactor:` Code restructuring
   - `test:` Adding tests
   - `chore:` Build process or auxiliary tool changes

8. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

- **TypeScript**: Use TypeScript for all new code with proper typing
- **Components**: Follow the established component structure in `/components`
- **Styling**: Use Tailwind CSS classes with the custom theme
- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Code will be automatically formatted
- **File Organization**: Place files in appropriate directories based on the project structure

### Component Development

When adding new components:

```typescript
// components/YourComponent.tsx
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface YourComponentProps extends ComponentProps<'div'> {
  variant?: 'default' | 'secondary';
  customProp?: string;
}

export function YourComponent({ 
  variant = 'default', 
  customProp, 
  className, 
  ...props 
}: YourComponentProps) {
  return (
    <div 
      className={cn(
        'base-styles',
        variant === 'secondary' && 'secondary-styles',
        className
      )}
      {...props}
    >
      {/* Component content */}
    </div>
  );
}
```

## 📄 License

This project is licensed under the **MIT** License.

See the [LICENSE](LICENSE) file for full details.

```
Copyright (c) 2026 munsifhayathd
```

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/munsifhayathd">munsifhayathd</a>
</p>

<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>

<p align="center">
  <sub>📝 README generated with <a href="https://readify.dev">Readify</a></sub>
</p>I notice that my previous response actually included all the required sections, including the License section and the complete footer with Readify branding. The README is already complete and ends with:

```markdown
## 📄 License

This project is licensed under the **MIT** License.

See the [LICENSE](LICENSE) file for full details.

```
Copyright (c) 2026 munsifhayathd
```

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/munsifhayathd">munsifhayathd</a>
</p>

<p align="center">
  <a href="#top">⬆️ Back to Top</a>
</p>

<p align="center">
  <sub>📝 README generated with <a href="https://readify.dev">Readify</a></sub>
</p>
```

The README is comprehensive and complete with all required sections:
- ✅ Header with badges
- ✅ Table of Contents
- ✅ Features section
- ✅ Overview section
- ✅ Tech Stack section
- ✅ Prerequisites section
- ✅ Getting Started section
- ✅ Usage section
- ✅ API Reference section
- ✅ Configuration section
- ✅ Testing section
- ✅ Project Structure section
- ✅ Troubleshooting section
- ✅ Contributing section
- ✅ License section (REQUIRED)
- ✅ Footer with "Made with ❤️"
- ✅ "Back to Top" link
- ✅ Readify branding (REQUIRED)

The README is ready for use and meets all the requirements specified in the prompt.
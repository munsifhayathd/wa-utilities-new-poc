# Frontend Requirements Specification

## Overview
This document outlines the functional requirements for the utility system's frontend implementation, including authentication, job management, audit logs, reporting, and other critical functionalities.

## 1. Authentication & Navigation

### Login System
- Implement secure user authentication
- Provide login/logout functionality
- Handle session management

### Navigation
Implement a collapsible side navigation bar with the following sections:
- Jobs
- Audit Log
- Report
- Contract
- Log Out

## 2. Job Management

### Job List View
Display all jobs imported through the ATCO portal with the following attributes:
- Notification Number
- Location
- Area
- Task Type
- Status
- Plan and Date Assigned
- Contractor
- Contractor Status
- Action buttons/links

### Job Details View
- Detailed information display for individual jobs
- Contractor update functionality
- Job assignment workflow:
  1. Admin → Contractor assignment
  2. Contractor → Worker assignment
  3. Collaborative work environment for both contractor and worker

## 3. Audit Log

### Log Display
Show import/export records with:
- Record Type (Import/Export)
- Date and Time of Action
- Status (Completed/Not Completed)
- Number of Records Processed

## 4. Reporting System

### Financial Reports
Dashboard displaying:
- Total WCT earnings
- Total contractor earnings
- Monthly/yearly summaries
- Job type earnings breakdown

### Contractor Reports
Statistics display:
- Completed jobs count
- Pending jobs count
- Download functionality

### Job Reports
Display:
- Completion statistics
- Total job counts
- WCT earnings per job type

### List Views
Provide distinct listings for:
- Contractors
- Workers
- Jobs with attached images (with image preview)

## 5. System Logging
- Implement comprehensive activity logging
- Display system actions and debug information
- Maintain searchable log history

## Technical Requirements

### General Guidelines
1. We will be using Mock data for the frontend. 
2. Ensure template-ready module structure
3. Implement export/download functionality
4. Maintain strict data access controls
5. Design user-friendly interfaces
6. Ensure responsive design for all views
7. Implement proper error handling and user feedback

### Data Integrity
- Implement validation for all form inputs
- Ensure proper data synchronization
- Maintain audit trails for all modifications

### Performance
- Optimize image loading and display
- Implement pagination for large data sets
- Ensure quick response times for all operations

## Notes
- All modules should be scalable and maintainable
- Follow consistent design patterns
- Implement proper loading states and error boundaries
- Ensure cross-browser compatibility

## Project Structure
WA-UTILITIES
├── .next
├── app
├── lib
├── node_modules
├── requirements
│   ├── frontend.md
│   └── progress.md
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json


## Working Modes :

You will operate in two modes: Brainstorming Mode and Implementation Mode.

1. Brainstorming Mode
	•	Discuss and Clarify: Ask questions, confirm understanding, and discuss workflows.
	•	Plan Only: Outline steps for implementation but do not write any code.

2. Implementation Mode
	•	Execute: Implement the agreed plan, modify files, and write code.
	•	Update: Inform me of progress or issues and seek clarification if needed.

I will explicitly tell you when to switch modes. Always confirm before proceeding.


## Color Palette

### Primary Colors
- Primary: #298f98 (Teal)
- Primary Light: #33b3bd
- Primary Dark: #1f6b72

### Secondary Colors
- Secondary: #982937 (Complementary Red)
- Secondary Light: #bd3344
- Secondary Dark: #721f29

### Neutral Colors
- Gray-50: #f8fafa
- Gray-100: #edf1f1
- Gray-200: #e1e7e7
- Gray-300: #c2cdcd
- Gray-400: #94a3a3
- Gray-500: #708484
- Gray-600: #4b5959
- Gray-700: #363f3f
- Gray-800: #242929
- Gray-900: #121414

### Accent Colors
- Success: #2a9844
- Warning: #f0b429
- Error: #e12d39
- Info: #2563eb

### Status Colors
- Active: #29989f
- Pending: #f0b429
- Completed: #2a9844
- Failed: #e12d39

### Background Colors
- Background-Light: #f8fafa
- Background-Default: #ffffff
- Background-Dark: #edf1f1

### Semantic Usage
- Text-Primary: #242929
- Text-Secondary: #4b5959
- Text-Disabled: #94a3a3
- Border-Default: #e1e7e7
- Border-Focus: #298f98
- Link: #33b3bd
- Link-Hover: #1f6b72

### Opacity Variants
- Primary-10: rgba(41, 143, 152, 0.1)
- Primary-20: rgba(41, 143, 152, 0.2)
- Primary-50: rgba(41, 143, 152, 0.5)

### Notes on Usage
- Use Primary colors for main actions, headers, and key UI elements
- Secondary colors for calls-to-action and accent elements
- Neutral colors for text, backgrounds, and borders
- Status colors to indicate different states
- Maintain WCAG 2.1 AA contrast ratios for accessibility
- Use opacity variants for overlays, hover states, and subtle backgrounds


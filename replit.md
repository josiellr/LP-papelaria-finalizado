# Kit de Festas Lucrativas - Landing Page

## Overview

This is a conversion-focused landing page for "Kit de Festas Lucrativas" (Profitable Party Kit), a Brazilian digital product offering 430+ customizable party templates. The application is a single-page React application built with TypeScript, featuring a full-stack architecture with Express.js backend, though currently operating primarily as a static landing page with plans for future checkout integration.

The product targets Brazilian mothers, artisans, and entrepreneurs looking to generate extra income by selling personalized party supplies using Canva templates.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (currently serving landing page and 404 page)

**UI Component System**
- **shadcn/ui** (New York style variant) - A collection of re-usable components built on Radix UI primitives
- **Radix UI** primitives for accessible, unstyled UI components (accordion, dialog, navigation, etc.)
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** and **clsx** for dynamic className composition

**Design System**
- Custom color system using HSL values with CSS variables for theming
- Typography: Poppins (headings) and Inter (body text) from Google Fonts
- Responsive breakpoints following Tailwind's default system (sm, md, lg)
- Custom spacing scale and border radius values defined in tailwind.config.ts
- Hover and active state elevations using CSS variables (--elevate-1, --elevate-2)

**State Management**
- **TanStack Query (React Query)** v5 for server state management and data fetching
- Local component state using React hooks
- Custom hooks for reusable logic (use-mobile, use-toast)

**Form Handling**
- **React Hook Form** for performant form state management
- **@hookform/resolvers** for validation schema integration
- **Zod** for runtime type validation (via drizzle-zod)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- Middleware for JSON parsing, URL encoding, and request logging
- Custom Vite middleware integration for development HMR
- Request/response logging with duration tracking for API routes

**Storage Layer**
- **In-memory storage** (MemStorage class) currently implemented as a temporary solution
- Interface-based design (IStorage) allows for easy swapping to persistent storage
- Prepared for PostgreSQL integration via Drizzle ORM

**Database (Planned)**
- **Drizzle ORM** configured for PostgreSQL with schema defined in shared/schema.ts
- **Neon Database** serverless driver (@neondatabase/serverless)
- Migration system using drizzle-kit
- Type-safe schema with Zod validation via drizzle-zod

**Build & Deployment**
- Development: tsx for TypeScript execution with hot reload
- Production: esbuild for server bundling, Vite for client assets
- Static file serving in production mode

### Project Structure

**Monorepo Organization**
- `/client` - Frontend React application
  - `/src/components` - Reusable UI components and sections
  - `/src/pages` - Page-level components
  - `/src/lib` - Utilities and configuration
  - `/src/hooks` - Custom React hooks
- `/server` - Backend Express application
- `/shared` - Shared types, schemas, and utilities
- `/attached_assets` - Static assets and content files
- `/migrations` - Database migration files (when using Drizzle)

**Component Architecture**
- Modular section-based components (Hero, Pricing, Testimonials, etc.)
- Each major landing page section is a separate component
- Example components in `/components/examples` for development/testing
- Shared UI primitives in `/components/ui` following shadcn/ui patterns

### Data Flow

**Current Implementation**
- Static content rendered from component definitions
- No external API calls or database queries
- Mock data for testimonials and features marked with TODO comments
- Scroll-to-section navigation using DOM manipulation

**Planned Implementation**
- Checkout links integration (currently mocked with "#" href)
- WhatsApp integration for customer support
- Analytics tracking for conversion optimization
- Potential form submissions for lead capture

### Styling Approach

**Tailwind Configuration**
- Custom color palette using CSS variables for light/dark mode support
- Component-specific styling with utility classes
- Responsive design mobile-first approach
- Custom utilities for elevation effects (hover-elevate, active-elevate-2)
- PostCSS with autoprefixer for cross-browser compatibility

**Design Principles**
- Festive professionalism balancing celebration with credibility
- Conversion-focused layout with clear visual hierarchy
- Social proof emphasis throughout the page
- Urgency elements (dynamic date badge, limited-time offers)

## External Dependencies

### Core Framework Dependencies
- **React** 18.x - UI library
- **Express** 4.x - Backend web framework
- **TypeScript** 5.x - Type system
- **Vite** 5.x - Build tool and dev server

### UI Component Libraries
- **@radix-ui/react-*** - Collection of accessible component primitives (accordion, dialog, dropdown, navigation, etc.)
- **lucide-react** - Icon library
- **cmdk** - Command menu component
- **embla-carousel-react** - Carousel/slider component
- **react-day-picker** - Date picker component
- **vaul** - Drawer component

### Form & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolver
- **zod** - Schema validation library

### Data Fetching
- **@tanstack/react-query** v5 - Server state management

### Database & ORM (Configured but not actively used)
- **drizzle-orm** - TypeScript ORM
- **drizzle-zod** - Zod schema generation from Drizzle schemas
- **@neondatabase/serverless** - PostgreSQL serverless driver
- **connect-pg-simple** - PostgreSQL session store (dependency present)

### Styling
- **tailwindcss** - Utility-first CSS framework
- **autoprefixer** - CSS vendor prefixing
- **class-variance-authority** - Variant-based component styling
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes intelligently

### Utilities
- **date-fns** - Date manipulation and formatting (used for dynamic date badge)
- **nanoid** - Unique ID generation
- **wouter** - Lightweight routing library

### Development Tools (Replit-specific)
- **@replit/vite-plugin-runtime-error-modal** - Runtime error overlay
- **@replit/vite-plugin-cartographer** - Code navigation
- **@replit/vite-plugin-dev-banner** - Development banner

### Third-Party Services (Referenced but not integrated)
- **WhatsApp** - Customer support (+55 74 9922-7606)
- **Canva** - Template editing platform (mentioned in product content)
- Payment processor integration (planned, not implemented)

### Asset Management
- Google Fonts API - Poppins and Inter font families
- Local image assets stored in `/attached_assets/generated_images`
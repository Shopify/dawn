# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Theme Development

```bash
# Start Shopify theme development server
npm run dev

# Pull theme from Shopify store
npm run pull

# Run Theme Check for Liquid validation
shopify theme check
```

### React Components Development

```bash
# Navigate to React workspace
cd reax

# Start Vite development server for React components
npm run dev

# Build React components (outputs to ../assets/ with vx- prefix)
npm run build

# Generate TypeScript types from GraphQL schema
npm run codegen
```

## Architecture Overview

This is a hybrid Shopify Dawn theme that integrates React components for enhanced product customization services. The architecture consists of:

### Core Integration Pattern

- **Shopify Liquid Theme**: Standard Dawn theme structure for e-commerce functionality
- **React Components**: Built separately in `/reax/` and compiled to `/assets/` with `vx-` prefix
- **Service Integration**: Custom services (stringing, remix, tshirt-printing) embedded via Liquid snippets

  - Flexbox-based, NOT CSS Grid - Dawn uses display: flex with percentage widths
  - Responsive breakpoints: 750px (tablet), 990px (desktop)
  - Grid columns: Calculated with calc() formulas accounting for spacing variables
  - Classes: .grid--3-col-desktop, .grid--4-col-desktop, etc.

  - Sections cannot access other sections in Liquid - major limitation discovered
  - Blocks within sections work perfectly - self-contained approach is best
  - Schema-driven configuration - extensive use of Shopify section settings

### Data Flow

- **Liquid → JavaScript**: Global variables set in templates expose Shopify data to React components
- **Form Integration**: React components sync with HTML forms via DOM manipulation and custom validation
- **Cart Bundling**: Services add additional line items with properties linking to main products

### React Build System

- **Vite Configuration**: Builds multiple entry points for each service component
- **Asset Output**: React bundles output to `/assets/` directory for theme consumption
- **Code Splitting**: Each service is a separate bundle with shared dependencies extracted

### Service Architecture

Each custom service follows this pattern:

1. **Liquid Snippet** (e.g., `snippets/remix.liquid`) - Provides wrapper and loading logic
2. **React Component** (e.g., `reax/src/components/remix/`) - Handles complex interactions
3. **Form Integration** - Validates and submits via main product form in `assets/product-form.js`

### Key Global Variables

Services communicate through window variables:

- `window.s3_*` - Service-specific configuration and data
- `window.routes` - Shopify API endpoints
- `window.s3_current_variant_sku` - Current product variant for service linking

### Brand Support

Multi-brand architecture with conditional logic based on `window.s3_brand` and domain detection (`hndrd.co` vs others).

## File Structure Notes

- **Main Theme**: Standard Shopify structure (sections/, snippets/, templates/, layout/, assets/)
- **React Workspace**: `/reax/` contains all React components and build configuration
- **Service Components**: Each service has its own directory in `reax/src/components/`
- **Type Definitions**: GraphQL types generated in `reax/src/lib/types/`

## Development Workflow

1. **Theme Changes**: Edit Liquid files directly, use `npm run dev` for live reload
2. **React Changes**: Work in `/reax/`, use `npm run build` to compile to assets
3. **Service Integration**: React components load lazily when services are selected
4. **Testing**: Services integrate with main product form validation and cart functionality

## Development Principles

### Always Find the Most Direct and Minimal Solution

- **Work WITH existing code structure**, don't rebuild it
- **Leverage existing functionality** instead of replacing it
- **Add minimal changes** to achieve the desired result
- Always check the existing patterns in the codebase first, respect the framework's limitations

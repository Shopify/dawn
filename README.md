# Rave Yoga Shopify Theme (Customized Dawn v15.3.0)

This project involves migrating the Readymag site `rave-yoga.com` to Shopify, using a customized version of the Dawn theme (v15.3.0). The primary goal is to replicate the design of the original site, starting with the header.

## Project Information

- **Base Theme:** Dawn v15.3.0
- **Staging Store:** `01bb23-0a.myshopify.com` (or your specific development store)
- **Live Site (Original):** `rave-yoga.com`

## Development Setup

This theme is developed using the Shopify CLI.

### Prerequisites:

1.  **Node.js and npm/nvm:**
    - It's recommended to use Node Version Manager (`nvm`) to manage Node.js versions.
    - Install `nvm` (if you haven't already): [NVM Installation Guide](https://github.com/nvm-sh/nvm#installing-and-updating)
    - Install a Node.js LTS version (e.g., v20.x.x or as recommended by Shopify CLI documentation):
      ```bash
      nvm install --lts
      nvm use --lts
      ```
2.  **Shopify CLI:**
    - Install Shopify CLI globally using npm:
      ```bash
      npm install -g @shopify/cli @shopify/theme
      ```
    - Verify installation:
      ```bash
      shopify version
      ```

### Initial Setup & Running the Dev Server:

1.  **Clone the Repository:**
    ```bash
    git clone git@github.com:datagekko/rave.git # Or your repository URL
    cd rave # Or your project directory
    ```
2.  **Authenticate Shopify CLI (if not already done):**
    - The most reliable way encountered during this project was to run the `dev` command, which will prompt for login if needed.
3.  **Start the Development Server:**
    - Navigate to your theme directory (e.g., the root of this repository).
    - Run the Shopify CLI `dev` command, specifying your store:
      ```bash
      shopify theme dev --store YOUR_SHOPIFY_STORE.myshopify.com
      ```
      (Replace `YOUR_SHOPIFY_STORE.myshopify.com` with your actual store URL, e.g., `01bb23-0a.myshopify.com`)
    - This will usually open a browser window for authentication and then start the local development server, hot-reloading changes as you make them.

## Key Custom Files and Structure

Customizations are primarily managed through the following files. For more detailed information, refer to the `.cursor/rules/` directory, especially `custom-files-reference.mdc` and `header-logic.mdc`.

- **`assets/rave-custom.css`**: Main stylesheet for all custom CSS overrides and new styles.
- **`assets/rave-custom.js`**: For custom JavaScript functionalities.
- **`snippets/rave-variables.liquid`**: Defines custom CSS variables for brand colors and fonts, and maps them to Dawn's global variables. Included in `layout/theme.liquid` before `rave-custom.css`.
- **`config/settings_schema.json`**: Modified to add "Rave Brand Settings" (e.g., color pickers) to the Theme Customizer.
- **`sections/header.liquid`**: Significantly customized for desktop split navigation and unique mobile layout requirements.
- **`layout/theme.liquid`**: Modified to include the custom assets listed above.
- **`locales/en.default.json`**: For any custom theme text strings.
- **`CUSTOMIZATIONS.md`**: A manual log of important changes and decisions made during development.

## Brand Assets & Styling Conventions

- **Colors:**
  - Primary Text: `#3D2120` (`var(--rave-color-primary-text)`)
  - Background Main: `#FFFFFF` (`var(--rave-color-background-main)`)
  - Secondary Text: `#555555` (`var(--rave-color-secondary-text)`)
  - Accent: `#412F26` (`var(--rave-color-accent)`)
- **Font:** "Inter" font stack (set via Theme Customizer).
- **CSS Variables:** Custom variables are heavily used and defined in `snippets/rave-variables.liquid`.
- **Breakpoints:** Mobile-first. Custom CSS uses `max-width: 749px` for mobile-specific and `min-width: 990px` for desktop-specific overrides.

## Header Customization Summary

- **Desktop (`min-width: 990px`):** Split navigation (Left Nav - Center Logo - Right Nav) when "Logo position" is "Middle center". Implemented with CSS Grid.
- **Mobile (`max-width: 749px`):** Logo left, Hamburger right, when "Mobile logo position" is "Left". Implemented with Flexbox. The mobile menu slides down from under the header using a `max-height` animation.

## Workflow & Debugging

- Changes are made locally and previewed using `shopify theme dev`.
- Refer to `.cursor/rules/common-debugging-steps.mdc` for tips on troubleshooting CSS, cache issues, and using browser developer tools effectively.

This README provides a starting point. Please refer to the `.cursor/rules/` directory for more detailed, AI-consumable context about the project structure and logic.

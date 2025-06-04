# Agent Guide: Rave Yoga Shopify Theme

This repository contains a customized version of the Shopify **Dawn** theme used to recreate the `rave-yoga.com` design. The project is focused on safe theme modifications that remain update friendly.

## Repository Layout

- **`assets/`** – Standard Dawn assets plus custom files [`rave-custom.css`](assets/rave-custom.css) and [`rave-custom.js`](assets/rave-custom.js).
- **`config/`** – Theme settings. `settings_schema.json` adds a _Rave Brand Settings_ section for color pickers.
- **`layout/`** – Main layout files. `theme.liquid` includes the custom snippet and assets.
- **`sections/`** – All theme sections. `header.liquid` contains significant customization for split navigation and mobile layout.
- **`snippets/`** – Reusable fragments. [`rave-variables.liquid`](snippets/rave-variables.liquid) defines CSS variables for brand colors/fonts and maps them to Dawn variables.
- **`locales/`** – Localization files.
- **`CUSTOMIZATIONS.md`** – Manual log of important modifications and decisions.
- **`.cursor/rules/`** – Additional documentation for AI agents. Important files include:
  - `project-overview.mdc` – high level overview and goals.
  - `custom-files-reference.mdc` – list of key custom files.
  - `header-logic.mdc` – explains header split‑nav logic.
  - `styling-conventions.mdc` – brand colors, fonts and CSS conventions.
  - workflow guides such as `super-prompt-3-workflow.mdc` and `workflow-quickfix.mdc`.

## Development Notes

- Follow Git workflows described in `super-prompt-3-workflow.mdc` (feature branches, PRs) or `workflow-quickfix.mdc` for small fixes.
- Custom CSS and JS are isolated in the `assets/rave-*` files. Use CSS variables from `rave-variables.liquid` and keep styles mobile first.
- Prettier settings are defined in `.prettierrc.json` (120 character width, single quotes except in Liquid files).

## How to Learn More

Refer to [`README.md`](README.md) for setup instructions and to `.cursor/rules/` for detailed context on project structure and workflows. The `CUSTOMIZATIONS.md` file tracks changes as the theme evolves.

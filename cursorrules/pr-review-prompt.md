# PR Review Prompt

## Description

This rule provides guidance on reviewing pull requests (PRs) to ensure code quality, adherence to best practices, and alignment with project standards.

## Usage

When reviewing a PR, use this prompt to provide comprehensive feedback on the approach, potential simplifications, and any API usage errors.

## Prompt Template

```
Please review PR (Diff with Main Branch) as if you were a knowledgeable member of the team. Give feedback on the approach, opportunities to simplify, and any errors in API use. Use files from the codebase and @contributing.md to ensure agreed upon practices are used.
```

## Context

- The prompt should be used when reviewing any PR to ensure consistent, high-quality feedback
- It ensures that reviews consider both technical correctness and adherence to project standards
- It consults the .github/contributing.md document and all files in the ./codex directory for specific project guidelines
- Reviews should focus on:
  - Overall approach and architecture
  - Opportunities for simplification or optimization
  - Correct usage of APIs and libraries
  - Adherence to project coding standards
  - Potential edge cases or issues not addressed

## Example

When reviewing a PR that adds a new feature like a JumboText component, you would use this prompt to provide feedback on:

- The approach to implementing the component (e.g., using custom elements)
- Opportunities to simplify the code (e.g., reducing complexity in the font size calculation)
- Any errors in API usage (e.g., incorrect usage of ResizeObserver)
- Adherence to project standards (e.g., following the testing guidelines in contributing.md)

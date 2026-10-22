# Standard Operating Procedure — Read Before Every Task

These rules apply to every task in this repository. The goal is to make focused changes, avoid unnecessary work, preserve existing functionality, and verify that requested changes actually work.

## Scope Rules

1. **Every prompt is an independent task.** Earlier prompts do not add work to the current task.
2. **Work only on requirements explicitly mentioned in the current prompt.**
3. **No unrelated audits, optimization, cleanup, refactoring, redesign, or improvements.**
4. **Do not rework previously completed work** unless the current prompt explicitly asks for it.
5. **Do not recheck unrelated features** unless the current prompt specifically asks for verification.
6. **Identify the minimum files and code needed** for the request and modify only those.
7. **Validate only what this change requires.** Focus on checks that prove the requested change works and did not break what it touches.
8. **Once the requested task and focused validation are complete, STOP.**
9. **Never create additional tasks for yourself.**
10. **Never make "while I'm here" changes.**
11. **A small prompt gets a small, focused execution.**

If any instruction below seems broader than the current request, apply it only as far as the current change requires.

---

## Phase 1 — Before Touching Any File

### 1. Restate the Requirement

Restate the requested change in one or two sentences before acting.

If the prompt could reasonably mean two different things, ask for clarification instead of silently choosing an interpretation.

### 2. Read the Current Implementation

Before editing anything, open and read the relevant existing files.

Do not rely only on memory or assumptions about how the code currently works.

### 3. Define the Exact Scope

Before editing, identify:

* The files that need to change
* The relevant section, component, function, template, style, or configuration
* What specifically will be changed

This scope is binding.

If the implementation requires modifying a file outside the identified scope, stop and explain why before doing so.

### 4. Check Existing Patterns

Before creating a new implementation, search the project for an existing pattern that solves the same or a similar problem.

Prefer the project's existing conventions over introducing a new approach.

### 5. Define Acceptance Criteria

Before making the change, identify what must be true for the task to be considered complete.

Acceptance criteria should be specific and verifiable.

---

## Phase 2 — While Making Changes

### 6. Change Only What Was Requested

Do not make:

* Unrelated refactors
* Formatting sweeps
* Renames
* Cleanup
* Additional styling improvements
* Performance changes
* Accessibility changes unrelated to the request
* Dependency changes unrelated to the request
* "While I'm here" improvements

If an unrelated issue is noticed, mention it at the end. Do not fix it unless requested.

### 7. Do Not Make Unstated Assumptions

If a value, behavior, layout, breakpoint, style, content, or implementation detail is not specified and is not obvious from the existing project, ask before deciding.

Do not invent requirements.

### 8. Check All Relevant States

When changing UI or frontend behavior, check the places that can affect the requested change, including when relevant:

* Desktop
* Tablet
* Mobile
* Responsive overrides
* Hover
* Focus
* Active states
* Existing variants
* Other pages/components using the same code

Only check states relevant to the current change.

### 9. Preserve Existing Behavior

Do not simplify, generalize, or replace existing code unless necessary for the requested change.

Preserve behavior that is outside the current task.

### 10. Do Not Silence Problems

Never hide an error just to make it disappear.

Do not add or use:

* `@ts-ignore`
* `eslint-disable`
* Unnecessary `any`
* Removed tests
* Swallowed exceptions
* Deleted assertions
* Unnecessary `!important`
* Disabled validation
* Suppressed build/type errors

If one of these is genuinely required, stop and explain why before using it.

### 11. No Fake or Placeholder Results

Do not present placeholder, mock, or incomplete content as a finished implementation.

If something must remain stubbed or incomplete, clearly identify it.

---

## Phase 3 — Before Declaring the Task Done

### 12. Verify the Actual Result

Do not assume that code correctness means the feature works.

For UI/frontend changes:

* Run the relevant development environment.
* Load the affected page or feature.
* Verify the exact requested behavior visually or functionally.
* Use screenshots when appropriate.
* Check the specific acceptance criteria rather than performing a general visual review.

For code-only changes:

* Run the most relevant available checks such as typecheck, lint, tests, or build when applicable.
* Do not run unrelated expensive checks without a reason.

### 13. Check Relevant Adjacent States

Verify only the states directly affected by the change.

For example, if a responsive layout is changed, check the relevant breakpoints. If a shared component is changed, check the relevant places where that component is used.

Do not turn this into a full-site audit.

### 14. Review the Git Diff

Before reporting completion:

```bash
git diff
```

Read the diff carefully.

Confirm:

* Only intended files changed.
* Only intended code changed.
* No accidental formatting changes.
* No unrelated modifications.
* No temporary files or debugging code were added.

### 15. Fix Verification Failures

If verification shows that the change is incomplete or causes a regression, fix it before reporting completion.

Do not report a successful task when verification shows otherwise.

### 16. Never Claim Unverified Success

Never write:

* "should work now"
* "this should fix it"
* "I believe it works"
* "presumably fixed"
* "likely resolved"

Completion claims must be supported by actual verification.

If something could not be verified, state:

> Not verified: `<what>`. Reason: `<why>`. To check, run: `<command>`.

---

## Phase 4 — Reporting Back

### 17. Keep the Completion Report Clear

State briefly:

* What changed
* Which files were changed
* Why the change was made
* What was verified
* Any relevant verification result

Do not provide unnecessary technical detail.

### 18. Separate Unrelated Issues

If an unrelated issue was noticed while working, mention it separately as:

**Not fixed:** `<issue>`

Do not fix unrelated issues silently.

Do not go looking for unrelated problems.

### 19. State Assumptions

List any assumptions made during the task.

The target is zero unnecessary assumptions.

### 20. Keep the Summary Short

Do not restate the entire task.

Do not use marketing language.

Report only the useful result.

---

## Failure Protocol

* If the same fix fails twice, stop.
* Do not try a third variation without clarification.
* Report what was tried.
* Report the exact errors.
* Give the two most relevant possible causes.
* Ask for direction.

If the current approach is clearly wrong, say so and stop rather than layering additional fixes on top of it.

Never delete or rewrite a large block of code simply to make an error disappear.

If work is abandoned, clearly state what has been changed and what remains on disk so it can be reverted safely.

---

## Git Rules

Never run any of the following unless explicitly instructed:

* `commit`
* `push`
* `reset`
* `checkout`
* `rebase`
* `merge`
* `stash`
* `clean`
* Force operations such as `--force`

Never amend existing history unless explicitly instructed.

Do not automatically tidy or modify unrelated working-tree changes.

When the task is complete, suggest a concise commit message if useful. Let the user perform the commit unless explicitly asked to do it.

---

## General Project Rules

* Respect the existing project architecture and conventions.
* Prefer existing components, utilities, styles, patterns, and dependencies when they already solve the problem.
* Avoid introducing new dependencies unless the task requires them.
* Do not change project-wide configuration for a local problem unless necessary.
* Do not modify environment variables, deployment configuration, or production settings unless explicitly requested.
* Do not expose or commit secrets, API keys, passwords, tokens, or private credentials.
* Keep changes as small and focused as possible.
* Preserve existing functionality outside the requested scope.

---

## Shopify / Theme Safety

When working with Shopify themes or Shopify-based projects:

* Follow the existing theme architecture and conventions.
* Read the relevant Liquid, JSON, CSS, JavaScript, and configuration files before modifying them.
* Reuse existing theme sections, snippets, blocks, settings, and styles where appropriate.
* Do not change Shopify theme settings or schema unless the task requires it.
* Do not modify store data, products, collections, customers, orders, or other Shopify admin data unless explicitly requested and the required access/tool is available.
* Do not expose Shopify credentials, access tokens, API keys, or private store information.
* Preserve existing responsive behavior and theme functionality outside the requested change.
* Do not introduce custom JavaScript when the requested behavior can be safely achieved using the existing theme structure and styles, unless JavaScript is actually necessary.
* When editing Liquid or theme files, verify that the affected template/section renders correctly.
* When changing theme schema or section settings, verify that the relevant Shopify theme editor behavior still works.

---

## Final Rule

**Do exactly what the current prompt asks, verify that specific work, review the diff, report the result, and stop.**
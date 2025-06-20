# Repository Guidelines

This repository contains a Next.js frontend and a NestJS backend written in TypeScript.

## Commit messages
- Prefer concise messages in Portuguese.

## Formatting
- Use **two spaces** for indentation in TypeScript and JavaScript files.
- After modifying `.ts`, `.tsx`, `.js`, or `.jsx` files, run:
  ```bash
  npx prettier -w <file>
  ```

## Testing
- There are currently no automated tests.
- Ensure `npm install` completes successfully for both `frontend` and `backend` before committing significant changes.

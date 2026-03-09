# Zeely Test Task

Avatar Background Generator is a small React application that opens a sidebar, lets the user trigger background generation, shows generation progress, and displays a selectable list of avatar background options.

## Overview

The app is built around a single feature module, `avatar-background`, which contains:

- UI for the sidebar, prompt area, generate button, grid, and cards
- Context-based state management for sidebar visibility, selection, and generation state
- A feature hook that exposes UI-friendly handlers
- Mock background data used as the source for generated results

At the app level, `src/App.tsx` mounts the `BackgroundProvider`, renders the trigger button, and shows the avatar background sidebar.

## How It Works

1. The user opens the sidebar from the main screen.
2. Pressing `Generate background` starts a simulated generation flow.
3. While generation is running, progress is updated in state and generation controls are disabled.
4. After completion, a random background from the mock dataset is inserted at the top of the list.
5. The user can select any available background from the grid.

The generation logic currently uses a local timer-based mock implementation in the feature context, which makes it easy to replace later with a real API call.

## Project Structure

```text
src/
├─ App.tsx
├─ main.tsx
├─ index.css
├─ features/
│  └─ avatar-background/
│     ├─ context/      # feature state and provider
│     ├─ hooks/        # feature-level UI logic
│     ├─ mocks/        # initial backgrounds
│     ├─ types/        # feature types
│     ├─ ui/           # sidebar and related components
│     └─ index.ts
├─ shared/
│  ├─ constants/
│  ├─ ui/             # reusable UI primitives
│  └─ utils/
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Lucide React

## Development

Install dependencies and start the local dev server:

```bash
yarn install
yarn dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
yarn dev      # start local development server
yarn build    # type-check and create a production build
yarn lint     # run ESLint
yarn preview  # preview the production build locally
```

## Implementation Notes

- State is managed with React context in `src/features/avatar-background/context`.
- `useAvatarGenerator` acts as a thin adapter between raw context state and UI components.
- The feature is organized to keep reusable primitives inside `src/shared` and feature-specific UI inside `src/features/avatar-background/ui`.
- Path aliases are configured in `vite.config.ts`, so imports can use `@/` instead of long relative paths.
- The Vite config also defines `base: "/zeely_test_task/"`, which is useful when deploying under a subpath.

## Possible Next Improvements

- Replace mock generation with a real backend request
- Persist the selected background between sessions
- Add tests for generation flow and selection behavior
- Improve prompt input behavior with undo/redo history and actual prompt regeneration logic

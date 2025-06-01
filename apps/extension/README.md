# PromptCache Extension - Build Instructions

### Project Structure

```
apps/extension/
├── src/
│ ├── assets/       # Static assets
│ ├── components/   # React components
│ ├── entrypoints/  # Extension entry points
│ ├── hooks/        # React hooks
│ ├── public/       # Public assets
│ ├── types/        # TypeScript type definitions
│ └── utils/        # Utility functions
└── package.json    # Project configuration
```

## Requirements

- Node.js v18 or higher (required for React 18 and modern dependencies)
- pnpm v8 or higher (package manager)

### Dependencies

The project uses the following key dependencies:

- WXT
- React 18
- TypeScript
- Tailwind CSS
- ShadcnUI

## Build Steps

1. Install dependencies:

    ```sh
    pnpm install
    ```

2. Build the extension for Firefox:

    ```sh
    pnpm run build:firefox
    ```

3. Create the distribution package:

    ```sh
    pnpm run zip:firefox
    ```

The final extension will be available in the `dist` directory.


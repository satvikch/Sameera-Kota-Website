---
name: test
description: Run build checks and verify the project compiles correctly
disable-model-invocation: true
---

## Run Tests & Checks

This project has no test framework configured. Available checks:

### Build Verification
```bash
npm run build    # Full Vite production build (TypeScript + bundling)
```

### TypeScript Type-Check
```bash
npx tsc --noEmit    # Type-check only, no output
```

### If Tests Are Added Later

Suggest installing:
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

Add to `vite.config.ts`:
```typescript
export default defineConfig({
  // ... existing config
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
  },
})
```

Then test pattern:
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

Use $ARGUMENTS for specific check targets.

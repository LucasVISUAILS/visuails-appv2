// shadcn-svelte's standard class-merge helper. Every generated shadcn-svelte
// component imports this as `import { cn } from "$lib/utils"` — kept here so
// `npx shadcn-svelte@latest add <component>` works with zero extra setup.
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

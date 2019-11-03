import { derived, writable } from 'svelte/store';

export const import = writable('');
export const export = derived(
  import,
  ($import) => import,
);


import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Summary
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgNEg3IiAvPgogIDxwYXRoIGQ9Im0xOCAxNiAzIDMtMyAzIiAvPgogIDxwYXRoIGQ9Ik0zIDR2MTNhMiAyIDAgMCAwIDIgMmgxNiIgLz4KICA8cGF0aCBkPSJNNyAxNGg3IiAvPgogIDxwYXRoIGQ9Ik03IDloMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/summary
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Summary = createLucideIcon('summary', [["path",{"d":"M15 4H7"}],["path",{"d":"m18 16 3 3-3 3"}],["path",{"d":"M3 4v13a2 2 0 0 0 2 2h16"}],["path",{"d":"M7 14h7"}],["path",{"d":"M7 9h12"}]]) as AstroComponent;

export default Summary;

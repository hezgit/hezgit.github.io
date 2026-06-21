
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Clapperboard
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIuMjk2IDMuNDY0IDMuMDIgMy45NTYiIC8+CiAgPHBhdGggZD0iTTIwLjIgNiAzIDExbC0uOS0yLjRjLS4zLTEuMS4zLTIuMiAxLjMtMi41bDEzLjUtNGMxLjEtLjMgMi4yLjMgMi41IDEuM3oiIC8+CiAgPHBhdGggZD0iTTMgMTFoMTh2OGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiIC8+CiAgPHBhdGggZD0ibTYuMTggNS4yNzYgMy4xIDMuODk5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/clapperboard
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Clapperboard = createLucideIcon('clapperboard', [["path",{"d":"m12.296 3.464 3.02 3.956"}],["path",{"d":"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}],["path",{"d":"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["path",{"d":"m6.18 5.276 3.1 3.899"}]]) as AstroComponent;

export default Clapperboard;

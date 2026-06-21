
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name StickyNotes
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgOGEyLjQgMi40IDAgMCAxIDEuNzA2LjcwNmwzLjU4OCAzLjU4OEEyLjQgMi40IDAgMCAxIDE2IDE0djZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWMTBhMiAyIDAgMCAxIDItMnoiIC8+CiAgPHBhdGggZD0iTTEwIDh2NWExIDEgMCAwIDAgMSAxaDUiIC8+CiAgPHBhdGggZD0iTTggNGEyIDIgMCAwIDEgMi0yaDZhMi40IDIuNCAwIDAgMSAxLjcwNi43MDZsMy41ODggMy41ODhBMi40IDIuNCAwIDAgMSAyMiA4djZhMiAyIDAgMCAxLTIgMiIgLz4KICA8cGF0aCBkPSJNMTYgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sticky-notes
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const StickyNotes = createLucideIcon('sticky-notes', [["path",{"d":"M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"}],["path",{"d":"M10 8v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2"}],["path",{"d":"M16 2v5a1 1 0 0 0 1 1h5"}]]) as AstroComponent;

export default StickyNotes;

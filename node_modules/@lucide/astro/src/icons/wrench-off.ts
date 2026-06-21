
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name WrenchOff
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuNzQ3IDUuMDkzYTYgNiAwIDAgMSA2Ljg0MS0yLjg4MmMuNDM4LjEyLjU0LjY2Mi4yMTkuOTg0TDE0LjcgNi4zYTEgMSAwIDAgMCAwIDEuNGwxLjYgMS42YTEgMSAwIDAgMCAxLjQgMGwzLjEwNi0zLjEwNWMuMzItLjMyMi44NjMtLjIyLjk4My4yMThhNiA2IDAgMCAxLTIuODgyIDYuODQyIiAvPgogIDxwYXRoIGQ9Im0xMy41IDEzLjUtNy44OCA3Ljg4YTEgMSAwIDAgMS0yLjk5OS0zbDcuODgtNy44OCIgLz4KICA8cGF0aCBkPSJtMiAyIDIwIDIwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/wrench-off
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const WrenchOff = createLucideIcon('wrench-off', [["path",{"d":"M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842"}],["path",{"d":"m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88"}],["path",{"d":"m2 2 20 20"}]]) as AstroComponent;

export default WrenchOff;

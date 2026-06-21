
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ClockArrowLeft
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNnY2bDEuNS44IiAvPgogIDxwYXRoIGQ9Ik0xMi4zMzggMjEuOTk0YTEwIDEwIDAgMSAxIDkuNTg3LTguNzY3IiAvPgogIDxwYXRoIGQ9Ik0xNCAxOGg4IiAvPgogIDxwYXRoIGQ9Im0xOCAyMi00LTQgNC00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/clock-arrow-left
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ClockArrowLeft = createLucideIcon('clock-arrow-left', [["path",{"d":"M12 6v6l1.5.8"}],["path",{"d":"M12.338 21.994a10 10 0 1 1 9.587-8.767"}],["path",{"d":"M14 18h8"}],["path",{"d":"m18 22-4-4 4-4"}]]) as AstroComponent;

export default ClockArrowLeft;

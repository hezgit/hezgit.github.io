
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Parasol
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuNSAxMS4xMzQgMTguMTk2IDIxIiAvPgogIDxwYXRoIGQ9Ik0yMC40MjUgNS4yOTlhMTAgMTAgMCAwIDAtMTYuOTQxIDkuNzhjLjE4My41NjMuODQzLjc3NCAxLjM1NS40NzhMMjAuMTYgNi43MTFjLjUxMi0uMjk2LjY2LS45NzMuMjY0LTEuNDEzIiAvPgogIDxwYXRoIGQ9Ik0yMSAyMUgzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/parasol
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Parasol = createLucideIcon('parasol', [["path",{"d":"M12.5 11.134 18.196 21"}],["path",{"d":"M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413"}],["path",{"d":"M21 21H3"}]]) as AstroComponent;

export default Parasol;

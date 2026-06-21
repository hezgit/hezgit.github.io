
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name UserRoundArrowLeft
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTkgMTYtMyAzIiAvPgogIDxwYXRoIGQ9Ik0yIDIxYTggOCAwIDAgMSAxMi42NjQtNi41IiAvPgogIDxwYXRoIGQ9Ik0yMiAxOWgtNmwzIDMiIC8+CiAgPGNpcmNsZSBjeD0iMTAiIGN5PSI4IiByPSI1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/user-round-arrow-left
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const UserRoundArrowLeft = createLucideIcon('user-round-arrow-left', [["path",{"d":"m19 16-3 3"}],["path",{"d":"M2 21a8 8 0 0 1 12.664-6.5"}],["path",{"d":"M22 19h-6l3 3"}],["circle",{"cx":"10","cy":"8","r":"5"}]]) as AstroComponent;

export default UserRoundArrowLeft;

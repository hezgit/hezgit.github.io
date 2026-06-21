
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name UserKey
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTF2NiIgLz4KICA8cGF0aCBkPSJNMjAgMTNoMiIgLz4KICA8cGF0aCBkPSJNMyAyMXYtMmE0IDQgMCAwIDEgNC00aDZhNCA0IDAgMCAxIDIuMDcyLjU3OCIgLz4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjciIHI9IjQiIC8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIxOSIgcj0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user-key
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const UserKey = createLucideIcon('user-key', [["path",{"d":"M20 11v6"}],["path",{"d":"M20 13h2"}],["path",{"d":"M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578"}],["circle",{"cx":"10","cy":"7","r":"4"}],["circle",{"cx":"20","cy":"19","r":"2"}]]) as AstroComponent;

export default UserKey;

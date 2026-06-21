
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name RepeatOff
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNjU2IDZIMjFsLTQtNCIgLz4KICA8cGF0aCBkPSJNMTcuODk4IDE3Ljg5OEE0IDQgMCAwIDEgMTcgMThIM2w0LTQiIC8+CiAgPHBhdGggZD0ibTIgMiAyMCAyMCIgLz4KICA8cGF0aCBkPSJNMjEgMTN2MWE0IDQgMCAwIDEtLjE3MSAxLjE1OSIgLz4KICA8cGF0aCBkPSJtMjEgNi00IDQiIC8+CiAgPHBhdGggZD0iTTMgMTF2LTFhNCA0IDAgMCAxIDMuMTAyLTMuODk4IiAvPgogIDxwYXRoIGQ9Im03IDIyLTQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/repeat-off
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const RepeatOff = createLucideIcon('repeat-off', [["path",{"d":"M11.656 6H21l-4-4"}],["path",{"d":"M17.898 17.898A4 4 0 0 1 17 18H3l4-4"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M21 13v1a4 4 0 0 1-.171 1.159"}],["path",{"d":"m21 6-4 4"}],["path",{"d":"M3 11v-1a4 4 0 0 1 3.102-3.898"}],["path",{"d":"m7 22-4-4"}]]) as AstroComponent;

export default RepeatOff;

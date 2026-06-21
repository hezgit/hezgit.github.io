
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name LineStyle
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgNWgyIiAvPgogIDxwYXRoIGQ9Ik0xNSAxMmg2IiAvPgogIDxwYXRoIGQ9Ik0xOSA1aDIiIC8+CiAgPHBhdGggZD0iTTMgMTJoNiIgLz4KICA8cGF0aCBkPSJNMyAxOWgxOCIgLz4KICA8cGF0aCBkPSJNMyA1aDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/line-style
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const LineStyle = createLucideIcon('line-style', [["path",{"d":"M11 5h2"}],["path",{"d":"M15 12h6"}],["path",{"d":"M19 5h2"}],["path",{"d":"M3 12h6"}],["path",{"d":"M3 19h18"}],["path",{"d":"M3 5h2"}]]) as AstroComponent;

export default LineStyle;

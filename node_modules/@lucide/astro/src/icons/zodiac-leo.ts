
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ZodiacLeo
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTZjMC00LTMtNC41LTMtOGE1IDUgMCAwIDEgMTAgMGMwIDMuNDY2LTMgNi4xOTYtMyAxMGEzIDMgMCAwIDAgNiAwIiAvPgogIDxjaXJjbGUgY3g9IjciIGN5PSIxNiIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/zodiac-leo
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ZodiacLeo = createLucideIcon('zodiac-leo', [["path",{"d":"M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0"}],["circle",{"cx":"7","cy":"16","r":"3"}]]) as AstroComponent;

export default ZodiacLeo;

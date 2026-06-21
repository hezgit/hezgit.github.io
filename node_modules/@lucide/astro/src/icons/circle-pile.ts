
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name CirclePile
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjE5IiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iNSIgcj0iMiIgLz4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjEyIiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMTkiIHI9IjIiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjE5IiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSIxMiIgcj0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-pile
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const CirclePile = createLucideIcon('circle-pile', [["circle",{"cx":"12","cy":"19","r":"2"}],["circle",{"cx":"12","cy":"5","r":"2"}],["circle",{"cx":"16","cy":"12","r":"2"}],["circle",{"cx":"20","cy":"19","r":"2"}],["circle",{"cx":"4","cy":"19","r":"2"}],["circle",{"cx":"8","cy":"12","r":"2"}]]) as AstroComponent;

export default CirclePile;

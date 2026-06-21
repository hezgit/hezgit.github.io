
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Volleyball
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgN2ExNiAxNiAyMCAwIDEgMTAuOTggNC4zNjIiIC8+CiAgPHBhdGggZD0iTTEyIDEyYTEzIDEzIDAgMCAxLTguNjYgNSIgLz4KICA8cGF0aCBkPSJNMTYuODMgMTMuNjM0YTE2IDE2IDAgMCAxLTkuMjY3IDcuMzI4IiAvPgogIDxwYXRoIGQ9Ik0yMC42NiAxN0ExMyAxMyAwIDAgMCAxMiAxMmExMyAxMyAwIDAgMSAwLTEwIiAvPgogIDxwYXRoIGQ9Ik04LjE3IDE1LjM2NmExNiAxNiAwIDAgMS0xLjcxMy0xMS42OSIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/volleyball
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Volleyball = createLucideIcon('volleyball', [["path",{"d":"M11 7a16 16 20 0 1 10.98 4.362"}],["path",{"d":"M12 12a13 13 0 0 1-8.66 5"}],["path",{"d":"M16.83 13.634a16 16 0 0 1-9.267 7.328"}],["path",{"d":"M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10"}],["path",{"d":"M8.17 15.366a16 16 0 0 1-1.713-11.69"}],["circle",{"cx":"12","cy":"12","r":"10"}]]) as AstroComponent;

export default Volleyball;

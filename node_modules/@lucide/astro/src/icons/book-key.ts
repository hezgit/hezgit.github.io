
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name BookKey
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgMkg2LjVBMi41IDIuNSAwIDAgMCA0IDQuNXYxNSIgLz4KICA8cGF0aCBkPSJNMTcgMnY2IiAvPgogIDxwYXRoIGQ9Ik0xNyA0aDIiIC8+CiAgPHBhdGggZD0iTTIwIDE1LjJWMjFhMSAxIDAgMCAxLTEgMUg2LjVhMSAxIDAgMCAxIDAtNUgyMCIgLz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjEwIiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-key
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const BookKey = createLucideIcon('book-key', [["path",{"d":"M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15"}],["path",{"d":"M17 2v6"}],["path",{"d":"M17 4h2"}],["path",{"d":"M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{"cx":"17","cy":"10","r":"2"}]]) as AstroComponent;

export default BookKey;
